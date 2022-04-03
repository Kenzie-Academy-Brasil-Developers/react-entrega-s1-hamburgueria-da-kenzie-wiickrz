import "./style.css";
import Button from "../Button";

const SearchInput = ({ setFilteredProducts, products }) => {
  function showProducts(value) {
    setFilteredProducts(
      products.filter((item) => {
        return (
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  }

  return (
    <div className="searchBar">
      <input
        onChange={(e) => showProducts(e.target.value)}
        placeholder="Digitar pesquisa"
        type="text"
      />
      <Button variant="primary">Pesquisar</Button>
    </div>
  );
};

export default SearchInput;
