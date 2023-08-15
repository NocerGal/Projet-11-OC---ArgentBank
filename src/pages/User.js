import NavigationHeader from '../components/header/NavigationHeader';
import Account from '../components/account/Account';

function User() {
  return (
    <>
      <NavigationHeader name="Tony" />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br /> {'Tony Jarvis'}!
          </h1>
          <button className="edit-button">Edit Name</button>
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
