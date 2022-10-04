import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import BrandList from "../../components/BrandsList/BrandsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { Container } from "react-bootstrap";

export default function ProductPage(props) {
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState(null);

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setUserInState={props.setUserInState}
        products={props.products}
      />
      <Container>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setActiveBrand={setActiveBrand}
        />

        <BrandList
          brandList={props.brands}
          activeBrand={activeBrand}
          setActiveBrand={setActiveBrand}
        />
        <ProductList
          activeBrand={activeBrand}
          productList={props.products}
          searchTerm={searchTerm}
          setFavorite={setFavorite}
          favorite={favorite}
        />
      </Container>
    </div>
  );
}
