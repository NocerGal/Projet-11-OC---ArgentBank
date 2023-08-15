function Account({ title, amount, description, button }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p class="account-amount-description">{description}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">{button}</button>
      </div>
    </section>
  );
}

export default Account;
