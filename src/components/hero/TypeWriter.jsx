import TypeWriterEffect from 'react-typewriter-effect';
const TypeWriter = () => {
  return (
    <div className='text-base sm:text-sm md:text-lg font-bold uppercase'>
      <TypeWriterEffect
        startDelay={100}
        cursorColor='#7DD3FC'
        text='Prepárate para cambiar para mejor.'
        typeSpeed={100}
        multiText={[
          'Transforma tu cuerpo.',
          'Mejora tu salud.',
          'Alcanza tus metas.',
        ]}
        multiTextDelay={1000}
      />
    </div>
  );
};

export default TypeWriter;
