import './App.css';
import Header from './commonsorces/Header/Header';
import Main from './commonsorces/Main/Main';
import Tv from './commonsorces/Headerpages/Tv';
import Ipad from './commonsorces/Headerpages/Ipad'
import Iphone from './commonsorces/Headerpages/Iphone';
import Watch  from './commonsorces/Headerpages/Watch';
import Mac from './commonsorces/Headerpages/Mac'
import Error from './commonsorces/Headerpages/Error'
import Footer from './commonsorces/Footer/Footer';
import {Routes, Route} from 'react-router-dom'
import Footer1 from './commonsorces/Footer/Footer1';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/Mac' element={ <Mac />}/>
      <Route path='/Ipad' element={ <Ipad />}/>
      <Route path='/Iphone' element={<Iphone />}/>
      <Route path='/tv' element={<Tv/>}/>
      <Route path='/watch' element={<Watch/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes> 

   {/* <Footer/> */}
   <Footer1/>
    </div>
  );
}

export default App;
