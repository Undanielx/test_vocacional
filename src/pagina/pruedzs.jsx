import React from 'react';



class Vocacional extends React.Component {
    constructor() {
        super();
        this.state = {
            respuestas: [ ], // Guarda las respuestas seleccionadas
        };
    }
      
    handleOptionChange = (questionIndex, value) => {
        // Actualiza el estado con la nueva respuesta
        const respuestas = [...this.state.respuestas];
        respuestas[questionIndex] = value;
        this.setState({ respuestas });
    };

    handleFinalizar = () => {
        // Calcula la cantidad de respuestas correctas
        const cantidadCorrectas = this.state.respuestas.filter(respuesta => respuesta === 1).length;
        alert(`Cantidad acertadas: ${cantidadCorrectas}`);
        
    };

    render() {
        return (
            <div className="container">
                {/* Secciones de preguntas */}
                {/* Aquí puedes repetir el siguiente bloque para cada sección de pregunta */}
                <section id="p0">
                    <h3>1- Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p0"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p0"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p1">
                    <h3>2- Criar, cuidar y tratar animales domesticos y de campo.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p1"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p1"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p2" className=''>
                    <h3>3- Investigar sobre áreas verdes, medio ambiente y cambios climáticos.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p2"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p2"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p3" className=''>
                    <h3>4- Ilustrar, dibujar y animar digitalmente.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p3"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p3"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p4" className=''>
                    <h3>5- Seleccionar, capacitar y motivar al personal de una organización/empresa.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p4"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p4"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p5" className=''>
                    <h3>6- Realizar excavaciones para descubrir restos del pasado.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p5"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p5"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p6" className=''>
                    <h3>7- Resolver problemas de cálculo para construir un puente.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p6"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p6"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p7" className=''>
                    <h3>8- Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p7"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p7"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p8" className=''>
                    <h3>9- Tocar un instrumento y componer música.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p8"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p8"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p9" className=''>
                    <h3>10- Planificar cuáles son las metas de una organización pública o privada a mediano y largo plazo.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p9"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p9"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p10" className=''>
                    <h3>11- Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p10"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p10"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p11" className=''>
                    <h3>12- Diseñar logotipos y portadas de una revista.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p11"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p11"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p12" className=''>
                    <h3>13- Organizar eventos y atender a sus asistentes.</h3>
                    <label>
                        <input
                            type="radio"
                            value="1"
                            name="p12"
                            onChange={() => this.handleOptionChange(0, 1)}
                        />
                        Me interesa
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            name="p12"
                            onChange={() => this.handleOptionChange(0, 2)}
                        />
                        No me interesa
                    </label>
                </section>

                <section id="p13">
            <h3>14- Atender la salud de personas enfermas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p13"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p13"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>
          <section id="p14">
            <h3>15- Controlar ingresos y egresos de fondos y presentar el balance final de 
                una institución.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p14"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p14"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p15">
            <h3>16- Hacer experimentos con plantas (frutas, árboles, flores).</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p15"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p15"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p16">
            <h3>17- Concebir planos para viviendas, edificios y ciudadelas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p16"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p16"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p17">
            <h3>18- Investigar y probar nuevos productos farmacéuticos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p17"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p17"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="18">
            <h3>19- Hacer propuestas y formular estrategias para aprovechar las relaciones 
                económicas entre dos países.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p18"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p18"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>


          <section id="p19">
            <h3>20- Pintar, hacer esculturas, ilustrar libros de arte, etcétera.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p19"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p19"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p20">
            <h3>21- Elaborar campañas para introducir un nuevo producto al mercado.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p20"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p20"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p21">
            <h3>22- Examinar y tratar los problemas visuales.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p21"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p21"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="p22">
            <h3>23- Defender a clientes individuales o empresas en juicios de diferente 
                naturaleza.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p22"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p22"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="23">
            <h3>24- Diseñar máquinas que puedan simular actividades humanas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p23"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p23"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="24">
            <h3>25- Investigar las causas y efectos de los trastornos emocionales.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p24"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p24"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="25">
            <h3>26- Supervisar las ventas de un centro comercial.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p25"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p25"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="26">
            <h3>27- Atender y realizar ejercicios a personas que tienen limitaciones físicas, 
                problemas de lenguaje, etcétera.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p26"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p26"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="27">
            <h3>28- Prepararse para ser modelo profesional.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p27"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p27"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="28">
            <h3>29- Aconsejar a las personas sobre planes de ahorro e inversiones.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p28"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p28"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="29">
            <h3>30- Elaborar mapas, planos e imágenes para el estudio y análisis de datos 
                geográficos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p29"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p29"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="30">
            <h3>31- Diseñar juegos interactivos electrónicos para computadora.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p30"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p30"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="31">
            <h3>32- Realizar el control de calidad de los alimentos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p31"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p31"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="32">
            <h3>33- Tener un negocio propio de tipo comercial.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p32"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p32"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="33">
            <h3>34- Escribir artículos periodísticos, cuentos, novelas y otros.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p33"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p33"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="34">
            <h3>35- Redactar guiones y libretos para un programa de televisión.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p34"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p34"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="35">
            <h3>36- Organizar un plan de distribución y venta de un gran almacén.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p35"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p35"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="36">
            <h3>37-Estudiar la diversidad cultural en el ámbito rural y urbano.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p36"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p36"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="37">
            <h3>38-Gestionar y evaluar convenios internacionales de cooperación para el 
                desarrollo social.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p37"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p37"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="38">
            <h3>39-Crear campañas publicitarias.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p38"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p38"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="39">
            <h3>40-Trabajar investigando la reproducción de peces, camarones y otros 
                animales marinos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p39"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p39"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="40">
            <h3>41-Dedicarse a fabricar productos alimenticios de consumo masivo.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p40"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p40"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="41">
            <h3>42-Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o
                fundación.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p41"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p41"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="42">
            <h3>43-Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p42"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p42"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="43">
            <h3>44-Administrar una empresa de turismo y/o agencias de viaje.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p43"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p43"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="44">
            <h3>45-Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diversa índole.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p44"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p44"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="45">
            <h3>46-Diseñar ropa para niños, jóvenes y adultos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p45"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p45"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="46">
            <h3>47-Investigar organismos vivos para elaborar vacunas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p46"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p46"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="47">
            <h3>48-Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p47"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p47"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="48">
            <h3>49-Estudiar idiomas extranjeros-actuales y antiguos-para hacer traducción.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p48"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p48"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="49">
            <h3>50-Restaurar piezas y obras de arte.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p49"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p49"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="50">
            <h3>51-Revisar y dar mantenimiento a artefactos eléctricos, electrónicos ycomputadoras.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p50"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p50"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="51">
            <h3>52-Enseñar a niños de 0 a 5 años.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p51"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p51"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="52">
            <h3>53-Investigar y/o sondear nuevos mercados.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p52"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p52"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="53">
            <h3>54-Atender la salud dental de las personas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p53"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p53"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="54">
            <h3>55-Tratar a niños, jóvenes y adultos con problemas psicológicos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p54"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p54"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="55">
            <h3>56-Crear estrategias de promoción y venta de nuevos productos ecuatorianos
                en el mercado internacional.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p55"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p55"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="56">
            <h3>57-Planificar y recomendar dietas para personas diabéticas y/o con sobrepeso.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p56"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p56"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="57">
            <h3>58-Trabajar en una empresa petrolera en un cargo técnico como control de la
                producción.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p57"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p57"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="58">
            <h3>59-Administrar una empresa (familiar, privada o pública).</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p58"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p58"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="59">
            <h3>60-Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p59"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p59"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="60">
            <h3>61-Ejecutar proyectos de extracción minera y metalúrgica.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p60"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p60"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="61">
            <h3>62-Asistir a directivos de multinacionales con manejo de varios idiomas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p61"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p61"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="62">
            <h3>63-Diseñar programas educativos para niños con discapacidad.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p62"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p62"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="63">
            <h3>64-Aplicar conocimientos de estadística en investigaciones en diversas áreas
                (social, administrativa, salud, etcétera.)</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p63"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p63"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="64">
            <h3>65-Fotografiar hechos históricos, lugares significativos, rostros, paisajes para
                el área publicitaria, artística, periodística y social.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p64"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p64"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="65">
            <h3>66-Trabajar en museos y bibliotecas nacionales e internacionales.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p65"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p65"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="66">
            <h3>67-Ser parte de un grupo de teatro.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p66"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p66"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="67">
            <h3>68-Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etcétera.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p67"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p67"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>
         
          <section id="68">
            <h3>69-Estudiar la influencia entre las corrientes marinas y el clima y
                sus consecuencias ecológicas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p68"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p68"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="69">
            <h3>70-Conocer las distintas religiones, su filosofía y transmitirlas a la comunidad en general.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p69"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p69"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="70">
            <h3>71-Asesorar a inversionistas en la compra de bienes/acciones en mercadosnacionales e internacionales.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p70"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p70"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="71">
            <h3>72-Estudiar grupos étnicos, sus costumbres , tradiciones, cultura y compartir susvivencias.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p71"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p71"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="72">
            <h3>73-Explorar el espacio sideral, los planetas , características y componentes.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p72"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p72"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="73">
            <h3>74-Mejorar la imagen facial y corporal de las personas aplicando diferentes tecnicas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p73"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p73"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="74">
            <h3>75-Decorar jardines de casas y parques publicos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p74"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p74"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="75">
            <h3>76-Administrar y renovar menues de comidas en un hotel o restaurante.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p75"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p75"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="76">
            <h3>77-Trabajar como presentador de television, locutor de radio y animador de programas culturales y concursos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p76"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p76"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="77">
            <h3>78-Diseñar y ejecutar programas de turismo.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p77"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p77"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="78">
            <h3>79-Aministrar y ordenar (planificar) adecuadamente la ocupacion del espacio fisico de ciudades, paises etc., utilizando imagenes de satelite, mapas.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p78"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p78"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>

          <section id="79">
            <h3>80-Organizar, planificar y administrar centros educativos.</h3>
            <label>
              <input
                type="radio"
                value="1"
                name="p79"
                onChange={() => this.handleOptionChange(0, 1)}
              />
              Me interesa
            </label>
            <label>
              <input
                type="radio"
                value="2"
                name="p79"
                onChange={() => this.handleOptionChange(0, 2)}
              />
              No me interesa
            </label>
          </section>
          <button className='btn btn-secondary mt-4 form-control' onClick={this.handleFinalizar}>FINALIZAR</button>
        <h2 className='text-center'>Cantidad acertadas: {this.state.respuestas.filter(respuesta => respuesta === 1).length}</h2>
            </div>
 
              );
            };
    }

export default Vocacional;


