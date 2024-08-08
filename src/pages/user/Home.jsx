
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis blanditiis. Veritatis qui deleniti, earum exercitationem voluptatem minus facilis, fugiat blanditiis harum nobis eius, repellendus quisquam necessitatibus distinctio nam modi?</p>
                  <button className="btn btn-prim">Ir</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i className="fas fa-calendar-alt"></i> Horarios</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis blanditiis. Veritatis qui deleniti, earum exercitationem voluptatem minus facilis, fugiat blanditiis harum nobis eius, repellendus quisquam necessitatibus distinctio nam modi?</p>
                  <button className="btn btn-prim">Ver</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i className="fas fa-users"></i> Actividades</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis blanditiis. Veritatis qui deleniti, earum exercitationem voluptatem minus facilis, fugiat blanditiis harum nobis eius, repellendus quisquam necessitatibus distinctio nam modi?</p>
                  <button className="btn btn-prim">Ver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

