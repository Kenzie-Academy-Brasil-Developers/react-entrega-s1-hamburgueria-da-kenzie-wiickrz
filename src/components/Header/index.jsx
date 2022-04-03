import "./style.css";
import SearchInput from "../SearchInput";
import Logo from "../Logo";

const Header = ({ setFilteredProducts, products }) => {
  return (
    <header className="app-header">
      <div className="header__container">
        <div className="logo">
          <Logo />
        </div>
        <div className="search__input">
          <SearchInput
            setFilteredProducts={setFilteredProducts}
            products={products}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
