import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Self-taught photographer with an eye for detail and over 10 years of experience working in the field. 
          Background in web design and graphic design mixed with background in marketing. Passionate about helping people making life beautiful.
        </p>
      </div>
    </section>
  );
}

export default About;
