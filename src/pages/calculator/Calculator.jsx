import { useContext, useEffect, useRef, useState } from "react";
import { PageContext } from "../../context/pageContext";
import operations from "../../utils/operations";
import "./calculator.css";
const Calculator = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("calculator");
  }, [page]);
  localStorage.setItem("pageCalc", "calculator");
  const [hidden, setHidden] = useState(true);
  let [input, setInput] = useState("");
  let [toOperate, setOperate] = useState("");
  let [complete, setComplete] = useState(0);
  let [prevcomplete, setprevComplete] = useState("");
  let [prevInput, setprevInput] = useState("");
  let [tempInput, settempInput] = useState("");
  useEffect(() => {
    setprevInput(tempInput);
  }, [prevcomplete]);
  const handleClick = (value) => {
    if (input != "") {
      settempInput(input);
    }
    setInput((input += value));
    setOperate((toOperate += value));
    setOperate((toOperate += ","));
    setprevComplete(complete);
  };
  const erase = () => {
    settempInput(input);
    setInput("");
    setOperate("");
    setprevComplete(complete);
  };
  const delet = () => {
    settempInput(input);
    if (input[input.length - 1] != "r") {
      setInput(input.slice(0, input.length - 1));
      setOperate(toOperate.slice(0, toOperate.length - 2));
    }
    if (input[input.length - 1] == "r") {
      setInput(input.slice(0, input.length - 11));
      setOperate(toOperate.slice(0, toOperate.length - 12));
    }
    if (input != "") {
      setprevComplete(complete);
    }
  };
  const keyboardListener = (ev) => {
    if (ev.which == 96 || ev.which == 48) {
      handleClick("0");
    }
    if (ev.which == 97 || ev.which == 49) {
      handleClick("1");
    }
    if (ev.which == 98 || ev.which == 50) {
      handleClick("2");
    }
    if (ev.which == 99 || ev.which == 51) {
      handleClick("3");
    }
    if (ev.which == 100 || ev.which == 52) {
      handleClick("4");
    }
    if (ev.which == 101 || ev.which == 53) {
      handleClick("5");
    }
    if (ev.which == 102 || ev.which == 54) {
      handleClick("6");
    }
    if (ev.which == 103 || ev.which == 55) {
      handleClick("7");
    }
    if (ev.which == 104 || ev.which == 56) {
      if (ev.shiftKey == false) {
        handleClick("8");
      }
    }
    if (ev.which == 105 || ev.which == 57) {
      if (ev.shiftKey == false) {
        handleClick("9");
      }
    }
    if (ev.which == 8) {
      delet();
    }
    if (ev.which == 46) {
      erase();
    }
    if (ev.which == 56 && ev.shiftKey) {
      handleClick("(");
    }
    if (ev.which == 57 && ev.shiftKey) {
      handleClick(")");
    }
    if (ev.which == 110 || ev.which == 190) {
      handleClick(".");
    }
    if (ev.which == 107) {
      handleClick("+");
    }
    if (ev.which == 109) {
      handleClick("-");
    }
    if (ev.which == 111) {
      handleClick("/");
    }
    if (ev.which == 106) {
      handleClick("*");
    }
    if (ev.which == 13) {
      setComplete(operations(toOperate.slice(0, toOperate.length - 1)));
    }
  };
  return (
    <main
      onKeyDown={(ev) => keyboardListener(ev)}
      tabIndex="0"
      className="mainCalculator"
    >
      <h1>Calculator</h1>
      <section>
        <div className="calculator">
          <div className="screenCalculator">
            <h3 className={hidden == false ? "inputCalculator" : "off"}>
              {input}
            </h3>
            <h3 className={hidden == false ? "completeCalculator" : "off"}>
              {complete}
            </h3>
            {prevInput != "" && (
              <h3 className={hidden == false ? "prevCalculator" : "off"}>
                {prevInput}={prevcomplete}
              </h3>
            )}
          </div>
          <div className="padCalculator">
            <button
              className="onBtn"
              onClick={() => {
                setHidden(false);
              }}
            >
              ON
            </button>
            <div className="numberBtnCalculator">
              <button onClick={() => handleClick("1")}>1</button>
              <button onClick={() => handleClick("2")}>2</button>
              <button onClick={() => handleClick("3")}>3</button>
              <button onClick={() => handleClick("4")}>4</button>
              <button onClick={() => handleClick("5")}>5</button>
              <button onClick={() => handleClick("6")}>6</button>
              <button onClick={() => handleClick("7")}>7</button>
              <button onClick={() => handleClick("8")}>8</button>
              <button onClick={() => handleClick("9")}>9</button>
              <button onClick={() => handleClick("0")}>0</button>
              <button onClick={() => handleClick(".")}>.</button>
              <button onClick={() => delet()}>DEL</button>
            </div>
            <div className="opBtnCalculator">
              <button onClick={() => erase()}>C</button>
              <button onClick={() => handleClick("+")}>+</button>
              <button onClick={() => handleClick("-")}>-</button>
              <button onClick={() => handleClick("*")}>*</button>
              <button onClick={() => handleClick("/")}>/</button>
              <button onClick={() => handleClick("√")}>√</button>
              <button onClick={() => handleClick("^")}>^</button>
              <button onClick={() => handleClick("π")}>π</button>
              <button onClick={() => handleClick("(")}>(</button>
              <button onClick={() => handleClick(")")}>)</button>
              <button onClick={() => handleClick(complete.toString())}>
                ans
              </button>
              <button
                onClick={() => {
                  setComplete(
                    operations(toOperate.slice(0, toOperate.length - 1))
                  );
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
