import { useRef } from "react";
import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const lastCard = useRef();
  const [datas, setDatas] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const lastElementObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      lastElementObserver.unobserve(lastCard.current);
      console.log("Reached Last card");
      setDatas((currentData) => [
        ...currentData,
        ...[
          currentData[currentData.length - 1] + 1,
          currentData[currentData.length - 1] + 2,
          currentData[currentData.length - 1] + 3,
          currentData[currentData.length - 1] + 4,
          currentData[currentData.length - 1] + 5,
        ],
      ]);
    }
  });

  useEffect(() => {
    console.log("last card changed");
    lastElementObserver.observe(lastCard.current);
  }, [datas]);

  return (
    <>
      <h1>Hello</h1>
      <div className="card-container">
        {datas.map((data, index) => {
          if (index == datas.length - 1) {
            return (
              <div
                className="card show"
                key={data}
                ref={lastCard}
                data-test="last"
              >
                This is card - {data}
              </div>
            );
          }
          return (
            <div className="card show" key={data}>
              This is card - {data}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
