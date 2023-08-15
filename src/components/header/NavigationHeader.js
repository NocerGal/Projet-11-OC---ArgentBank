import LOGO from '../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

function NavigationHeader({ name }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LOGO}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} />
          {name}
        </Link>
        <Link className="main-nav-item" to="/sign-in">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Log out
        </Link>
      </div>
    </nav>
  );
}

export default NavigationHeader;