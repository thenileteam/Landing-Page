const Hero = () => {
  return (
    <section id='hero' className="lg:px-11">
      <div className=" flex items-center text-center lg:text-left h-screen text-pry1">
        <div className="text lg:w-1/2">
          <h1 className="text-small-font lg:text-big-font font-black font-Roboto lg:tracking-spacing leading-lineSm lg:leading-lineBg">Build Your <br/> Online Store <br/>In Minutes</h1>
          <p className="lg:text-lg pt-5">
            Everything you need to launch and manage a professional e-commerce
            store without any coding knowledge.
          </p>
          <a href="https://getnile.co/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="bg-primary btn-join-waitList mt-5 transitions hover:bg-pry1 hover:text-primary">Join The Waitlist</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
