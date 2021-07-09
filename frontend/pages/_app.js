//----------import style---------------------//
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
//---------import all component--------------//
import Carousell from '../components/carousell';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Nav from '../components/nav';
import Article from '../components/article';
import ScrollTop from '../components/scrollToTop';
import Detail from '../components/detail';
//---------import redux flow-----------------//
import { wrapper } from '../flow/store';
import { DefaultSeo } from 'next-seo';
import SEO from '../next.seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
      <Detail />
    </>
  );
}

export default wrapper.withRedux(MyApp);
