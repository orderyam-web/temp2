export default class GlobalMainMenuItem{
    constructor(props){
        this.state = {
            id: props.id,
            category: props.category,
            title: props.title,
            description: props.description,
            price: props.price,
            image: props.image,
            options: props.options,
            soldout: props.soldout
        };
    }
}