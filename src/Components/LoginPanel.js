import React from 'react'
import { Form, Input, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import './Styles/LoginPanel.css'

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

function LoginPanel(props) {
  const { onFinish, onFinishFailed } = props;
  return (
      <div className="LoginPanel">
        <div className="LoginForm" >
          <div className="LoginFormTitle">
            <h2>Connexion</h2>
          </div>
          <Form
            className="LoginPanelForm"
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
          <Form.Item
              label="Identifiant"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Veuillez saisir votre identifiant!',
                },
              ]}
          >
            <Input placeholder="example@jnfreight.tn"/>
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              {
                required: true,
                message: 'Veuillez saisir votre mot de passe!',
              },
            ]}
          >
              <Input.Password />
          </Form.Item>
          
          <Spin className="LoginLoading" indicator={antIcon} />  
            
          <Form.Item>
              <Button type="primary" htmlType="submit">
                S'identifier
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
  
  export default LoginPanel;