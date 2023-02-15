const SelectExchange = ({ name, id, functio }) => {
  return (
    <select name={name} id={id} onChange={functio}>
      <option value="EUR">Euro</option>
      <option value="USD">US Dollar</option>
      <option value="GBP">british pound</option>
      <option value="AUD">Australian Dollar</option>
      <option value="JPY"> Japanese Yen</option>
      <option value="MXN">Mexican peso</option>
      <option value="CHF">Swiss franc</option>
      <option value="INR">rupee</option>
      <option value="BRL">Brazilian real</option>
      <option value="BGN">Bulgarian lev</option>
    </select>
  );
};
export default SelectExchange;
