import React from 'react';
import { Tabs } from 'antd';
import LandService from './LandService.js'
import Slider from './Slider'
import Footer from './Footer.js'
import Copyrights from './Copyrights'
import './Styles/OnlineServices.css'

const {TabPane} = Tabs;

function OnlineServices() {
    return (
      <div className="OnlineServices">
        <Slider text={'Services Enligne'}/>
        <div className="TabPanel">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Services de transport terrestre" key="1">
                    <LandService />
                </TabPane>
            </Tabs>
        </div>
        <Footer />
        <Copyrights />
      </div>
    );
  }
  
  export default OnlineServices;