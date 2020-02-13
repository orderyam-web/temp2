import React, { Component, Fragment } from 'react';
import ReactTimeout from 'react-timeout'
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import DetailAppBar from './DetailAppBar';
import DetailCentralSelection from './DetailCentralSelection';
import GlobalSelectionMenuItem from './GlobalSelectionMenuItem'
import DetailBottomButton from './DetailBottomButton';
import checkstyle from './MenuPlusAttention.module.css';
import enableCheck from './circle.png';
import { connect } from 'react-redux';
import { addMenu } from './store/modules/menuList';
import { count_increment } from './store/modules/counter';

// import styles from './MenuDetail.css';
class MenuDetail extends Component{
    constructor(props){
        super(props);
    }

    state = {
        addedToOrder : false,
        opacity : 1.0,
        menu : {
            name: this.props.location.state.menu_id,
            price: this.props.location.state.price,
            options: [],
            count: 1
        }
    }

    addOrder = () => {
        this.setState({
            addedToOrder : true,
            opacity : 0.3
        })
        this.props.addMenu(this.state.menu)
        this.props.count_increment(Number(this.state.menu.price) * Number(this.state.menu.count))
    }
    handleClick = () => {
        this.addOrder()
        setTimeout(()=>{this.setState({addedToOrder:false,opacity:1})}, 2000)
        setTimeout(()=>{this.props.history.push('/');}, 2000)
    }
    addOption = (option) => {
        if (option !== ''){
            this.setState(prevState => ({
                menu: {                   
                    ...prevState.menu,    
                    options: prevState.menu.options.concat(option)       
                }
            }))
        }
    }
    delOption = (option) => {
        this.setState(prevState => ({
            menu: {                   
                ...prevState.menu,    
                options: prevState.menu.options.filter(op => op !== option)       
            }
        }))
    }

    addMenuPrice = (value) => {
        this.setState(prevState => ({
            menu: {                   
                ...prevState.menu,    
                price : Number(prevState.menu.price) + Number(value)   
            }
        }))
    }
    addMenuCount = (value) => {
        this.setState(prevState => ({
            menu: {                   
                ...prevState.menu,    
                count : Number(this.state.menu.count) + Number(value>0)*2 -1   
            }
        }))
    }

    render(){
        const { description, options, menu_id } = this.props.location.state ;
        let list = options.map(option => new GlobalSelectionMenuItem({title:option.title, type:option.type, selection:option.option}))
        return(
            <Fragment>
                <div style={{position:'absolute', backgroundColor:'#F2F2F2', height:'auto', width:'100%'}}>
                    <DetailAppBar title="메뉴 선택"></DetailAppBar>
                    <div style={{marginTop:'86px', marginBottom:'179px', opacity:this.state.opacity}}>
                        {/* array of GlobalSelectionMenuItem from above */}
                        <DetailCentralSelection title={menu_id} data={list} description={description} price={this.state.menu.price} count={this.state.menu.count} addOption={this.addOption} delOption={this.delOption} addMenuPrice={this.addMenuPrice} addMenuCount={this.addMenuCount}></DetailCentralSelection>
                        <DetailBottomButton addOrder={this.handleClick} ordernow={this.addOrder}></DetailBottomButton>
                    </div>
                </div>
                <div className={checkstyle.backbox} style={this.state.addedToOrder ? {display : 'block'} : {display : 'none'}}>
                    
                      <div className={checkstyle.circle}></div>
                    
                    <div className={checkstyle.text}>주문표에 추가되었습니다!</div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
}) ;

const mapDispatchToProps = {addMenu, count_increment} ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(MenuDetail) ;