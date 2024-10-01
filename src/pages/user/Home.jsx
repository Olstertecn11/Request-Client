
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Home.css'
import img_s1 from '../../assets/images/slider_1.jpg'
import img_s2 from '../../assets/images/slider_2.jpg'
import img_s3 from '../../assets/images/slider_3.jpg'

const Home = () => {
  return (
    <div className="home">
      <div className="row m-0 p-0 section">
        <Carousel interval={3000} fade indicators={false} controls={false} className="slider">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img_s1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img_s2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img_s3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="home-s1">
          <h4>Iglesia Adventista Central</h4>
          <p> La Iglesia Adventista del Séptimo Día se dedica a guiar a los jóvenes hacia un camino de vida correcto mediante el desarrollo espiritual y moral. Ofrecemos programas educativos, actividades recreativas y oportunidades de voluntariado, fomentando una relación profunda con Dios y el crecimiento personal. Nuestro compromiso es ser un apoyo constante en sus vidas.</p>
          <button className="btn btn-primary">Conocer Más</button>
        </div>
      </div>
      <div className="container section-below mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="row info-cards-row">
              <div className="col-md-4">
                <div className="card">
                  <h3> <i className="fas fa-map-marker-alt"></i> Localizacion</h3>
                  <p>
                    Nuestra iglesia se encuentra en la zona 1, específicamente en la 17 Avenida "A" 7-52. Esta ubicación está en el centro histórico de la ciudad, cerca de varios puntos de interés cultural y comercial. Si necesitas más información o detalles adicionales, te recomendaría contactar directamente a la iglesia.
                  </p>
                  <button className="btn btn-prim">Ir</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i className="fas fa-calendar-alt"></i> Horarios</h3>
                  <p>
                    Generalmente, las reuniones y servicios se llevan a cabo los sábados, comenzando con la Escuela Sabática a las 9:00 a.m., seguida del culto divino a las 11:00 a.m. Sin embargo, es recomendable contactar directamente a la iglesia para confirmar horarios específicos.
                  </p>
                  <button className="btn btn-prim">Ver</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i className="fas fa-users"></i> Actividades</h3>
                  <p>
                    La iglesia ofrece diversas actividades para su comunidad. Estas incluyen servicios religiosos, grupos de estudio bíblico, programas para jóvenes, y actividades de servicio comunitario. Además, se celebran eventos especiales como semanas de oración y seminarios sobre salud y familia.
                  </p>
                  <button className="btn btn-prim">Ver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-4 versiculo-container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="versiculo-header">
              <p >
                VERSICULO DEL DÍA
              </p>
            </div>
          </div>
        </div>
        <div className="row versiculo">
          <div className="col-md-8 mx-auto">
            <p className="text-center">
              "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia."
              <br />
              <b>Isaías 41:10</b>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container mb-4 mt-4">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="versiculo-header">
              <p >
                ANUNCIOS IMPORTANTES
              </p>
            </div>
          </div>
        </div>
        <div className="row anuncios-home-row">
          <div className="col-md-3 card card-body p-0">
            <img src="https://files.adventistas.org/noticias/es/2022/07/01095800/AME_100112468_20220611_TOR7983-lpr-960x540.jpg" alt="" />
            <p className="text-center mt-3">Reflexiones Nuevas Cada Día</p>
          </div>
          <div className="col-md-3 card card-body p-0">
            <img src="https://img.freepik.com/fotos-premium/camarografo-profesional-cubriendo-evento-video_48710-132.jpg" alt="" />
            <p className="text-center mt-3">
              Transmiciones En Vivo Todos Los <b>Sábados 9 AM - 1 PM</b>
            </p>
          </div>
          <div className="col-md-3 card card-body p-6">
            <img src="https://st2.depositphotos.com/1105977/10217/i/450/depositphotos_102172374-stock-photo-drone-silhouette-flying-in-sunset.jpg" alt="" />
            <p className="text-center mt-3">
              Día de Reposo Fuera del Templo y En La Naturaleza <b>20 Julio</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

