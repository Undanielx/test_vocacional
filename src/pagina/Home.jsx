import React from 'react'

import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFirebase)

const Home = (correoUsuario) => {
    return (
        <div className='container'>
            <p>Bienvenido,<strong>{correoUsuario}</strong>Haz iniciado sesión </p>

            <button className=' btn btn-primary' onClick={() => signOut(auth)}>
                Cerrar sesión
            </button>
            <hr />
                <div className='row'>
                    {/*esta seccion es de formularoo*/}
                    <div className=' col-md-4'>
                    <h3 className='text-center mb-3 '>Ingresa Usuarios</h3>
                    <form>
                        <div className='card card-body'>
                        <div className='form-group'>

                            <input type="text"  name='Nombre' className='form-control mb-3' placeholder='ingresar tu nombre del usuario' />

                            <input type="text" name='Apellido' className='form-control mb-3' placeholder='ingresar tu apellido' />

                            <input type="text"  name='Edad' className='form-control mb-3' placeholder='ingresar tu edad'/>

                            <input type="text" name='Escuela de procedencia' className='form-control mb-3' placeholder='ingresar la escuela de procedencia' />

                            
                        </div>
                        <button className=' btn btn-primaty'>
                            Guardar
                        </button>
                        
                        </div>
                    </form>
                    </div>
                    {/*esta seccion sera la lista de nuestros usuarios*/}
                    <div className=' col-md-8'>
                       <h2 className='text-center mb-5 '>Lista de usuarios</h2>
                    </div>

                </div>
        </div>
    )
}
export default Home