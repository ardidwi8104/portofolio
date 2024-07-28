import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center fs-5 text-center">
          <div className="col-md-6">
            <p>Nama saya Ardi Dwi Saputra. Saat ini, saya sedang menempuh pendidikan di Institut Teknologi Kalimantan (ITK). Di luar perkuliahan, saya memiliki passion di bidang pengembangan web dan sedang aktif mengikuti bootcamp untuk menjadi Front-End Developer.</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#e2edff" fillOpacity="1" d="M0,96L48,80C96,64,192,32,288,58.7C384,85,480,171,576,170.7C672,171,768,85,864,85.3C960,85,1056,171,1152,176C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default About;
