/*
* @Author: Micky
* @Date:   2018-05-21 18:58:23
* @Last Modified by:   Micky
* @Last Modified time: 2018-05-22 10:50:38
*/

import React from 'react';
import ReactDOM from 'react-dom';
// import { HotContainer } from 'react-hot-loader';
// import {HashRouter as Router,Route,Link} from 'react-router-dom';

// 页面
import Home from 'pages/login/index.jsx';
import Hoometest from 'components/ttt.jsx';


class App extends React.Component{
    render(){
        return(
            <div>
                <Hoometest />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


// 热加载所需
if(module.hot){
    module.hot.accept()
}



