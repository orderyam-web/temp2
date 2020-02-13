import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './global.css';
import * as serviceWorker from '../serviceWorker';

import styles from './MainCategoryBar.module.css';
import arrow_left from './left.svg';
import arrow_right from './right.svg';
import slider_pill from './slider_pill.svg'


export default class MainCategoryBar extends React.Component{
    constructor(props){
      super(props);
    }
    
    render(){
        
        return(
            <div className={styles.TabSelectionSlider}>
                <img className={styles.SliderLeftArrowImage} alt="left" src={arrow_left} />
                <img className={styles.SliderRightArrowImage} alt="right" src={arrow_right} />
                <TabSelectionSliderContainer  category={this.props.category}></TabSelectionSliderContainer>
            </div>
        );
        }
}
  


class TabSelectionSliderContainer extends React.Component{
    constructor(props){
        super(props);

    }

    state = {
        categorycount:0,
    }
    handling = (id) => {
        this.setState({
            categorycount:id,
        })
        
    } ;

    render(){
        let innerContent = this.props.category.map(item => <TabSelectionSliderElement text={item}  showPill={this.state.categorycount} handling={this.handling}/>)
    //     for(let i in this.props.category){
    //         innerContent.push(<TabSelectionSliderElement   text={this.props.category[i]} showPill={this.state.categorycount} index={i} handling={this.handling}/>);
    // }

        return(
            <div className={styles.TabSelectionSliderContainer}>
                {innerContent}
            </div>
        );
    }
}
class TabSelectionSliderElement extends React.Component{
    constructor(props){
        super(props);
        this.text = props.text
        if(this.text === undefined){
            this.text = "섹션"
        }
    }
    render(){
        return(
            <div className={styles.SliderElementContainer} onClick={() =>this.props.handling(this.text)}>
                <img className={styles.SliderElementPill} style={this.props.showPill === this.text ? {} : {opacity:0}} />
                <div className={styles.SliderElementText}>{this.text}</div>
            </div>
        )
    }
}
