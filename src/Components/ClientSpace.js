import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Styles/ClientSpace.css'
import LoginPanel from './LoginPanel';
import UserDash from './UserDash';
import Slider from './Slider'
import Footer from './Footer'
import Copyrights from './Copyrights'
import {message} from 'antd'

function ClientSpace() {

    const [messageApi, contextHolder] = message.useMessage();

    const error = () => {
        messageApi.open({
            type: 'error',
            content: "Clinet n'existe pas",
            className: 'LoginErrorMessage'
        });
    };
    
    const [loginState, setLoginState] = useState(false);
    const [userName, setUsername] = useState("");

    useEffect(() => {
    // Check the user's login status from the server
        async function checkLoginStatus() {
            const response = await axios({
                method: 'get',
                mode: 'no-cors',
                headers: { 
                    'Access-Control-Allow-Origin' : '*',
                },
                url: 'http://localhost:4000/checkLoginStatus',
            })
            const returnData = JSON.parse(response.data);
            setLoginState(returnData[0].loggedin);
            setUsername(returnData[0].user);
        }

        checkLoginStatus();
    }, []);

    const onFinish = async (values) => {
        console.log('Success:', values);
        const response = await axios({
            method: 'post',
            mode: 'no-cors',
            data: values,
            headers: { 
                'Access-Control-Allow-Origin' : '*',
            },
            url: 'http://localhost:4000/login',
        })
        console.log(JSON.parse(response.data));
        const returnData = JSON.parse(response.data);
        if (returnData[0].res == "not exist") {
            error();
        } else if (returnData[0].res == "loggedin") {
            console.log(loginState);
            setLoginState(returnData[0].loggedin);
            setUsername(returnData[0].user);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="ClientSpace">
            {contextHolder}
            <Slider text={"Espace Client"} />
            {loginState && <UserDash user={userName} />}
            {!loginState && <LoginPanel onFinish={onFinish} onFinishFailed={onFinishFailed} />}
            <Footer />
            <Copyrights />
        </div>
    )
}
  export default ClientSpace;