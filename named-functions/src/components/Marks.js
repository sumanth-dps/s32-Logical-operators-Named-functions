import React, { useEffect } from "react";
import { useRef } from "react";

function Marks() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let sanInputRef = useRef();
  let m1aInputRef = useRef();
  let engInputRef = useRef();
  let m1bInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let sanResultRef = useRef();
  let m1aResultRef = useRef();
  let engResultRef = useRef();
  let m1bResultRef = useRef();
  let phyResultRef = useRef();
  let cheResultRef = useRef();

  let sanResult = () => {
    if (sanInputRef.current.value >= 0 && sanInputRef.current.value <= 100) {
      if (sanInputRef.current.value >= 35) {
        sanResultRef.current.innerHTML = "👍";
        sanResultRef.current.style.backgroundColor = "green";
      } else {
        sanResultRef.current.innerHTML = "👎";
        sanResultRef.current.style.backgroundColor = "red";
      }
    } else {
      sanResultRef.current.innerHTML = "Invalid";
      sanResultRef.current.style.backgroundColor = "orange";
    }
  };
  let engResult = () => {
    if (engInputRef.current.value >= 0 && engInputRef.current.value <= 100) {
      engResultRef.current.innerHTML =
        engInputRef.current.value >= 35 ? "Pass" : "Fail";
      engResultRef.current.style.backgroundColor =
        engInputRef.current.value >= 35 ? "green" : "red";
    } else {
      engResultRef.current.innerHTML = "Invalid";
      engResultRef.current.style.backgroundColor = "orange";
    }
  };

  let m1aResult = () => {
    if (m1aInputRef.current.value >= 0 && m1aInputRef.current.value <= 75) {
      if (m1aInputRef.current.value >= 26) {
        m1aResultRef.current.innerHTML = "Pass";
      } else {
        m1aResultRef.current.innerHTML = "Fail";
      }
      m1aResultRef.current.style.backgroundColor =
        m1aInputRef.current.value >= 26 ? "green" : "red";
    } else {
      m1aResultRef.current.innerHTML = "Invalid";
      m1aResultRef.current.style.backgroundColor = "orange";
    }
  };
  let m1bResult = () => {
    if (m1bInputRef.current.value >= 0 && m1bInputRef.current.value <= 75) {
      if (m1bInputRef.current.value >= 26) {
        m1bResultRef.current.innerHTML = "😎";
      } else {
        m1bResultRef.current.innerHTML = "😞";
      }
      m1bResultRef.current.style.color =
        m1bInputRef.current.value >= 26 ? "green" : "red";
    } else {
      m1bResultRef.current.innerHTML = "Invalid";
      m1bResultRef.current.style.backgroundColor = "orange";
    }
  };
  let phyResult = () => {
    if (phyInputRef.current.value >= 0 && phyInputRef.current.value <= 60) {
      if (phyInputRef.current.value >= 21) {
        phyResultRef.current.innerHTML = "Pass";
      } else {
        phyResultRef.current.innerHTML = "Fail";
      }
      phyResultRef.current.style.backgroundColor =
        phyInputRef.current.value >= 21 ? "green" : "red";
    } else {
      phyResultRef.current.innerHTML = "Invalid";
      phyResultRef.current.style.backgroundColor = "orange";
    }
  };
  let cheResult = () => {
    if (cheInputRef.current.value >= 0 && cheInputRef.current.value <= 60) {
      if (cheInputRef.current.value >= 21) {
        cheResultRef.current.innerHTML = "Pass";
      } else {
        cheResultRef.current.innerHTML = "Fail";
      }
      cheResultRef.current.style.color =
        cheInputRef.current.value >= 21 ? "green" : "red";
    } else {
      cheResultRef.current.innerHTML = "Invalid";
      cheResultRef.current.style.color = "orange";
    }
  };
  //useEffect(() => {
  //alert("Welcome, Calculate your marks..😊 ");
  //});

  return (
    <div>
      <form>
        <div>
          <h4 className="title">Inter 1st year marks calculator</h4>
          <label>First name</label>
          <input
            ref={firstNameInputRef}
            onFocus={() => {
              firstNameInputRef.current.style.backgroundColor = "burlywood";
            }}
            onBlur={() => {
              firstNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last name</label>
          <input
            ref={lastNameInputRef}
            onFocus={() => {
              lastNameInputRef.current.style.backgroundColor = "burlywood";
            }}
            onBlur={() => {
              lastNameInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Sanskrit</label>
          <input
            type="number"
            ref={sanInputRef}
            onFocus={() => {
              sanInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              sanResult();
            }}
            onBlur={() => {
              sanInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={sanResultRef}></span>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onMouseMove={() => {
              engInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              engResult();
            }}
            onBlur={() => {
              engInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={engResultRef}></span>
        </div>
        <div>
          <label>M1 A</label>
          <input
            type="number"
            ref={m1aInputRef}
            onFocus={() => {
              m1aInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              m1aResult();
            }}
            onBlur={() => {
              m1aResultRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={m1aResultRef}></span>
        </div>
        <div>
          <label>M1 B</label>
          <input
            type="number"
            ref={m1bInputRef}
            onFocus={() => {
              m1bInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              m1bResult();
            }}
            onBlur={() => {
              m1bInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={m1bResultRef}></span>
        </div>
        <div>
          <label>Physics</label>
          <input
            type="number"
            ref={phyInputRef}
            onFocus={() => {
              phyInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              phyResult();
            }}
            onBlur={() => {
              phyInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={phyResultRef}></span>
        </div>
        <div>
          <label>Chemistry</label>
          <input
            type="number"
            ref={cheInputRef}
            onFocus={() => {
              cheInputRef.current.style.backgroundColor = "burlywood";
            }}
            onChange={() => {
              cheResult();
            }}
            onBlur={() => {
              cheInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <span ref={cheResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let sanMarks = Number(sanInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let m1aMarks = Number(m1aInputRef.current.value);
              let m1bMarks = Number(m1bInputRef.current.value);
              let phyMarks = Number(phyInputRef.current.value);
              let cheMarks = Number(cheInputRef.current.value);
              let total =
                sanMarks + engMarks + m1aMarks + m1bMarks + phyMarks + cheMarks;
              let result;
              if (
                0 > engMarks ||
                engMarks > 100 ||
                0 > sanMarks ||
                sanMarks > 100 ||
                0 > m1aMarks ||
                m1aMarks > 75 ||
                0 > m1bMarks ||
                m1bMarks > 75 ||
                0 > phyMarks ||
                phyMarks > 60 ||
                0 > cheMarks ||
                cheMarks > 60
              ) {
                result = "Invalid";
                resultParaRef.current.innerHTML = "Please Enter Valid Marks";
              } else {
                if (
                  engMarks < 35 ||
                  sanMarks < 35 ||
                  m1aMarks < 26 ||
                  m1bMarks < 26 ||
                  phyMarks < 21 ||
                  cheMarks < 21
                ) {
                  result = "Failed";
                } else {
                  result = "Passed";
                }
                alert(`Total Marks are : ${total}`);
                resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in 1st year of intermediate and got total marks are  : ${total}`;
                console.log(total);
              }
            }}
          >
            Calculate Result
          </button>
        </div>
        <p
          ref={resultParaRef}
          onMouseMove={() => {
            resultParaRef.current.style.color = "green";
          }}
        >
          Please enter values and click Calculate
        </p>
      </form>
    </div>
  );
}
export default Marks;
