import React, { useEffect } from 'react';
import AppDetail from './AppDetail';
import './List.css';
import '../../pages/Pages.css';

const AppList = (props) => {

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
        "date": "20241014",
        "globalpic1": "https://i.ibb.co/pWFgChv/POST-ASE-1.png",
        "link1": "https://www.capital.fr/economie-politique/aide-a-lenfance-un-scandale-a-630-000-euros-revele-de-graves-failles-dans-la-protection-des-mineurs-1503081",
        "link2": "https://www.madmoizelle.com/les-enfants-confies-a-lase-subissent-toujours-des-violences-sexuelles-une-fois-places-1506489",
        "link3": "https://france3-regions.francetvinfo.fr/centre-val-de-loire/indre/chateauroux/violences-humiliations-travail-force-19-personnes-bientot-jugees-a-chateauroux-pour-maltraitances-sur-des-mineurs-confies-par-l-aide-sociale-a-l-enfance-3041174.html",
        "link4": "https://www.leparisien.fr/faits-divers/scandale-des-enfants-places-du-nord-jai-mis-des-annees-a-me-relever-la-memoire-a-vif-dangelina-12-10-2024-ZJ5FCC7YFNBGHDBE2PLB45LUTE.php",
        "link5":"https://www.lanouvellerepublique.fr/chateauroux/humilies-comme-vous-ne-pouvez-l-imaginer-le-proces-des-enfants-places-du-nord-s-ouvre-lundi-a-chateauroux",
        "link6":"",
        "linkdesc1": "Capital",
        "linkdesc2": "Madmoizelle",
        "linkdesc3": "France 3 Régions",
        "linkdesc4": "Le Parisien",
        "linkdesc5": "La nouvelle république",
        "linkdesc6": "",
        "description": "LES ENFANTS PLACES DU NORD"
    },
    {
        "id": 2,
        "date": "20241011",
        "globalpic1": "https://i.ibb.co/fqPsR07/POST-BOLLORE-ROUEN-1.png",
        "link1": "https://actu.fr/normandie/grand-couronne_76319/incendie-de-bollore-logistics-les-batteries-qui-ont-brule-n-avaient-rien-a-faire-la-selon-la-prefecture_61707519.html",
        "link2": "https://www.francebleu.fr/infos/environnement/incendie-de-bollore-logistics-l-entreprise-n-avait-pas-d-autorisation-pour-stocker-ces-batteries-au-lithium-6499509",
        "link3": "https://www.bfmtv.com/normandie/incendie-de-bollore-logistics-la-prefecture-met-en-cause-le-stockage-non-autorise-de-batteries-au-lithium_AV-202410090976.html",
        "link4": "https://www.seine-maritime.gouv.fr/Actualites/Incendie-Bollore-Logistics-le-rapport-post-accident-publie",
        "link5":"https://www.actu-environnement.com/ae/news/incendie-bollore-logistics-dechets-dangereux-stockage-sans-autorisation-mise-en-demeure-44862.php4",
        "link6":"https://www.ouest-france.fr/faits-divers/incendie/incendie-a-bollore-logistics-lentreprise-stockait-des-dechets-dangereux-sans-autorisation-cc934350-863f-11ef-a461-dc3a2eb2c9d7",
        "linkdesc1": "ActuFr",
        "linkdesc2": "France Bleu",
        "linkdesc3": "BFMTV",
        "linkdesc4": "Seine-Maritime.gouv.fr",
        "linkdesc5": "Actu Environnement",
        "linkdesc6": "Ouest France",
        "description": "BOLLORE LOGISTICS"
    },
    {
        "id": 2,
        "date": "20240930",
        "globalpic1": "https://i.ibb.co/gRQy7Jz/GREVE-HOWTO-1.png",
        "link1": "https://www.service-public.fr/particuliers/vosdroits/F117",
        "link2": "https://www.service-public.fr/particuliers/vosdroits/F499",
        "link3":"",
        "link4":"",
        "link5":"",
        "link6":"",
        "linkdesc1": "servicepublic.fr Droit de grève secteur privé",
        "linkdesc2": "servicepublic.fr Droit de grève secteur public",
        "linkdesc3": "",
        "linkdesc4": "",
        "linkdesc5": "",
        "linkdesc6": "",
        "description": "DROIT DE GREVE"
    },
    {
        "id": 3,
        "date": "20240921",
        "globalpic1": "https://i.ibb.co/PrH8RdQ/POST-ECOLO-1-1.png",
        "link1": "https://www.huffingtonpost.fr/environnement/video/nestle-waters-echappe-a-un-proces-en-france-pour-ses-eaux-minerales-et-c-est-grace-a-cette-loi-de-2016_239550.html",
        "link2": "https://reporterre.net/Nestle-echappe-a-un-proces-Une-multinationale-peut-donc-tromper-et-s-en-tirer",
        "link3":"",
        "link4":"",
        "link5":"",
        "link6":"",
        "linkdesc1": "Huffington Post",
        "linkdesc2": "Reporterre",
        "linkdesc3": "",
        "linkdesc4": "",
        "linkdesc5": "",
        "linkdesc6": "",
        "description": "PAUL WATSON"
    },
    {
        "id": 2,
        "date": "20240917",
        "globalpic1": "https://i.ibb.co/mGqLdrX/20240917-POST-COUT-DISSOL-1.png",
        "link1": "https://www.unaf.fr/ressources/budget-type-famille-a-un-homme-une-femme-deux-garcons-ages-de-6-a-13-ans/",
        "link2": "https://www.capital.fr/votre-argent/le-cout-faramineux-de-la-dissolution-de-lassemblee-nationale-1502420",
        "link3":"",
        "link4":"",
        "link5":"",
        "link6":"",
        "linkdesc1": "UNAF",
        "linkdesc2": "Capital",
        "linkdesc3": "",
        "linkdesc4": "",
        "linkdesc5": "",
        "linkdesc6": "",
        "description": "OU EST PASSE L'ARGENT?"
    },
    {
        "id": 1,
        "date": "20240915",
        "globalpic1": "https://i.ibb.co/yQtknBY/POST-ECOLO-1.png",
        "link1": "https://www.huffingtonpost.fr/environnement/video/nestle-waters-echappe-a-un-proces-en-france-pour-ses-eaux-minerales-et-c-est-grace-a-cette-loi-de-2016_239550.html",
        "link2": "https://reporterre.net/Nestle-echappe-a-un-proces-Une-multinationale-peut-donc-tromper-et-s-en-tirer",
        "link3": "https://www.lefigaro.fr/societes/nestle-voit-son-benefice-net-bondir-de-20-en-2023-20240222",
        "link4":"",
        "link5":"",
        "link6":"",
        "linkdesc1": "HuffingtonPost",
        "linkdesc2": "Reporterre",
        "linkdesc3": "Le Figaro",
        "linkdesc4": "",
        "linkdesc5": "",
        "linkdesc6": "",
        "description": "NESTLE WATTERS"
    }



    ].map((app, index) => {
                    return (
                        <AppDetail  className= "AppDetail"
                        key={index}
                        id={app.id}
                        date={app.date}
                        globalpic1={app.globalpic1} 
                        link1={app.link1} 
                        link2={app.link2} 
                        link3={app.link3}
                        link4={app.link4} 
                        link5={app.link5} 
                        link6={app.link6}
                        linkdesc1={app.linkdesc1} 
                        linkdesc2={app.linkdesc2} 
                        linkdesc3={app.linkdesc3} 
                        linkdesc4={app.linkdesc4} 
                        linkdesc5={app.linkdesc5} 
                        linkdesc6={app.linkdesc6} 
                        description={app.description}                     
                        /> 
                    )
                })}
            
            </div>
            </div>  
            
        </div>
    )
}

export default AppList;