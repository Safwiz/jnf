import React from 'react'
import { Tabs, Steps, Descriptions } from 'antd';

const tabList = new Array(0);
tabList.push("Commandes Confirmées");
tabList.push("Commandes non Confirmées");

function getCommands(commands, confirmStatus) {
    
    const getCommandDetails = (dbObject) => {
        const items = [
            {
                key: '1',
                label: 'ID',
                children: dbObject['id'],
            },
            {
                key: '2',
                label: 'Lieu de départ',
                children: dbObject['lieu_depart'],
            },
            {
                key: '3',
                label: "Lieu d'arrivée",
                children: dbObject['lieu_arrivee'],
            },
            {
                key: '4',
                label: 'Date de commande',
                children: dbObject['date'],
            },
            {
                key: '5',
                label: 'Description du job',
                children: dbObject['description'],
            },
        ];
        return items;
    }
    if (confirmStatus == 1) {
        const command = commands.commandList;
        return (
            <>
                <div className="commandsComponent">
                    {Object.entries(command).map(([key, innerObject]) => (
                        <div key={key} className="CommandComponent">
                            <div className="CommandStatus">
                               <Steps
                                    size="small"
                                    current={command[key].status}
                                    items={[
                                        {
                                            title: 'Commande Confirmée',
                                        },
                                        {
                                            title: 'Commande en progrés',
                                        },
                                        {
                                            title: 'Commande Delivrée',
                                        },
                                    ]}
                                /> 
                            </div>
                            <div key={key}  className="CommandDetails">
                                <Descriptions className="CommandDetailsText" title="Détails de la commande" items={getCommandDetails(innerObject)} />
                            </div>
                    </div>))}
                </div>
            </>
        )
    }
}

function CommandsList(commandList) {
    return (
      <div className="CommandsList">
        <Tabs
            defaultActiveKey="1"
            centered
            items={tabList.map((k, i) => {
                const id = String(i + 1);
                return {
                    label: `${k}`,
                    key: id,
                    children: getCommands(commandList, id),
                };
            })}
        />
      </div>
    );
  }
  
  export default CommandsList;