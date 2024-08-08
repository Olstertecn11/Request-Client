import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ page }) => {
  return (
    <>
      <Navbar />
      {page}
      <Footer />
    </>
  )
}

export default Layout;
