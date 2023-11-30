import { FaPhone, FaEnvelope, FaWeebly, FaSearchLocation } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <ul>
                        <h3>Contactanos</h3>
                        <h6> 
                        <FaSearchLocation style={{ marginRight: '5px', color: 'white' }}/>
                             Carr. a El Carmen,
                            Xalpatlahuaya,
                            Huamantla, Tlax. S/N</h6>
                        <h6> 
                        <FaPhone style={{ marginRight: '5px', color: 'white' }}/> Teléfono: (247) 472-5300</h6>
                        <h6> 
                        <FaEnvelope style={{ marginRight: '5px', color: 'white' }} /> Email: contacto@uttlaxcala.edu.mx</h6>
                        <h6> 
                        <FaWeebly/> web: www.uttlaxcala.edu.mx </h6>
                        
                    </ul>


                </div>

            </div>
        </div>
    )
}
export default Footer