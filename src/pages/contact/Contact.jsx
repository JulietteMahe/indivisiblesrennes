import ButtonMailto from "./ButtonMailto.jsx";
import './Contact.css';
import '../../pages/Pages.css';

function Contact() {
  return (
    <div className="Page">
      <div className="pageContainer">
        <div className="contactCard">
        <p className="contactText">Vous voulez en savoir plus ?</p>     
        <div type="button" class="btn btn-light">
          <a className = "linkStyle" href="https://linktr.ee/indivisiblesrennes?utm_source=linktree_profile_share&ltsid=f3ab3996-4ec6-447c-babd-d04fa589c1ba">
              <p>Retrouvez-nous sur Linktree</p>
          </a>
        </div>        
        <ButtonMailto label="Ecrivez-nous un email" mailto="mailto:indivisiblesrennes@proton.me" />
        </div>  
      </div>
    </div>
  );
}

export default Contact;