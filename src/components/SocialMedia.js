import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';


const socialMedia = () =>{
    return(
        <div className="socialMedia__container">
            <FontAwesomeIcon icon={faFacebookF} className="icon"/>
            <FontAwesomeIcon icon={faInstagram} className="icon"/>
            <FontAwesomeIcon icon={faTwitter} className="icon"/>
        </div>
    );
};

export default socialMedia;