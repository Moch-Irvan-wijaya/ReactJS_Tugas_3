export default function(){
    return(
        <>
        <section id="team" className="py-5 bg-light">
          <div className="container">
            <h2 className="fw-light text-center mb-4">Our Team</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
              <div className="col">
                <img src="/Ganteng.jpg" className="rounded-circle mb-3 shadow-sm" alt="Irvan" width="150" height="150" />
                <h5 className="mb-0">Irvan</h5>
                <p className="text-muted">Founder</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Sinta" width="150" height="150" />
                <h5 className="mb-0">Sinta</h5>
                <p className="text-muted">Designer</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Budi" width="150" height="150" />
                <h5 className="mb-0">Budi</h5>
                <p className="text-muted">Developer</p>
              </div>

              <div className="col">
                <img src="cantik.jpg" className="rounded-circle mb-3 shadow-sm" alt="Rina" width="150" height="150" />
                <h5 className="mb-0">Rina</h5>
                <p className="text-muted">Marketing</p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}