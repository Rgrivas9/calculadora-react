import { useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";

const Conversion = () => {
  const { page, setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("conversion");
  }, [page]);
  localStorage.setItem("pageCalc", "conversion");

  return (
    <h1>{page}</h1>
  );
};
export default Conversion;
