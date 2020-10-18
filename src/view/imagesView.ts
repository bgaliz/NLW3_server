import Image from '../models/Images';


export default {
    render(image:Orphanage) {
        return {
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        };
    }

    renderMany(Image: Image[]){
        return Image.map(image => this.render(image)) 
    }
}