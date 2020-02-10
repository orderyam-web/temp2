export default class GlobalMainMenuItem{
    constructor(props){
        this.state = {
            id: props.id,
            title: props.title,
            description: props.description,
            price: props.price,
            image: props.image,
            options: props.options
        };
    }
}