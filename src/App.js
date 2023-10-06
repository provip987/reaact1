// import logo from './logo.svg';
import './App.css';


import {Route,Routes} from 'react-router-dom';
import './bootstrap-5.2.3/css/bootstrap.min.css';
import Trangchu from './DOAN/Trangchu';

import GioHang from './DOAN/gio-hang/giohang';
import Xemchitiet from './DOAN/xemchitiet';
function App() {
  return (
   <>
   
    <Routes>      
    <Route path="/" element={<><Trangchu/></>}/>  
    <Route path ="/xemchitiet" element={<><Xemchitiet/></>}/>
      <Route path="/giohang" element={<><GioHang/></>}/>  
    </Routes>
   </>
  );
}

export default App;
