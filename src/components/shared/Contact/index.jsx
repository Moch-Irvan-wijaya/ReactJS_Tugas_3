export default function(){
    return (
        <>
        <section id="contact" className="py-5 container">
          <h2 className="fw-light text-center mb-4">Contact</h2>
          <div className="row g-5">
            <div className="col-md-5">
              <h5>Hubungi Kami</h5>
              <p className="text-muted">Ada pertanyaan soal buku? Kirim pesan aja.</p>
              <p><i className="fa-solid fa-location-dot me-2"></i>Depok, Jawa Barat</p>
              <p><i className="fa-solid fa-envelope me-2"></i>info@bookstore.com</p>
              <p><i className="fa-solid fa-phone me-2"></i>0812-3456-7890</p>
            </div>
            <div className="col-md-7">
                <div className="mb-3">
                  <label htmlFor="nama" className="form-label">Nama</label>
                  <input type="text" className="form-control" id="nama" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="pesan" className="form-label">Pesan</label>
                  <textarea className="form-control" id="pesan" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Kirim</button>
            </div>
          </div>
        </section>
        </>
    )
}