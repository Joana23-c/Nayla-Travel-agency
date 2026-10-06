import "./Hero.scss";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay">
          <div className="heroContent">
            <p className="subtitle">Nayla Travel</p>
            <p className="title">Go Where You Feel Most Alive</p>
            <p className="subdesc">
              Discover handpicked destinations, unforgettable escapes, and
              travel experiences designed to turn every journey into a story
              worth telling.
            </p>
            <button className="btn">Explore</button>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about__photo"></div>
        <div className="about__content">
          <p className="aboutSubtitle">Discover Nayla Travel</p>
          <p className="aboutTitle">Your Journey Begins With Us</p>
          <p className="aboutTxt">
            At Nayla Travel, we believe every journey should feel effortless,
            exciting, and uniquely yours. From inspiring destinations to
            carefully selected travel packages, we bring everything together to
            help you discover more of the world and create memories that stay
            with you. Whether you're dreaming of a relaxing seaside escape, a
            vibrant city break, or your next great adventure, we're here to make
            getting there simple.
          </p>
          <button className="aboutBtn">Discover More →</button>
        </div>
      </div>
    </>
  );
}
