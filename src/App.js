//import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent />
    </>
  );
}

function Mycomponent() {
  const header = " row bg-danger text-light";
  const headstyle = "d-flex align-items-center p-3";
  const inputfield = " row mt-2";
  const chatstyle1 = "alert alert-danger border-secondary text-dark";
  const charstyle2 = "alert alert-danger border-secondary text-dark";

  const studentName = "Somnath Bhendekar";
  const studentid = "122_somnath bhendekar_kh";

  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const getText = (e) => {
    let nextText = e.target.value;
    setText(nextText);
  };

  const sendMsg = () => {
    if (text != "") {
      let newList = [...list, text];
      setList(newList);
    }
  };

  return (
    <div className="container-fluid">
      <div className={header}>
        <div className={headstyle}>
          <h3>Mychats</h3>
          <h6 className="m-0,ms-2">
            by {studentName} {studentid}
          </h6>
        </div>
      </div>

      <div className={inputfield}>
        <div>
          <input
            className="form-control form-control-lg m-1 w-100"
            type="text"
            name=""
            id=""
            placeholder="lets chat here... "
            onChange={getText}
          />

          <input
            className="btn btn-outline-danger w-100 m-1"
            type="button"
            value="Send"
            onClick={sendMsg}
          />
        </div>
        <div>
          {list.map((item, index) => {
            if (index % 2 !== 0) {
              return (
                <div key={index} className={chatstyle1}>
                  {item}
                </div>
              );
            } else {
              return (
                <div key={index} className={charstyle2}>
                  {item}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

/*


           

*/
