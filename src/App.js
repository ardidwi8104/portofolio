/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import Ardi from "./Ardi.jpg"; // Correctly imported image

function App() {
  return (
    <div id="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Ardi Dwi Saputra
          </a>
          <div className="navbar-menu">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Jumbotron */}
      <section className="jumbotron text-center">
        <div className="profil">
          <img src={Ardi} alt="Ardi" width="200px"/> {/* Using the imported image */}
          <h1 className="display-4">Ardi Dwi Saputra</h1>
          <p className="lead">Mahasiswa Informatika.</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,138.7C672,149,768,235,864,234.7C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row justify-content-center fs-5 text-center">
            <div className="col-md-6">
              <p>
                Nama saya Ardi Dwi Saputra. Saat ini, saya sedang menempuh pendidikan di Institut Teknologi Kalimantan (ITK). Di luar perkuliahan, saya memiliki passion di bidang pengembangan web dan sedang aktif mengikuti bootcamp untuk menjadi Front-End Developer.
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2edff"
            fillOpacity="1"
            d="M0,96L48,80C96,64,192,32,288,58.7C384,85,480,171,576,170.7C672,171,768,85,864,85.3C960,85,1056,171,1152,176C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>My Projects</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div className="col-md-4 mb-3" key={project}>
                <div className="card">
                  <img src={Ardi} className="card-img-top" alt="Ardi" /> {/* Using the imported image */}
                  <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,218.7C384,192,480,128,576,138.7C672,149,768,235,864,234.7C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">
                    Pesan
                  </label>
                  <textarea className="form-control" id="pesan" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0d6efd"
            fillOpacity="1"
            d="M0,160L48,181.3C96,203,192,245,288,272C384,299,480,309,576,277.3C672,245,768,171,864,165.3C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Created with <i className="bi bi-heart-fill text-danger"></i> by{" "}
          <a href="#" className="text-white fw-bold">
            Ardi Dwi
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
