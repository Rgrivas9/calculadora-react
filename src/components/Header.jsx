import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../context/pageContext";

const Header = () => {
  const navigate = useNavigate();
  const { page } = useContext(PageContext);
  return (
    <header>
      {page !== "calculator" && (
        <button onClick={() => navigate("/")}>Calculator</button>
      )}
      {page !== "exchange" && (
        <button onClick={() => navigate("/exchange")}>Exchange</button>
      )}
      {page !== "conversion" && (
        <button onClick={() => navigate("/conversion")}>Conversion</button>
      )}
    </header>
  );
};
export default Header;
