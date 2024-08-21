import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-content">
          <h1>World News</h1>
          <hr />
          <h2>Amazing places in America to visit</h2>
          <p>
            For some reason — this country, this city, this neighborhood, this
            particular street — is the place you are living a majority of your
            life in.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="more-news">
          <h2>More News</h2>
          <hr></hr>
          <div className="news-item">
            <h3>TRAVEL</h3>
            <p>Article title</p>
            <p>Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...</p>
            <span><i class="fa-solid fa-clock" style={{marginRight: '.5rem'}}></i>2 min ago</span>
          </div>
          <div className="news-item">
            <h3>TECHNOLOGY</h3>
            <p>Article title</p>
            <p>Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...</p>
            <span><i class="fa-solid fa-clock" style={{marginRight: '.5rem'}}></i>2 min ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
