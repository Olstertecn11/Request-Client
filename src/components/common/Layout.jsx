import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({ page, type, isAdmin = false }) => {

  if (isAdmin) {
    return (
      <>
        <Navbar isAdmin={type == 'admin'} />
        {page}
        <Footer />
      </>
    )
  }
  return (
    <>
      <Navbar isAdmin={type == 'admin'} />
      {page}
      <Footer />
    </>
  )
}

export default Layout;
