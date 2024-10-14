const Hero = () => {
  return (
    <section id='hero' className="h-screen px-11 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-50">
      <div className=" flex items-center text-left h-screen text-pry1">
        <div className="text lg:w-1/2">
          <h1 className="text-small-font lg:text-big-font font-black font-Roboto tracking-spacing leading-lineSm lg:leading-lineBg">Build Your<br/> Online Store In<br/> Minutes</h1>
          <p className="text-xl pt-5">
            Everything you need to launch and manage a professional e-commerce
            store without any coding knowledge
            </p>
            <button type="button" className="bg-primary btn-join-waitList mt-7 transitions hover:bg-pry1 hover:text-primary">Join The Waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
