import './Arcom.css';
import '../../pages/Pages.css';
import SignalList from "../../components/appList/SignalList";

function Arcom() {
  return (
    <div className="Page">
       <SignalList className="pageContainer" />
    </div>
  );
}

export default Arcom;