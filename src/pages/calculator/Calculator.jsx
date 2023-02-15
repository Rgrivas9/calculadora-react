import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/pageContext";
import operations from "../../utils/operations";

const Calculator = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("calculator");
  }, [page]);
  localStorage.setItem("pageCalc", "calculator");

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
    if (input!=''){settempInput(input)};
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
    setInput(input.slice(0, input.length - 1));
    setOperate(toOperate.slice(0, toOperate.length - 2));
    if (input!=''){setprevComplete(complete)};
  };

  return (
    <main>
      <h1>{page}</h1>
      <nav></nav>
      <section>
        <div className="screenCalculator">
          <h3 className="inputCalculator">{input}</h3>
          <h3>{complete}</h3>
          {prevInput != "" && (
            <h3>
              {prevInput}={prevcomplete}
            </h3>
          )}
        </div>
        <div className="padCalculator">
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
            <button onClick={() => erase()}>C</button>
            <button onClick={() => delet()}>DEL</button>
          </div>
          <div className="opBtnCalculator">
            <button onClick={() => handleClick("+")}>+</button>
            <button onClick={() => handleClick("-")}>-</button>
            <button onClick={() => handleClick("*")}>*</button>
            <button onClick={() => handleClick("/")}>/</button>
            <button onClick={() => handleClick("√")}>√</button>
            <button onClick={() => handleClick("^")}>^</button>
            <button onClick={() => handleClick("π")}>π</button>
            <button onClick={() => handleClick("(")}>(</button>
            <button onClick={() => handleClick(")")}>)</button>
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
      </section>
    </main>
  );
};
export default Calculator;
