import { useEffect, useState } from 'react';

const nabvarLink = [
  { id: 1, title: 'Home', icon: 'bi bi-house', path: '/' },
  { id: 2, title: 'Rutina', path: '#rutina' },
  { id: 3, title: 'Toma Desicion', path: '#desicion' },
  { id: 4, title: 'Contact', path: '#contact' },
];

const navbarRedes = [
  {
    id: 4,
    icon: 'bi bi-linkedin',
    link: 'https://www.linkedin.com/in/merwilvegas/',
  },
  { id: 5, icon: 'bi bi-git', link: 'https://github.com/com2pa' },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [activeLink, setActiveLink] = useState('');
const handleLinkClick = (path) => {
  const section = document.querySelector(path);
  if (section) {
    const navbarHeight = 122.637; // Altura del navbar
    const additionalMargin = 10; // Margen adicional para ajustar el scroll
    const sectionRect = section.getBoundingClientRect(); // Obtiene la posición de la sección
    const sectionTop =
      window.scrollY + sectionRect.top - navbarHeight - additionalMargin;

    console.log(`Scrolling to: ${path}, Section Top: ${sectionTop}`); // Depuración
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  } else {
    console.error(`Section not found for path: ${path}`); // Depuración en caso de error
  }
  setShowMenu(false);
};

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]'); // Busca cualquier elemento con un id
      const navbarHeight = 200.000; // Altura del navbar
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight;
        console.log(
          // `Section: ${section.id}, Section Top: ${sectionTop}, ScrollY: ${window.scrollY}`
        ); // Depuración
        if (window.scrollY >= sectionTop) {
          // console.log(`Active link updated to: #${section.id}`); // Depuración del enlace activo
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className='fixed top-0 left-0 bg-black w-full bg-opacity-30 backdrop-blur-md z-50 shadow-lg'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        {/* logo */}
        <div>
          <h1 className='text-white sm:text-lg text-sm hover:text-sky-400 transition-transform hover:scale-110 transform inline-block duration-300'>
            Landing
          </h1>
        </div>
        {/* menu / navegacion mobile */}
        <button
          onClick={toggleMenu}
          className='sm:hidden block px-3 py-2 text-white border-2 rounded-md hover:text-sky-400 transition-transform hover:scale-110 transform'
        >
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
          >
            {showMenu ? (
              <path
                d='M4 18L18 6M6 6l12 12'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              />
            ) : (
              <path
                d='M4 6h16M4 12h16M4 18h16'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              />
            )}
          </svg>
        </button>

        {/* menu / navegacion desktop */}
        <div className='hidden sm:block'>
          <ul className='flex sm:space-x-8 space-x-4'>
            {nabvarLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className='text-white sm:text-lg text-sm hover:text-sky-400 transition-transform hover:scale-110 transform inline-block duration-300'
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden sm:block'>
          {/* redes sociales */}
          <ul className='flex space-x-3'>
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block transition transform duration-300 hover:scale-125'
                >
                  <i
                    className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* menu para mobile hamburgesa */}
      <div
        className={`md:hidden absolute w-full transition-all duration-300 bg-white ${
          showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className='flex flex-col px-4 py-2'>
          {nabvarLink.map((link) => (
            <li
              key={link.id}
              className='py-2 text-center'
            >
              <a
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className='text-black hover:text-sky-400'
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <ul className='space-x-4 px-4 py-2 border-t border-b-white flex justify-center'>
          {navbarRedes.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block'
              >
                <i
                  className={`${link.icon} text-lg text-black hover:text-sky-200`}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
