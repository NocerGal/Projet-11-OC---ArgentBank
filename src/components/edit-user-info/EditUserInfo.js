import { useParams } from 'react-router-dom';

function EditUserInfo({ form_title, save_button, cancel_button, display }) {
  const { id } = useParams();

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
              placeholder="Your user name..."
            />
          </div>
          <div>
            <label htmlFor="first_name">first name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Your first name..."
            />
          </div>
          <div>
            <label htmlFor="last_name">last name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Your last name..."
            />
          </div>
          <div className="buttons">
            <button>{save_button}</button>
            <button>{cancel_button}</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUserInfo;
