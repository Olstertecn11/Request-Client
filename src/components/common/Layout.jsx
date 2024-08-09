import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ page, type }) => {
  return (
    <>
      <Navbar isAdmin={type == 'admin'} />
      {page}
      <Footer />
    </>
  )
}

export default Layout;
