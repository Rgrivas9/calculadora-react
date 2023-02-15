import { useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";

const Exchange = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("exchange");
  }, [page]);
  localStorage.setItem("pageCalc", "exchange");

  return <h1>{page}</h1>;
};
export default Exchange;
