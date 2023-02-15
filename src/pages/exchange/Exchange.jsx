import { useContext, useEffect, useRef, useState } from "react";
import { PageContext } from "../../context/pageContext";
import SelectExchange from "../../components/SelectExchange";
const Exchange = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("exchange");
  }, [page]);
  localStorage.setItem("pageCalc", "exchange");
  const type1 = useRef(null);
  const type2 = useRef(null);
  const [date, setDate] = useState("");
  const convert1 = async () => {
    if (
      type1.current.lastChild.value != "-" ||
      type1.current.lastChild.value[type1.current.lastChild.value.length - 1] !=
        "."
    ) {
      if (type1.current.firstChild.value != type2.current.lastChild.value) {
        const result = await fetch(
          `https://api.frankfurter.app/latest?from=${type1.current.firstChild.value}&to=${type2.current.lastChild.value}&amount=${type1.current.lastChild.value}`
        );
        const resultJson = await result.json();
        type2.current.firstChild.value =
          resultJson.rates[type2.current.lastChild.value];
        setDate(resultJson.date);
      }
    }
    if (type1.current.firstChild.value == type2.current.lastChild.value) {
      type2.current.firstChild.value = type1.current.lastChild.value;
    }
  };
  const convert2 = async () => {
    if (
      type2.current.firstChild.value != "-" ||
      type2.current.firstChild.value[
        type2.current.firstChild.value.length - 1
      ] != "."
    ) {
      if (type1.current.firstChild.value != type2.current.lastChild.value) {
        const result = await fetch(
          `https://api.frankfurter.app/latest?from=${type2.current.lastChild.value}&to=${type1.current.firstChild.value}&amount=${type2.current.firstChild.value}`
        );
        const resultJson = await result.json();
        type1.current.lastChild.value =
          resultJson.rates[type1.current.firstChild.value];
        setDate(resultJson.date);
      }
    }
    if (type1.current.firstChild.value == type2.current.lastChild.value) {
      type1.current.lastChild.value = type2.current.firstChild.value;
    }
  };
  return (
    <main>
      <h1>Currency converter</h1>
      <section>
        <div ref={type1}>
          <SelectExchange name={"from"} id={"from"} functio={convert2} />
          <input
            type="number"
            defaultValue={0}
            onChange={() => {
              convert1();
            }}
          />
        </div>
        <div ref={type2}>
          <input
            type="number"
            defaultValue={0}
            onChange={() => {
              convert2();
            }}
          />
          <SelectExchange name={"to"} id={"to"} functio={convert1} />
        </div>
        {date != "" && <h4>As of {date}</h4>}
      </section>
    </main>
  );
};
export default Exchange;
