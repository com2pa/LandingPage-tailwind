import React from 'react';
import { motion } from 'framer-motion'; // Importa motion desde framer-motion
import TypeWriter from './TypeWriter';
import Sesion from '../../assets/sesion-4.png';

const Hero = () => {
  return (
    <>
      {/* Sesion 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mt-20 text-white flex items-center min-h-[80vh] sesion1_bgImage px-4'
      >
        <div className='max-w-lg p-4 sm:p-6 rounded-lg'>
          <TypeWriter />
        </div>
      </motion.div>

      {/* Sesion 2 */}
      <motion.div
        id='rutina'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='min-h-[60vh] sesion2_container my-6 lg:my-2'
      >
        <div className='w-full flex flex-col lg:flex-row lg:min-h-[60vh]'>
          <div className='w-full flex flex-col lg:flex-col lg:justify-between lg:py-4 lg:px-6'>
            <div className='text-red-600 text-center text-2xl md:text-4xl lg:text-6xl font-bold'>
              <h2>Nuestras rutinas de entrenamiento</h2>
            </div>
            <div className='text-white lg:text-center text-center text-sm lg:text-lg'>
              <p>
                Cada cuerpo es diferente, por lo que nos aseguramos de que
                elijas el mejor plan para ti.
              </p>
            </div>
          </div>
          <div className='w-full py-2 px-2 lg:py-4 lg:px-6 flex flex-col lg:flex-col lg:justify-around'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex flex-col lg:gap-4 text-white lg:m-5'
            >
              <p className='text-red-600 font-bold uppercase lg:text-2xl'>
                Lento y constante
              </p>
              <p className='text-justify text-sm'>
                Presenta aquí los productos o servicios que ofreces. Dales a tus
                clientes potenciales una visión general de por qué deberían
                usarlos. Distínguelos de los demás que se indican en esta
                página.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-col lg:gap-4 text-white lg:m-5'
            >
              <p className='text-red-600 font-bold uppercase lg:text-2xl'>
                Entrena como una campeona
              </p>
              <div className='flex flex-col lg:gap-2.5'>
                <p className='text-justify text-sm'>
                  Presenta aquí los productos o servicios que ofreces. Dales a
                  tus clientes potenciales una visión general de por qué
                  deberían usarlos. Distínguelo de los demás que se indican en
                  esta página. Comparte los productos o servicios aquí.
                </p>
                <p className='text-justify text-sm'>
                  Comparte los productos o servicios aquí.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className='flex flex-col lg:gap-4 text-white lg:m-5'
            >
              <p className='text-red-600 font-bold uppercase lg:text-2xl'>
                Mantener la ganancia
              </p>
              <div className='flex flex-col gap-2.5'>
                <p className='text-justify text-sm'>
                  Presenta aquí los productos o servicios que ofreces. Dales a
                  tus clientes potenciales una visión general de por qué
                  deberían usarlos. Distínguelo de los demás que se indican en
                  esta página.
                </p>
                <p className='text-justify text-sm'>
                  Dales a tus clientes potenciales una visión general de por qué
                  deberían usarlos. Distínguelo de los demás que se indican en
                  esta página.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Sesion 3 */}
      <motion.div
        id='desicion'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='bg-red-700 min-h-[60vh] flex items-center justify-center'
      >
        <div className='w-full max-w-2xl text-center flex flex-col items-center gap-6'>
          <h2 className='text-white text-2xl lg:text-6xl font-bold uppercase py-2'>
            Toma decisiones más saludables
          </h2>
          <p className='text-white text-sm lg:text-lg'>
            Escribe un párrafo que hable sobre tu negocio aquí. Convence a tus
            clientes potenciales para que te elijan para sus necesidades de
            fitness hablando de tus ofertas únicas de productos.
          </p>
          <div className='flex flex-col lg:flex-row justify-center gap-4'>
            <button className='bg-black text-white hover:bg-red-500 px-6 py-3 rounded'>
              Plan de entrenamiento
            </button>
            <button className='bg-black text-white hover:bg-red-500 px-6 py-3 rounded'>
              Pase de todo el año
            </button>
            <button className='bg-black text-white hover:bg-red-500 px-6 py-3 rounded'>
              Uno-a-uno
            </button>
          </div>
        </div>
      </motion.div>

      {/* Sesion 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='min-h-[40vh] sesion4_container flex items-center justify-center py-10'
      >
        <div className='w-full max-w-3xl bg-black/50 p-6 rounded-lg text-white'>
          <h2 className='text-center text-4xl font-bold uppercase mb-4'>
            Hablemos de fitness
          </h2>
          <div className='text-left space-y-4'>
            <div>
              <p className='font-semibold'>Gimnasio Titanes</p>
              <p>Calle 12 #12-34, Medellín</p>
              <p>P. 05030</p>
            </div>
            <div>
              <p className='font-semibold'>Teléfono:</p>
              <p>+56 414 201 6224</p>
            </div>
            <div>
              <p className='font-semibold'>Correo Electrónico:</p>
              <p>com2pa@gmail.com</p>
            </div>
            <div>
              <p className='font-semibold'>Horario de Atención:</p>
              <p>Lunes a Viernes de 9:00 a 21:00</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sesion 5 */}
      <motion.div
        id='contact'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='h-screen bg-red-700'
      >
        <div className='w-full flex flex-col sm:flex-row'>
          {/* Columna izquierda */}
          <div className='w-full sm:w-1/2 h-screen flex flex-col justify-center py-4 px-6 gap-4'>
            <div className='text-white text-center text-4xl sm:text-6xl font-bold'>
              <h2>Fitness de cuerpo completo</h2>
            </div>
            <div className='text-white text-left sm:pr-8'>
              <p>
                Usa este espacio para resaltar tus servicios más populares.
                También puedes utilizar esto para tus productos estrella.
              </p>
            </div>
            <div className='text-white text-center'>
              <button className='bg-black text-white hover:bg-red-500 px-6 py-3 rounded'>
                Registrate hoy
              </button>
            </div>
          </div>

          {/* Columna derecha */}
          <div className='w-full sm:w-1/2 h-screen'>
            <div className='w-full h-full flex justify-center items-center'>
              <img
                src={Sesion}
                className='object-cover w-full h-full'
                alt='imagen'
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
