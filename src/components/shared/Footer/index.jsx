export default function (){
    return (
        <>
     <div className="container">
        <footer className="pt-5 pb-3 mt-5 border-top">
          <div className="row">
            {/* Kolom 1: Brand */}
            <div className="col-md-5 mb-4">
              <div className="d-flex align-items-center mb-2">
                <i className="fa-solid fa-book fa-xl" style={{ color: 'rgb(20, 0, 255)' }}></i>
                <span className="ms-2 fs-4">bookstore</span>
              </div>
              <p className="text-secondary">Toko buku online dengan koleksi pilihan untuk teman belajarmu.</p>
            </div>

            {/* Kolom 2: Menu */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="fw-bold">Menu</h6>
              <ul className="nav flex-column">
                <li className="nav-item"><a href="#" className="nav-link p-0 mb-2">Home</a></li>
                <li className="nav-item"><a href="#book" className="nav-link p-0 mb-2">Book</a></li>
                <li className="nav-item"><a href="#team" className="nav-link p-0 mb-2">Team</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link p-0 mb-2">Contact</a></li>
              </ul>
            </div>

            {/* Kolom 3: Kontak + Social media */}
            <div className="col-6 col-md-4 mb-4">
              <h6 className="fw-bold">Kontak</h6>
              <p className="text-secondary mb-1"><i className="fa-solid fa-location-dot me-2"></i>Depok, Jawa Barat</p>
              <p className="text-secondary mb-1"><i className="fa-solid fa-envelope me-2"></i>info@bookstore.com</p>
              <p className="text-secondary mb-3"><i className="fa-solid fa-phone me-2"></i>0812-3456-7890</p>
              <div className="fs-4">
                <a href="https://www.instagram.com/mochirwi/" target="_blank" rel="noreferrer" className="text-secondary me-3"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/irvan.wijaya.1257" target="_blank" rel="noreferrer" className="text-secondary me-3"><i className="fa-brands fa-facebook"></i></a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted border-top pt-3">
            © {new Date().getFullYear()} Moch-Irwi
          </div>
        </footer>
      </div>
        </>
    )
}