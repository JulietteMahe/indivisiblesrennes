import React, { useEffect } from 'react';
import SignalDetail from './SignalDetail';
import './List.css';
import '../../pages/Pages.css';

const SignalList = (props) => {

    useEffect(() => {
        if (props.id) {
            /*Axios
                .get(`https://api.jsonserve.com/12vMm4`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))*/
        } else {
            /*Axios
                .get("https://api.jsonserve.com/12vMm4")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))*/
        }
    }, [props.id])


    return (
        <div className="pageContainer">
            <div class="postList"> 
                <div class="postContainer">         
            {[
    
    {
        "id": 3,
        "date": "",
        "globalpic1": "https://i.ibb.co/0Kxgf6T/POST-ARCOM-RECTO-2.png",
        "linkArcom":"https://www.csa.fr/Mes-services/Alerter-le-CSA-sur-un-programme/formulaire#/",
        "jesuis": "un particulier",
        "typemedia": "Télévision",
        "nomchaine": "",
        "datediff": "",
        "heurediff": "",
        "debutsequence": "",
        "description": "LUCIE CASTETS"
    },
    {
        "id": 3,
        "date": "",
        "globalpic1": "https://i.ibb.co/t4FJKdm/POST-ARCOM-RECTO-1.png",
        "linkArcom":"https://www.csa.fr/Mes-services/Alerter-le-CSA-sur-un-programme/formulaire#/",
        "jesuis": "un particulier",
        "typemedia": "Radio",
        "nomchaine": "",
        "datediff": "",
        "heurediff": "",
        "debutsequence": "",
        "description": "CONSIGNY"
    }
    ,
    {
        "id": 3,
        "date": "",
        "globalpic1": "https://i.ibb.co/t4FJKdm/POST-ARCOM-RECTO-1.png",
        "linkArcom":"https://www.csa.fr/Mes-services/Alerter-le-CSA-sur-un-programme/formulaire#/",
        "jesuis": "un particulier",
        "typemedia": "Rattrapage / Replay / VOD",
        "nomchaine": "",
        "datediff": "",
        "heurediff": "",
        "debutsequence": "",
        "description": "TEST"
    }


    ].map((app, index) => {
                    return (
                        <SignalDetail  className= "AppDetail"
                        key={index}
                        id={app.id}
                        date={app.date}
                        globalpic1={app.globalpic1} 
                        linkArcom = {app.linkArcom}
                        jesuis={app.jesuis} 
                        typemedia={app.typemedia} 
                        nomchaine={app.nomchaine} 
                        datediff={app.datediff} 
                        heurediff={app.heurediff} 
                        debutsequence={app.debutsequence} 
                        description={app.description}                     
                        /> 
                    )
                })}
            
            </div>
            </div>  
            
        </div>
    )
}

export default SignalList;