
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to <span>Find It</span></h1>
      <p className="tagline">Your college’s official Lost & Found platform</p>
      <p className="desc">
        Misplaced something on campus? Or did you find an item that isn’t yours?
        <br />
        “Find It” makes it easy for students to report lost items, check
        found items, and reconnect belongings with their rightful owners.
        <br /><br />
        Start searching today and help your friends and classmates
        recover what’s missing!
      </p>
      <a href="#lost" className="hero-btn">Get Started</a>
    </section>
  );
};

export default Hero;
