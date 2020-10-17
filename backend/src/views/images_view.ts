/* importando a classe de orfanatos */
import Image from '../models/Image';

/* exprotando a view que vai mostrar os dados no frontend */
export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.0.25:3333/uploads/${image.path}`,
        };
    },
    /* configurando a view para muitos orfanatos */
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
};

