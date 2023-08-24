// Bibliothèques externes
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Imports locaux
import { putChangeUserName } from '../services/api';
import { stateUserName } from '../../Slices/redux';

function EditUserInfo({
  form_title,
  save_button,
  cancel_button,
  display,
  firstName,
  lastName,
  userNameProps,
}) {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const token = localStorage.getItem('token');

  // Handlers
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleClickPut = (e) => {
    e.preventDefault();
    putChangeUserName(token, userName);
    dispatch(stateUserName(userName));
    localStorage.setItem('userName', userName);
    navigate(`/user/${userName}`);
  };

  // JSX
  return (
    <>
      <div className={display ? 'form-user' : 'form-user__hide'}>
        <h3>{form_title}</h3>
        <form>
          <div>
            <label htmlFor="user_name">User name:</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder={userName}
              onChange={handleChangeUserName}
            />
          </div>
          <div>
            <label htmlFor="first_name">First name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder={firstName}
              disabled={true}
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder={lastName}
              disabled={true}
            />
          </div>
          <div className="buttons">
            <button onClick={handleClickPut}>{save_button}</button>
            <button>{cancel_button}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserInfo;
