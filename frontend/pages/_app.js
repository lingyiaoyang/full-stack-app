//----------import style---------------------//
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
//---------import all component--------------//
import Carousell from '../components/carousell';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
//---------import redux flow-----------------//
import { wrapper } from '../flow/store';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ border: '1px solid red', width: '' }}>
      <Navbar />
      {/* <Carousell /> */}
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
