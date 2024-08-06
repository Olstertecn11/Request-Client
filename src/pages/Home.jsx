
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="row m-0 p-0 section">
        <Carousel interval={3000} fade indicators={false} controls={false} className="slider">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/336363872_190237273742333_4753949141460737710_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=31UU0j_vC6IQ7kNvgF7DLOx&_nc_ht=scontent.fgua9-2.fna&cb_e2o_trans=q&oh=00_AYBRnalk6kO3CkjArokWnDNIQGytJQxa5hhRqm_4wJWoLg&oe=66B39281"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgua9-1.fna.fbcdn.net/v/t39.30808-6/439586250_850277737146480_5706252731641010012_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Lq5T8b7XP4UQ7kNvgErVwMl&_nc_ht=scontent.fgua9-1.fna&cb_e2o_trans=q&oh=00_AYCBZu-N_hkH52K9SUoC8vlQFLf_1-hf8wJ8lyosyiZqXg&oe=66B373C5"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://scontent.fgua9-2.fna.fbcdn.net/v/t39.30808-6/336528878_236268188760443_7407418687990844718_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0mCtz4VIH7AQ7kNvgEVbhes&_nc_ht=scontent.fgua9-2.fna&cb_e2o_trans=q&oh=00_AYDwjx8gfsajux4MuX4Bi-cBd4yWwRoqSbs1HKiomaTfQw&oe=66B379F3"
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
                  <h3> <i class="fas fa-map-marker-alt"></i> Localizacion</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis blanditiis. Veritatis qui deleniti, earum exercitationem voluptatem minus facilis, fugiat blanditiis harum nobis eius, repellendus quisquam necessitatibus distinctio nam modi?</p>
                  <button className="btn btn-prim">Ir</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i class="fas fa-calendar-alt"></i> Horarios</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, perspiciatis blanditiis. Veritatis qui deleniti, earum exercitationem voluptatem minus facilis, fugiat blanditiis harum nobis eius, repellendus quisquam necessitatibus distinctio nam modi?</p>
                  <button className="btn btn-prim">Ver</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <h3> <i class="fas fa-users"></i> Actividades</h3>
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

