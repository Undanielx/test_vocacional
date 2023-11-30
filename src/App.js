import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./pagina/Header";
import Inicio from "./pagina/inicio";
import Footer from "./pagina/Footer";
import Login from './pagina/Login';
import Error404 from './pagina/Error404';
import Creditos from './pagina/Creditos';
import TestVocacional from './pagina/TestVocacional';
import Politica from './pagina/Politica';
import Home from './pagina/Home';
import Test from './pagina/Test';

function App() {
  return (
    <div className='text-light bg-dark vh-200'>
<BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/testvocacional' element={<TestVocacional/>}/>
        <Route path='/' element={<Error404/>}/>
        <Route path='/creditos' element={<Creditos/>}/>
        <Route path='/politica' element={<Politica/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home' element={<Test/>}/>
      </Routes>
      <Footer />
</BrowserRouter>

    </div>
  );
}

export default App;
