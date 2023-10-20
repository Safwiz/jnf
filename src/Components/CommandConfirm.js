import React from 'react'
import { Result } from 'antd';

function CommandConfirm() {
    return (
        <div className="CommandConfirm">
            <Result
                status="success"
                title="Commande confirmée avec success!"
                //subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            />
      </div>
    );
  }
  
  export default CommandConfirm;