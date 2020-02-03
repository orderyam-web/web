import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import * as serviceWorker from '../serviceWorker';

import checkstyle from './OrderDetail.module.css';
import DetailAppBar from './DetailAppBar';
import OrderCentralSelection from './OrderCentralSelection';
import OrderBottomButton from './OrderBottomButton';
import kakao from './kakao.png';
import card from './card.png';
import Paymentpage from './Paymentpage';
export default class OrderDetail extends Component{
    constructor(props){
        super(props);
    }
    
    state = {
        addedToOrder : false,
        opacity : 1.0,
        cellnum : 0,
        num :0,
    }
    savecellnum(){
        var cellnum = document.getElementById("cellnum").value;
        var as=cellnum;
        }
    
    addOrder = () => {
        this.setState({
            addedToOrder : true,
            opacity : 0.3
        })
    }
    handleClick = () => {
        this.addOrder()
        
    }

    
       
        
    render(){
        function savecellnum(){
            var cellnum = document.getElementById("cellnum").value;
            var temp=cellnum;
            }
        return(
            <Fragment>
            <div style={{position:'absolute', backgroundColor:'#F2F2F2', height:'auto', width:'100%', opacity:this.state.opacity}}>
                <DetailAppBar title="결제하기"></DetailAppBar>
                <div style={{marginTop:'86px', marginBottom:'179px'}}>
                    <OrderCentralSelection></OrderCentralSelection>
                    <OrderBottomButton addOrder={this.handleClick}></OrderBottomButton>
                </div>
                </div>
                <div className={checkstyle.backbox} style={this.state.addedToOrder ? {display : 'block'} : {display : 'none'}}>
                    <div className={checkstyle.text1}>알림톡 서비스를 위한 핸드폰 번호를 입력해주세요!</div>
                    <div className={checkstyle.phonebox} id="cellnum">
                        
                        <input type="text"></input><input type="text"></input><input type="text"></input>

                    </div>
                    <div className={checkstyle.text2}>결제수단 선택</div>
                    <img src={kakao}className={checkstyle.kakao} ></img>
                    <img src={card} className={checkstyle.card} ></img>
                    <Paymentpage></Paymentpage>
                    </div>
            
            </Fragment>
        )
    }
}