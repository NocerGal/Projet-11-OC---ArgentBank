import NavigationHeader from '../components/header/NavigationHeader';
import Account from '../components/account/Account';
import EditUserInfo from '../components/edit-user-info/EditUserInfo';
import { useState } from 'react';

function User() {
  const [hideForm, setHideForm] = useState(false);

  return (
    <>
      <NavigationHeader name="Tony" />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {'Tony Jarvis'}!
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
