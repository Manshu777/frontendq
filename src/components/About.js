import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="page-top">
        <div className="container mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="page-title">MyMart</h1> {/* Update the title to i-mart */}
              <h2 className="page-description">Radiant Skin Awaits</h2> {/* Update the description */}
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <div className="container mx-auto">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img src='./beauty.avif' alt="i-mart Product" className="w-full lg:w-4/5 mx-auto lg:mx-0" /> {/* Update the image source */}
            </div>
            <div className="lg:w-1/2">
              <div className="about-item">
                <div className="title">
                  Unlock Your Skin's Glow with i-mart
                </div>
                <div className="about-text">
                  Experience the magic of i-mart, a luxurious skincare product designed to rejuvenate and revitalize your skin. Infused with potent natural ingredients, i-mart is your key to achieving radiant, youthful-looking skin.
                </div>
                <div className="about-features">
                  <p className="about-feature"><i className="fas fa-check-circle"></i> Restores skin's natural glow and vitality</p> {/* Update the features */}
                  <p className="about-feature"><i className="fas fa-check-circle"></i> Hydrates and nourishes for a supple complexion</p>
                  <p className="about-feature"><i className="fas fa-check-circle"></i> Reduces the appearance of fine lines and wrinkles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
