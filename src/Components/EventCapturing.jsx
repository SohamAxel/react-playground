import React from "react";

const EventCapturing = () => {
  return (
    <>
      <div onClick={() => console.log("outer component")}>
        <h1>Event Bubbling</h1>
        <p onClick={() => console.log("inner component")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor eum voluptatem. Doloribus, sed unde fugiat aut nobis quod
          officia. Necessitatibus rerum alias numquam rem voluptatem atque
          facere vel. Rem.
        </p>
      </div>
      <div onClickCapture={() => console.log("outer component")}>
        <h1>Event Capturing</h1>
        <p onClickCapture={() => console.log("inner component")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          dolor eum voluptatem. Doloribus, sed unde fugiat aut nobis quod
          officia. Necessitatibus rerum alias numquam rem voluptatem atque
          facere vel. Rem.
        </p>
      </div>
    </>
  );
};

export default EventCapturing;
