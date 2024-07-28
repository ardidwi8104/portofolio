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
