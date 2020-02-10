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
    
    state = {
        categorycount:0,
    }
    handling = (id) => {
        this.setState({
            categorycount:id,
        })
    } ;
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
  
let innerContent;

class TabSelectionSliderContainer extends React.Component{
    constructor(props){
        super(props);
        innerContent=[]
    }
    render(){
        for(let i in this.props.category){
            if(i===this.categorycount){
               
                this.showPill=true;
            innerContent.push(<TabSelectionSliderElement   text={this.props.category[i]} showPill/>);
        }
        else{
            this.showPill=false;
            
            innerContent.push(<TabSelectionSliderElement  text={this.props.category[i]} false/>);
        }
    }

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
        this.showPill = props.showPill
    }
    render(){
        
        if(this.showPill === true){
            return(
                <div className={styles.SliderElementContainer}>
                    <div className={styles.SliderElementPill}/>
                    <div className={styles.SliderElementText}>{this.text}</div>
                </div>
            );
        }
        else{
            return (
                <div className={styles.SliderElementContainer}>
                    <img className={styles.SliderElementPill} style={{opacity:0}}/>
                    <div className={styles.SliderElementText}>{this.text}</div>
                </div>
            );
        }
    }
}
