/* importando o error request handler para verificar os erros */
import { ErrorRequestHandler } from 'express';
/* importando o validationError para criar mais de uma mensagem de tratavita de erros */
import { ValidationError } from 'yup'

/* criando o tipo de validationErrors */
interface ValidationErrors {
    [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        let errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        })

        return response.status(400).json({ message: 'Validation fails!', errors })
    }
    
    console.error(error);

    return response.status(500).json({ message: 'Internal server error!' })
    
};

export default errorHandler;