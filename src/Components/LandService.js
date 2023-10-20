import React from 'react'
import './Styles/LandService.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap";
import axios from 'axios';
import { DatePicker, Button, Form, Input, notification } from 'antd';

var CommandDate = new Date();

const openNotification = (notificationText) => {
  notification.info({
    message: (<><h2 style={{fontSize: "16px"}}>Confirmation de Commande</h2></>),
    duration: 3,
    description: (
      <>
        Merci pour votre commande !<br></br><br></br>
        Votre commande a bien été reçue et est en cours de traitement. Veuillez vérifier votre boîte de réception et confirmer votre commande via l'e-mail que nous venons de vous envoyer.<br></br><br></br>
        Veuillez noter que vous avez 24 heures pour confirmer votre commande. Après ce délai, votre commande sera automatiquement annulée.<br></br><br></br>
      </>
    ),
    placement: (window.innerWidth <= 768)? 'topLeft' : 'bottomRight',
  });
};


const onChange = (value, dateString) => {
  //console.log('Formatted Selected Time: ', dateString);
  CommandDate = new Date(dateString);
  console.log(CommandDate);
};


const onOk = (value) => {
  console.log('onOk: ', CommandDate);
};


//const handleSubmit = async (e) => {
//    
//  e.preventDefault();
//
//  const postData = {
//    msg: 'Waa hassen',
//  };
//  const response = await axios({
//    method: 'post',
//    data: postData,
//    url: 'http://localhost:4000/users',
//  })
  
  
//  console.log(response.data);
//  console.log({a:"aaaa",b:"bbbb",c:"cccc"});

//}

const onFinish = async (values: any) => {
  const response = await axios({
    method: 'post',
    mode: 'no-cors',
    data: values,
    headers: { 
      'Access-Control-Allow-Origin' : '*',
    },
    url: 'http://localhost:4000/passCommande',
  })
  console.log(response.data);
  if (response.data == "Command added") {
    openNotification();
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function LandService() {
    return (
      <div className="LandService">
        <div className="LandServiceTitle">
          <h2>Passer une commande</h2>
        </div>
        <Form
          className="CommandForm"
          name="basic"
          labelCol={{
            //span: 0,
          }}
          wrapperCol={{
            //span: 0,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Nom"
            name="name"
            rules={[
              {
                required: true,
                message: 'Veuille saisir votre nom complet!',
              },
            ]}
          >
            <Input placeholder="Nom"/>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir votre email!',
              },
            ]}
          >
            <Input placeholder="Email"/>
          </Form.Item>

          <Form.Item
            name="CommandDate"
            label="Date de commande"
            rules={[{ type: 'object', required: true, message: 'Veuillez selectionner une date!' }]}
          >
            <DatePicker
              showTime
              onChange={onChange}
              onOk={onOk}
            />
          </Form.Item>

          <Form.Item
            label="Lieu de départ"
            name="CommandFrom"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir le lieu de départ!',
              },
            ]}
          >
            <Input placeholder="Lieu de départ"/>
          </Form.Item>

          <Form.Item
            label="Lieu d'arrivée"
            name="CommandTo"
            rules={[
              {
                required: true,
                message: "Veuillez saisir le lieu d'arrivée!",
              },
            ]}
          >
            <Input placeholder="Lieu d'arrivée"/>
          </Form.Item>

          <Form.Item
            label="Description du job"
            name="CommandDesc"
            rules={[
              {
                required: true,
                message: "Veuillez saisir la description du job!",
              },
            ]}
          >
            <Input
              //showCount
              maxLength={100}
              style={{ height: 120, resize: 'none' }}
              placeholder="Description du job"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              //offset: 8,
              //span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Passer la commande
            </Button>
          </Form.Item>
        </Form>
      </div>
      
    );
  }
  
  export default LandService;