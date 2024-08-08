import img1 from '../assets/images/nosotros_img1.jpg'
import img2 from '../assets/images/nosotros_img2.jpg'
import img3 from '../assets/images/nosotros_img3.jpg'
import '../assets/styles/Nosotros.css';



const Nosotros = () => {
  return (
    <div>
      <div className="row nosotros-section1">
        <div className="overlay"></div>
        <img src={img1} alt="" className='nosotros-img' />
        <div className="section1">
          <h2 className='text-white text-center font-weight-bold'>¿Quienes Nosotros?</h2>
          <p className='text-white text-center'>
            Los Adventistas del Séptimo Día somos una comunidad cristiana que se distingue por nuestra fe en la inminente segunda venida de Jesucristo. Surgimos en el siglo XIX en los Estados Unidos, movidos por el estudio profundo de las Escrituras y las profecías bíblicas, que nos llevaron a formar oficialmente nuestra iglesia en 1863.
          </p>
        </div>
      </div>
      <div className="nosotros-section2">
        <div className="row">
          <div className="col-md-6">
            <div className="card nosotros-card">
              <h5 className='text-center font-weight-bold'>Misión</h5>
              <p className='text-justify mt-4'>
                En nuestra dedicación a la Gran Comisión, nos comprometemos a hacer discípulos en todas las naciones, proclamando el evangelio eterno en el contexto del mensaje de los tres ángeles, tal como se revela en Apocalipsis 14:6-12. Nuestra misión es invitar a todas las personas a aceptar a Jesucristo como su Salvador personal, integrarse a la iglesia remanente y vivir según sus enseñanzas.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={img2} className='nosotros-card-img' alt="" />
          </div>
        </div>
      </div>
      <hr className='row-divider' />
      <div className="nosotros-section3">
        <div className="row">
          <div className="col-md-6">
            <img src={img3} className='nosotros-card-img' alt="" />
          </div>
          <div className="col-md-6">
            <div className="card nosotros-card">
              <h5 className='text-center font-weight-bold'>Equipo pastoral</h5>
              <p className='text-justify mt-4'>
                El equipo pastoral de nuestra iglesia tiene como misión guiar, apoyar y capacitar a la congregación en su caminar espiritual, con un enfoque integral en el desarrollo personal y comunitario.
 Trabajamos juntos para cumplir la Gran Comisión de hacer discípulos en todas las naciones, comunicando el evangelio eterno con claridad y pasión, y preparando a la iglesia para el pronto regreso de Cristo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Nosotros;
