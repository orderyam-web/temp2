import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increseMenu, decreseMenu, deleteMenu } from '../store/modules/menuList';
import { count_decrement } from '../store/modules/counter';
import OrderCellList from '../OrderCellList';

class MenuListContainer extends Component { //3
    handleIncrement = (id) => {
        this.props.increseMenu(id);
    } ;

    handleDecrement = (id) => {
        this.props.decreseMenu(id);
    } ;
    handleDelete = (id) => {
        let menul = this.props.menulist.filter(menu => menu.id === id);
        let price = 0;
        menul.map((menul) => {price = Number(menul.price) * Number(menul.count);});
        this.props.count_decrement(price);
        this.props.deleteMenu(id);
    } ;

    render() {
        return (
            <OrderCellList
            menuList={this.props.menulist}
            onPlus={this.handleIncrement}
            onMinus={this.handleDecrement}
            onDel={this.handleDelete}
            />
        ) ;
    } 
}


const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
}) ;

const mapDispatchToProps = {increseMenu, decreseMenu, deleteMenu, count_decrement} ; //1

export default connect ( // 스토어와 연결
    mapStateToProps,
    mapDispatchToProps
)(MenuListContainer) ;