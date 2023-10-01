import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
            nesciunt laboriosam tenetur nulla ad at facilis, libero ullam
            necessitatibus, consectetur consequuntur ducimus provident
            praesentium. Ipsum dolor quam amet nulla maiores?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
