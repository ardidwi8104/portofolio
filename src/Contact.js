import React from 'react';

const Contact = () => {
  return (
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
                <label htmlFor="name" className="form-label">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" aria-describedby="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="form-label">Pesan</label>
                <textarea className="form-control" id="pesan" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0d6efd" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,272C384,299,480,309,576,277.3C672,245,768,171,864,165.3C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
};

export default Contact;
