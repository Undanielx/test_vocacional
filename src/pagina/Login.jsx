import React, { useState } from 'react'

import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registro, setRegistro] = useState(false)

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const correo = e.target.email.value;
        const contraseña = e.target.contraseña.value;
        if (registro) {
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else {
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }

    
    return (
        <div >

            <div>

                {/* Esta seccion es de formulario  */}
                <div className='col-md-4 text-center'>
                    <div className='mt-5 ms-5'>
                        <h1 > {registro ? 'Registrate' : 'Inicia Sesión'} </h1>
                        <form onSubmit={handlerSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Direccion de Email: </label>
                                <input type='email' className='form-control' placeholder='Ingresa Email' id='email' required />
                            </div>

                            <div className='mb-3'>
                                <label className='form-label'>Contraseña: </label>
                                <input type='password' className='form-control' placeholder='Ingresa contraseña' id='contraseña' required />
                            </div>

                            <button className='btn btn-primary' type='submit'>
                                {registro ? 'Registrate' : 'Inicia Sesión'}
                            </button>
                        </form>
                        <div className='form-group'>
                            <button className='btn btn-secondary mt-4 form-control' onClick={() => setRegistro(!registro)}>
                                {registro ? 'Ya tienes cuenta? Inicia Sesión' : 'No tienes cuenta? Registrate'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login
