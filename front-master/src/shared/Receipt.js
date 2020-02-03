import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// import './global.css';
import * as serviceWorker from '../serviceWorker';
import {Link} from "react-router-dom";
import checkstyle from './receipt.module.css';
import logo from './mark3.png';
import { connect } from 'react-redux';
//import { addMenu } from './store/modules/menuList';
class Receipt extends Component{
    constructor(props){
        super(props);
    }
   
    
    
    render(){
        var d=new Date();
        if(d.getHours()>12){
            var timecut="오후";
            var dhour=d.getHours()-12;
        }
        else{
            var timecut="오전";
            var dhour=d.getHours()
        }
        let ordername = this.props.menulist.concat({name:'null'})[0];
        return(
            <Fragment>
            <img className={checkstyle.logo} src={logo}></img>
            <div className={checkstyle.text1}>주문이 완료<div className={checkstyle.text2}>되었습니다!</div></div>
            <div className={checkstyle.line}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div className={checkstyle.text3}>주문번호</div>
            <div className={checkstyle.number}>103</div>
            <div className={checkstyle.line}>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            <div className={checkstyle.info}>카페드림 중앙대점</div>
            <div className={checkstyle.info}>{ordername.name} 외 {Number(this.props.menucount) - 1}개</div>
            <div className={checkstyle.info}>{d.getFullYear()}-{(d.getMonth())+1}-{d.getDate()} {timecut} {dhour}:{d.getMinutes()}</div>
            <Link to= './'>
            <div className={checkstyle.Container}>메인페이지로 이동</div>
            </Link>
            
            </Fragment>
        )
    }
}

const mapStateToProps = ({ menuList}) => ({  //2
    menulist: menuList.list,
    menucount: menuList.totalCount
}) ;

export default connect ( // 스토어와 연결
    mapStateToProps
)(Receipt) ;