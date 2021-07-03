//----------import style---------------------//
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
//---------import all component--------------//
import Carousell from '../components/carousell';
import Navbar from '../components/navbar';
//---------import redux flow-----------------//
import { wrapper } from '../flow/store';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Carousell />
      <Component {...pageProps} />;
    </div>
  );
}

export default wrapper.withRedux(MyApp);
