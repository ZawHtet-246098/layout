import React from 'react';
import './HappeningNow.css';

function HappeningNow() {
    return (
        <section className="happening-now">
            <h2>Happening Now</h2>
            <div className="happening-now-grid-parent">
                <div className="happening-now-grid">
                    <div className="happening-now-item large">
                        <img
                            src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Large 1"
                        />
                        <div className='happening-now-item-content'>
                            <h3>Large article title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span><i class="fa-solid fa-clock" style={{ marginRight: '.5rem' }}></i>2 min ago</span>
                        </div>
                    </div>

                    <div className="happening-now-item large">
                        <img
                            src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Large 2"
                        />
                        <div className='happening-now-item-content'>
                            <h3>Large article title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span><i class="fa-solid fa-clock" style={{ marginRight: '.5rem' }}></i>2 min ago</span>
                        </div>
                    </div>
                </div>

                <div className="happening-now-grid">
                    <div className="happening-now-item small">
                        <img
                            src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Small 1"
                        />
                        <h4>Small title</h4>
                        <span><i class="fa-solid fa-clock" style={{ marginRight: '.5rem' }}></i>2 min ago by worldNew</span>

                    </div>
                    <div className="happening-now-item small">
                        <img
                            src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Small 2"
                        />
                        <h4>Small title</h4>
                        <span><i class="fa-solid fa-clock" style={{ marginRight: '.5rem' }}></i>2 min ago by Smitt</span>

                    </div>
                    <div className="happening-now-item small">
                        <img
                            src="https://images.pexels.com/photos/1525039/pexels-photo-1525039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Small 3"
                        />
                        <h4>Small title</h4>
                        <span><i class="fa-solid fa-clock" style={{ marginRight: '.5rem' }}></i>2 min ago by Willion</span>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HappeningNow;
