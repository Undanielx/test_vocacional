import React, { useState } from 'react';

const Test = () => {
  const preguntas = [
    { id: 1, texto: '1- Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet.', respuestaCorrecta: 'A' },
    { id: 2, texto: '2- Criar, cuidar y tratar animales domesticos y de campo.', respuestaCorrecta: 'A' },
    { id: 3, texto: '3- Investigar sobre áreas verdes, medio ambiente y cambios climáticos.', respuestaCorrecta: 'A' },
    { id: 4, texto: '4- Ilustrar, dibujar y animar digitalmente.', respuestaCorrecta: 'A' },
    { id: 5, texto: '5- Seleccionar, capacitar y motivar al personal de una organización/empresa.', respuestaCorrecta: 'A' },
    { id: 6, texto: '6- Realizar excavaciones para descubrir restos del pasado.', respuestaCorrecta: 'A' },
    { id: 7, texto: '7- Resolver problemas de cálculo para construir un puente.', respuestaCorrecta: 'A' },
    { id: 8, texto: '8- Diseñar cursos para enseñar a la gente sobre temas de salud e higiene.', respuestaCorrecta: 'A' },
    { id: 9, texto: '9- Tocar un instrumento y componer música.',espuestaCorrecta: 'A' },
    { id: 10, texto: '10- Planificar cuáles son las metas de una organización pública o privada a mediano y largo plazo.', respuestaCorrecta: 'A' },
    { id: 11, texto: '11- Diseñar y planificar la producción masiva de artículos como muebles, autos, equipos de oficina, empaques y envases para alimentos y otros.', respuestaCorrecta: 'A' },
    { id: 12, texto: '12- Diseñar logotipos y portadas de una revista.', respuestaCorrecta: 'A' },
    { id: 13, texto: '13- Organizar eventos y atender a sus asistentes.', respuestaCorrecta: 'A' },
    { id: 14, texto: '14- Atender la salud de personas enfermas.', respuestaCorrecta: 'A' },
    { id: 15, texto: '15- Controlar ingresos y egresos de fondos y presentar el balance final de una institución.', respuestaCorrecta: 'A' },
    { id: 16, texto: '16- Hacer experimentos con plantas (frutas, árboles, flores).', respuestaCorrecta: 'A' },
    { id: 17, texto: '17- Concebir planos para viviendas, edificios y ciudadelas.', respuestaCorrecta: 'A' },
    { id: 18, texto: '18- Investigar y probar nuevos productos farmacéuticos.', respuestaCorrecta: 'A' },
    { id: 19, texto: '19- Hacer propuestas y formular estrategias para aprovechar las relaciones económicas entre dos países.', respuestaCorrecta: 'A' },
    { id: 20, texto: '20- Pintar, hacer esculturas, ilustrar libros de arte, etcétera.', respuestaCorrecta: 'A' },
    { id: 21, texto: '21- Elaborar campañas para introducir un nuevo producto al mercado.', respuestaCorrecta: 'A' },
    { id: 22, texto: '22- Examinar y tratar los problemas visuales.', respuestaCorrecta: 'A' },
    { id: 23, texto: '23- Defender a clientes individuales o empresas en juicios de diferente naturaleza.', respuestaCorrecta: 'A' },
    { id: 24, texto: '24- Diseñar máquinas que puedan simular actividades humanas.', respuestaCorrecta: 'A' },
    { id: 25, texto: '25- Investigar las causas y efectos de los trastornos emocionales.', respuestaCorrecta: 'A' },
    { id: 26, texto: '26- Supervisar las ventas de un centro comercial.', respuestaCorrecta: 'A' },
    { id: 27, texto: '27- Atender y realizar ejercicios a personas que tienen limitaciones físicas,  problemas de lenguaje, etcétera.).', respuestaCorrecta: 'A' },
    { id: 28, texto: '28- Prepararse para ser modelo profesional.', respuestaCorrecta: 'A' },
    { id: 29, texto: '29- Aconsejar a las personas sobre planes de ahorro e inversiones..', respuestaCorrecta: 'A' },
    { id: 30, texto: '30- Elaborar mapas, planos e imágenes para el estudio y análisis de datos geográficos.', respuestaCorrecta: 'A' },
    { id: 31, texto: '31- Diseñar juegos interactivos electrónicos para computadora.', respuestaCorrecta: 'A' },
    { id: 32, texto: '32- Realizar el control de calidad de los alimentos.', respuestaCorrecta: 'A' },
    { id: 33, texto: '33- Tener un negocio propio de tipo comercial.', respuestaCorrecta: 'A' },
    { id: 34, texto: '34- Escribir artículos periodísticos, cuentos, novelas y otros.', respuestaCorrecta: 'A' },
    { id: 35, texto: '35- Redactar guiones y libretos para un programa de televisión.', respuestaCorrecta: 'A' },
    { id: 36, texto: '36- Organizar un plan de distribución y venta de un gran almacén.', respuestaCorrecta: 'A' },
    { id: 37, texto: '37-Estudiar la diversidad cultural en el ámbito rural y urbano.', respuestaCorrecta: 'A' },
    { id: 38, texto: '38-Gestionar y evaluar convenios internacionales de cooperación para el desarrollo social..', respuestaCorrecta: 'A' },
    { id: 39, texto: '39-Crear campañas publicitarias.', respuestaCorrecta: 'A' },
    { id: 40, texto: '40-Trabajar investigando la reproducción de peces, camarones y otros animales marinos.', respuestaCorrecta: 'A' },
    { id: 41, texto: '41-Dedicarse a fabricar productos alimenticios de consumo masivo.', respuestaCorrecta: 'A' },
    { id: 42, texto: '42-Gestionar y evaluar proyectos de desarrollo en una institución educativa y/o fundación.', respuestaCorrecta: 'A' },
    { id: 43, texto: '43-Rediseñar y decorar espacios físicos en viviendas, oficinas y locales comerciales.', respuestaCorrecta: 'A' },
    { id: 44, texto: '44-Administrar una empresa de turismo y/o agencias de viaje.', respuestaCorrecta: 'A' },
    { id: 45, texto: '45-Aplicar métodos alternativos a la medicina tradicional para atender personas con dolencias de diversa índole.', respuestaCorrecta: 'A' },
    { id: 46, texto: '46-Diseñar ropa para niños, jóvenes y adultos.', respuestaCorrecta: 'A' },
    { id: 47, texto: '47-Investigar organismos vivos para elaborar vacunas.', respuestaCorrecta: 'A' },
    { id: 48, texto: '48-Manejar y/o dar mantenimiento a dispositivos/aparatos tecnológicos en aviones, barcos, radares, etcétera.', respuestaCorrecta: 'A' },
    { id: 49, texto: '49-Estudiar idiomas extranjeros-actuales y antiguos-para hacer traducción.', respuestaCorrecta: 'A' },
    { id: 50, texto: '50-Restaurar piezas y obras de arte.', respuestaCorrecta: 'A' },
    { id: 51, texto: '51-Revisar y dar mantenimiento a artefactos eléctricos, electrónicos y computadoras.', respuestaCorrecta: 'A' },
    { id: 52, texto: '52-Enseñar a niños de 0 a 5 años.', respuestaCorrecta: 'A' },
    { id: 53, texto: '53-Investigar y/o sondear nuevos mercados.', respuestaCorrecta: 'A' },
    { id: 54, texto: '54-Atender la salud dental de las personas.', respuestaCorrecta: 'A' },
    { id: 55, texto: '55-Tratar a niños, jóvenes y adultos con problemas psicológicos.', respuestaCorrecta: 'A' },
    { id: 56, texto: '56-Crear estrategias de promoción y venta de nuevos productos ecuatorianos en el mercado internacional.', respuestaCorrecta: 'A' },
    { id: 57, texto: '57-Planificar y recomendar dietas para personas diabéticas y/o con sobrepeso.', respuestaCorrecta: 'A' },
    { id: 58, texto: '58-Trabajar en una empresa petrolera en un cargo técnico como control de la producción.', respuestaCorrecta: 'A' },
    { id: 59, texto: '59-Administrar una empresa (familiar, privada o pública).', respuestaCorrecta: 'A' },
    { id: 60, texto: '60-Tener un taller de reparación y mantenimiento de carros, tractores, etcétera.', respuestaCorrecta: 'A' },
    { id: 61, texto: '61-Ejecutar proyectos de extracción minera y metalúrgica.', respuestaCorrecta: 'A' },
    { id: 62, texto: '62-Asistir a directivos de multinacionales con manejo de varios idiomas.', respuestaCorrecta: 'A' },
    { id: 63, texto: '63-Diseñar programas educativos para niños con discapacidad.', respuestaCorrecta: 'A' },
    { id: 64, texto: '64-Aplicar conocimientos de estadística en investigaciones en diversas áreas (social, administrativa, salud, etcétera.', respuestaCorrecta: 'A' },
    { id: 65, texto: '65-Fotografiar hechos históricos, lugares significativos, rostros, paisajes para el área publicitaria, artística, periodística y social', respuestaCorrecta: 'A' },
    { id: 66, texto: '66-Trabajar en museos y bibliotecas nacionales e internacionales.', respuestaCorrecta: 'A' },
    { id: 67, texto: '67-Ser parte de un grupo de teatro.', respuestaCorrecta: 'A' },
    { id: 68, texto: '68-Producir cortometrajes, spots publicitarios, programas educativos, de ficción, etcétera.', respuestaCorrecta: 'A' },
    { id: 69, texto: '69-Estudiar la influencia entre las corrientes marinas y el clima y sus consecuencias ecológicas.', respuestaCorrecta: 'A' },
    { id: 70, texto: '70-Conocer las distintas religiones, su filosofía y transmitirlas a la comunidad en general.', respuestaCorrecta: 'A' },
    { id: 71, texto: '71-Asesorar a inversionistas en la compra de bienes/acciones en mercadosnacionales e internacionales.', respuestaCorrecta: 'A' },
    { id: 72, texto: '72-Estudiar grupos étnicos, sus costumbres , tradiciones, cultura y compartir susvivencias.', respuestaCorrecta: 'A' },
    { id: 73, texto: '73-Explorar el espacio sideral, los planetas , características y componentes.', respuestaCorrecta: 'A' },
    { id: 74, texto: '74-Mejorar la imagen facial y corporal de las personas aplicando diferentes tecnicas.', respuestaCorrecta: 'A' },
    { id: 75, texto: '75-Decorar jardines de casas y parques publicos.', respuestaCorrecta: 'A' },
    { id: 76, texto: '76-Administrar y renovar menues de comidas en un hotel o restaurante.', respuestaCorrecta: 'A' },
    { id: 77, texto: '77-Trabajar como presentador de television, locutor de radio y animador de programas culturales y concursos.', respuestaCorrecta: 'A' },
    { id: 78, texto: '78-Diseñar y ejecutar programas de turismo.', respuestaCorrecta: 'A' },
    { id: 79, texto: '79-Aministrar y ordenar (planificar) adecuadamente la ocupacion del espacio fisico de ciudades, paises etc., utilizando imagenes de satelite, mapas.', respuestaCorrecta: 'A' },
    { id: 80, texto: '80-Organizar, planificar y administrar centros educativos.', respuestaCorrecta: 'A' },
    // Agrega más preguntas según sea necesario
  ];

  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [aciertos, setAciertos] = useState(0);

  const manejarRespuesta = (preguntaId, respuesta) => {
    setRespuestasUsuario({ ...respuestasUsuario, [preguntaId]: respuesta });
  };

  const calcularAciertos = () => {
    let contadorAciertos = 0;

    preguntas.forEach((pregunta) => {
      const respuestaUsuario = respuestasUsuario[pregunta.id];
      if (respuestaUsuario === pregunta.respuestaCorrecta) {
        contadorAciertos++;
      }
    });

    setAciertos(contadorAciertos);
  };

  return (
    <div >
      <h1 className=' text-center'>TEST VOCACIONAL </h1>         
       {preguntas.map((pregunta) => (
        <div key={pregunta.id}>
          <p className='mb-3'>{pregunta.texto}</p>
          <label>
            <input
              type="radio"
              name={`pregunta${pregunta.id}`}
              value="1"
              onChange={() => manejarRespuesta(pregunta.id, 'A')}
            />
           Me interesa
          </label>
          <label>
            <input
              type="radio"
              name={`pregunta${pregunta.id}`}
              value="0"
              onChange={() => manejarRespuesta(pregunta.id, 'B')}
            />
            No me interesa
          </label>
          {/* Agrega más opciones según sea necesario */}
        </div>
      ))}


      <button className='btn btn-secondary mt-4 form-control' onClick={calcularAciertos}>Finalizar</button>
      <p className='  text-center mb-3'>Total: {aciertos}</p>
    </div>
  );
};

export default Test
