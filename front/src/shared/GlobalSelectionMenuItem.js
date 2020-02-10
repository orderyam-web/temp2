export default class GlobalSelectionMenuItem{
    constructor(props){
        this.state = {
            title: props.title,
            type: props.type,
            selection: props.selection,
        };
    }
}