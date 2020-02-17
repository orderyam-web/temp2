import React, { Component } from 'react';

import './global.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class MainBanner extends Component {
    render() {
        this.innerContent = [];

        this.state = {
            images: this.props.images,
            innerContent: <div></div>,
        };
        for (let value in this.state.images){
            this.innerContent.push(<div><img src={this.state.images[value]}/></div>)
        }
        return (
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay showArrows={false} showIndicators={false}>
                {this.innerContent}
            </Carousel>
        );
    }
  };