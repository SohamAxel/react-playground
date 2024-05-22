import { useRef } from "react";
import "./styles.css";
import { useEffect } from "react";

function App() {
  const card = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    {
      threshold: 1,
    }
  );

  const lastElementObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("Reached Last card");
    }
  });

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((element) => {
      observer.observe(element);
    });

    lastElementObserver.observe(document.querySelector(".lastcard"));
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <div className="card-container">
        <div className="card show" ref={card}>
          This is first card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card" ref={card}>
          This is a card
        </div>
        <div className="card lastcard" ref={card}>
          This is last card
        </div>
      </div>
    </>
  );
}

export default App;
