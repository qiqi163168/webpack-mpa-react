

import React from 'react';
import ReactDOM from 'react-dom';
// import { HotContainer } from 'react-hot-loader';
// import {HashRouter as Router,Route,Link} from 'react-router-dom';

// 页面
import Home from 'pages/login/index.jsx';
import Hello from 'components/helloWorld/hello.jsx';


class App2 extends React.Component{
    render(){
        return(
            <div>
                <Hello />
            </div>
        )
    }
}

ReactDOM.render(
    <App2 />,
    document.getElementById('app2')
);


// 热加载所需
if(module.hot){
    module.hot.accept()
}



