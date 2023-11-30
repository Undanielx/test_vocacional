import React, { useState } from 'react';

import './App.css';
import Home from './componentes/Home';
import Login from './componentes/Login';

import appFirebase from '../credenciales';
import { getAuth, onAuthStateChanged} from 'firebase/auth';

const auth =getAuth(appFirebase)


function Appr() {
  const [usuario, setUsuario] =useState(null)

  onAuthStateChanged(auth,(usuarioFirebase) => {
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <div>
      {usuario ?<Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  );

}
export default Appr
