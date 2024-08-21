import React from 'react';
import './Trending.css';

function Trending() {
  return (
    <section className="trending">
      <h2>Trending</h2>
      <div className="trending-grid">
        <div className="trending-item">
          <img src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Trending 1" />
          <h3>Dolore magna aliqua</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span><i class="fa-solid fa-clock" style={{marginRight: '.5rem'}}></i>2 min ago</span>
        </div>
        <div className="trending-item">
          <img src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Trending 2" />
          <h3>Morbi eleifend a libero</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span><i class="fa-solid fa-clock" style={{marginRight: '.5rem'}}></i>2 min ago</span>
        </div>
        <div className="trending-item">
          <img src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Trending 3" />
          <h3>Morbi eleifend a libero</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span><i class="fa-solid fa-clock" style={{marginRight: '.5rem'}}></i>2 min ago</span>
        </div>
      </div>
    </section>
  );
}

export default Trending;
