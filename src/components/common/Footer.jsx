import '../../assets/styles/Footer.css';
import logo from '../../assets/images/adventist_logo.webp';

const Footer = () => {
  return (
    <div>

      <div className="footer">
        <div className="row">
          <div className="col-md-6 mx-auto ">
            <div className="row">
              <img src={logo} className='footer-logo' alt="" />
              <p className='text-white text-center mt-2'>Iglesia Adventista del Septimo Día</p>
              <div className="row ml-0">
                <div className="col-md-4 mx-auto footer-icons-column">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-tiktok"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto ">
            <div className="form-group">
              <div className="row">
                <div className="col-md-12 mx-auto footer-form">
                  <input type="text" className="form-control" placeholder='juanhernandez@gmail.com' />
                  <button className='btn btn-primary'>Enviar <i className="fa-solid fa-paper-plane"></i> </button>
                </div>
              </div>
              <div className="row mt-4">
                <small className='text-secondary text-center'>Escribe tu correo y así podremos comunicarnos contigo...</small>
                <hr className='footer-separator' />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row last-row">
        <p className='text-secondary text-center mt-4'>&copy; 2024 Iglesia Adventista Central. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;

