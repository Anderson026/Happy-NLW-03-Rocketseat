/* importando a classe de orfanatos */
import Orphanage from '../models/Orphanage';

/* importando a classe de imagens */
import imageView from '../views/images_view';

/* exprotando a view que vai mostrar os dados no frontend */
export default {
    render(orphanage: Orphanage) {
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imageView.renderMany(orphanage.images)
        };
    },
    /* configurando a view para muitos orfanatos */
    renderMany(orphanages: Orphanage[]) {
        return orphanages.map(orphanage => this.render(orphanage));
    }
};