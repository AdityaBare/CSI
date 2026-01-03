import logo from '../../assets/images/logo.png';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-wrapper">
          <div className="logo-glow"></div>
          <div className="logo-circle">
            <img src={logo} alt="CSI Logo" />
          </div>
        </div>
        <h1 className="main-title">CSI Sanjivani</h1>
        <div className="title-line"></div>
        <p className="subtitle">Computer Society of India – Student Chapter</p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="corner-accent top-left"></div>
      <div className="corner-accent top-right"></div>
      <div className="corner-accent bottom-left"></div>
      <div className="corner-accent bottom-right"></div>
    </section>
  );
}


