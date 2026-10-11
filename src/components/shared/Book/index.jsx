import { useState } from "react";
import books from "../../../Utils/books";

export default function Book() {
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
    <section className="py-5 container">
      <h2 className="fw-light text-center mb-4">Book</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {bookList.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top p-3" alt={book.title}
                style={{ height: "300px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted mb-1">{book.author} ({book.year})</p>
                <p className="card-text small">{book.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">{book.price}</span>
                  <button className="btn btn-primary btn-sm">Beli</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-success" onClick={handleAddBook}>Tambah Buku</button>
      </div>
    </section>
  );
}