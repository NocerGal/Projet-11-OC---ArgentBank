import Navigation from '../components/header/Navigation';
import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import ICONE_CHAT from '../assets/img/icon-chat.png';
import ICONE_MONEY from '../assets/img/icon-money.png';
import ICONE_SECURITY from '../assets/img/icon-security.png';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Banner
          titles={['No fees.', 'No minimum deposit.', 'High interest rates.']}
          text="Open a savings account with Argent Bank today!"
        />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Card
            icon={ICONE_CHAT}
            icon_descritpion="icone chat"
            titre="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Card
            icon={ICONE_MONEY}
            icon_descritpion="icone moeny"
            titre="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
          />
          <Card
            icon={ICONE_SECURITY}
            icon_descritpion="icone security"
            titre="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
    </>
  );
}
export default Home;
