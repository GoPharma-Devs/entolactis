import logo from './logo.svg';
import './App.scss';
import Submarino from './img/SUBMARINO_ENTOLACTIS.png';
import Shield from './img/shield.png';
import WaveNegative from './img/wavesNegative.svg';
import WavePositive from './img/wavesPositive.svg';
import ListCheck from './img/list_check.svg';
import Uno from './img/protege-el.png';
import Dos from './img/cora.png';
import Tres from './img/lactos.png';
import Cuatro from './img/tipos.png';
import Lactobacilos from './img/lactobacilos.png';
import Blog from './img/blog1.svg';
import Blog2 from './img/blog2.svg';
import Flotante from './img/flotante.svg';
import Armstrong from './img/armstrong.svg';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <div className='contenedor-header'>
          <div className='col-header'>
            <img src={Submarino} alt='sub' />
          </div>
          <div className='col-header'>
            <img src={Shield} alt='shield' />
            <h1>
              {' '}
              <span class='underline underline--blue'>
                Protege tu salud intestinal{' '}
              </span>
            </h1>
            <p>
              Lactobacillus pueden ayudar al cuerpo a descomponer los alimentos,
              absorber nutrientes y combatir los organismos “malos” que pueden
              causar enfermedades.
            </p>
          </div>
        </div>
        <img src={WaveNegative} alt='separator-negative' className='wave-n' />
      </header>
      <section className='salud-intestinal'>
        <div className='contenedor-salud'>
          <h2>
            {' '}
            <span class='underline underline--blue'>Salud Intestinal </span>
          </h2>
          <div className='salud-intestinal-grid'>
            <div className='salud-intestinal-el'>
              <img src={ListCheck} alt='icon' />
              <p>¿Qué se necesita para un 
correcto funcionamiento intestinal?</p>
            </div>
            <div className='salud-intestinal-el'>
              <img src={ListCheck} alt='icon' />
              <p>¿Qué es la microbiota intestinal?</p>
            </div>
            <div className='salud-intestinal-el'>
              <img src={ListCheck} alt='icon' />
              <p>¿Qué papel desempeña en nuestra salud la microbiota intestinal?</p>
            </div>
            <div className='salud-intestinal-el'>
              <img src={ListCheck} alt='icon' />
              <p>¿Sabes cuáles son los beneficios de tener una microbiota sana?</p>
            </div>
            <div className='salud-intestinal-el'>
              <img src={ListCheck} alt='icon' />
              <p>¿Qué sucede si esta microbiota intestinal se altera?</p>
            </div>
          </div>
        </div>
      </section>
      <section className='protege-lo-bueno'>
        <div className='contenedor'>
          <div className='protege-col-img'>
            <h3>
              {' '}
              <span class='underline underline--blue'>
                Protege lo bueno en ti...{' '}
              </span>
            </h3>
            <p>
              Lactobacillus pueden ayudar al cuerpo a descomponer los alimentos,
              absorber nutrientes y combatir los organismos “malos” que pueden
              causar enfermedades.
            </p>
            <button className='btn-primario'> CONOCE MÁS</button>
          </div>
          <div className='protege-col'>
            <div className='protege-grid'>
              <div className='protege-grid-el'>
                <img src={Uno} alt='img' />
                <p>¿Qué son los probióticos?</p>
              </div>
              <div className='protege-grid-el'>
                <img src={Dos} alt='img' />
                <p>¿Para qué sirven? Usos y beneficios.</p>
              </div>
              <div className='protege-grid-el'>
                <img src={Tres} alt='img' />
                <p>¿Qué son los lactobacilos?</p>
              </div>
              <div className='protege-grid-el'>
                <img src={Cuatro} alt='img' />
                <p>¿Qué tipo de lactobacilos existen?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='lactobacillus'>
        <div className='contenedor-lacto'>
          <div className='col'>
            <h4>
              {' '}
              <span class='underline underline--blue'>
                LACTOBACILLUS CASEI DG®
              </span>
            </h4>

            <p>
              ¿Sabes cuáles son las propiedades de lactobacillus casei DG®
              (Lactobacillus paracasei CNCMI -1572)?​
            </p>
            <button className='btn-primario'> Conocer más</button>
          </div>

          <div className='col'>
            <img src={Lactobacilos} alt='' />
          </div>
        </div>
        <img
          src={WavePositive}
          alt='separator-positive-lacto'
          className='wave-p'
        />

        <img
          src={WaveNegative}
          alt='separator-negative-lacto'
          className='wave-n'
        />
      </section>
      <section className='blog-section'>
        <h4>
          {' '}
          <span class='underline underline--blue'>
            DATOS CURIOSOS DE
            <br /> LA MICROBIOTA INTESTINAL
          </span>
        </h4>
        <img src={Flotante} alt='flotante' className='flotante' />
        <div className='contenedor-blog'>
          <div className='col-blog'>
            <img src={Blog} alt='img-blog' />
            <h5> Trasplante fecal</h5>
            <p>Gregorio Valencia Parera​</p>
          </div>
          <div className='col-blog'>
            <img src={Blog2} alt='img-blog' />
            <h5>
              Cómo las bacterias de nuestras tripas controlan nuestro cerebro
            </h5>
            <p>Sonia Villapol​</p>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='contenedor'>
          <div className='col-footer'>
            <img src={logo} alt='logo' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ex
              voluptates. Dignissimos!
            </p>
            <small>Autorización:xxxxxxxx</small>
          </div>
          <div className='col-footer'>
            {' '}
            <p>Mapa del sitio</p>
            <ul>
              <li>Protege lo bueno en ti</li>
              <li>Blog</li>
              <li>Farmacovigilancia</li>
              <li>Términos y Condiciones</li>
              <li>Política de privacidad</li>
            </ul>
          </div>
          <div className='col-footer'>
            <img src={Armstrong} alt='armstrong' className='logo-armstrong' />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
