import { useState } from "react";
import books from "../../../Utils/books";

export default function ProdukList() {
  const [bookList, setBookList] = useState([...books]);

  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: `Think and Grow Rich ${bookList.length + 1}`,
      author: "Napoleon Hill",
      year: 1937,
      price: "Rp 80.000",
      description: "Prinsip berpikir dan keyakinan diri yang dipakai untuk meraih kesuksesan finansial.",
      image: "/Think and Grwo Rich.jpg",
    };
    setBookList((prev) => [...prev, newBook]);
  };

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-muted">
              Kumpulan buku pengembangan diri yang paling banyak dicari. Cocok
              untuk kamu yang ingin berubah jadi lebih baik setiap hari.
            </p>
            <p>
              <a href="#book" className="btn btn-primary my-2 m-3">Views</a>
              <button className="btn btn-success my-2" onClick={handleAddBook}>Tambah Buku</button>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light" id="book">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {bookList.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm">
                  <img src={book.image} className="card-img-top p-3" alt={book.title}
                    style={{ height: "350px", objectFit: "contain" }} />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="text-muted mb-2">{book.author} ({book.year})</p>
                    <p className="card-text">{book.description}</p>
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}