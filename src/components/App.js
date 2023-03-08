import { BrowserRouter } from 'react-router-dom';
import CustomProvider from './CustomProvider';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header titulo="One Appstore"/>
        <Main/>
        <Footer/>
      </BrowserRouter>
      <ToastContainer/>
    </CustomProvider>
  )
    
}

export default App;