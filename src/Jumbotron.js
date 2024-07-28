import React from 'react';

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center">
      <div className="profil">
        <img src="img/Ardi.jpg" alt="Ardi" width="200px" className="img-thumbnail" />
        <h1 className="display-4">Ardi Dwi Saputra</h1>
        <p className="lead">Mahasiswa | Informatika.</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,138.7C672,149,768,235,864,234.7C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default Jumbotron;
