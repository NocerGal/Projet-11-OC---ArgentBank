import NavigationHeader from '../components/header/NavigationHeader';
import Account from '../components/account/Account';
import EditUserInfo from '../components/edit-user-info/EditUserInfo';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function User() {
  const [hideForm, setHideForm] = useState(false);
  const firstName = useSelector((state) => state.user.firstName.firstname);
  const lastName = useSelector((state) => state.user.lastName.lastname);

  return (
    <>
      <NavigationHeader name="Tony" />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {firstName} {lastName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => setHideForm(!hideForm)}
          >
            Edit Name
          </button>
          <EditUserInfo
            form_title="Edit info"
            save_button="save"
            cancel_button="cancel"
            display={hideForm}
          />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />
      </main>
    </>
  );
}

export default User;
