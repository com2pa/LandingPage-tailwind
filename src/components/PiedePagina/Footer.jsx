const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 py-10'>
      <div className='max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Sección 1: Logo y descripción */}
        <div>
          <h2 className='text-2xl font-bold text-white'>Gimnasio Titanes</h2>
          <p className='mt-2 text-sm'>
            Tu mejor opción para transformar tu cuerpo y mente. ¡Únete a nuestra
            comunidad fitness hoy!
          </p>
        </div>

        {/* Sección 2: Links de navegación */}
        <div>
          <h3 className='text-lg font-semibold text-white'>Enlaces rápidos</h3>
          <ul className='mt-2 space-y-2'>
            <li>
              <a
                href='#'
                className='hover:text-amber-400'
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-amber-400'
              >
                Planes
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-amber-400'
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:text-amber-400'
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h3 className='text-lg font-semibold text-white'>Contacto</h3>
          <p className='mt-2 text-sm'>Calle 12 #12-34, Medellín</p>
          <p className='text-sm'>Tel: +56 414 201 6224</p>
          <p className='text-sm'>Email: com2pa@gmail.com</p>
          <div className='flex gap-4 mt-4'>
            <a
              href='#'
              className='text-gray-400 hover:text-amber-400'
            >
              <i className='bi bi-facebook text-2xl'></i>
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-amber-400'
            >
              <i className='bi bi-instagram text-2xl'></i>
            </a>
            <a
              href='#'
              className='text-gray-400 hover:text-amber-400'
            >
              <i className='bi bi-twitter text-2xl'></i>
            </a>
          </div>
        </div>
      </div>

      {/* Línea de separación y derechos reservados */}
      <div className='border-t border-white mt-8 pt-4 text-center text-sm'>
        © {new Date().getFullYear()} Ing Merwil Vegas. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
