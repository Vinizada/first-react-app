import Navbar from 'components/Navbar';
import ButtonIcon from 'components/ButtonIcon';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';

function Home() {
  return (
    <>
  <Navbar />
  <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
            <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
            </div>
            <ButtonIcon /> 
        </div>
        <div className="home-image-container">
            <MainImage/>
        </div>
      </div>
  </div>
  </>);
}

export default Home;
