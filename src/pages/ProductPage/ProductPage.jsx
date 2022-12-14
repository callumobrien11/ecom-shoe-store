import Header from "../../components/Header/Header";
import ProductList from "../../components/ProductList/ProductList";
import BrandList from "../../components/BrandsList/BrandsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

export default function ProductPage(props) {
  const [activeBrand, setActiveBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState(null);

  document.title = "All Shoes | Shoe Expo";

  return (
    <div>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setUserInState={props.setUserInState}
        products={props.products}
      />
      <Container>
        <section>
          <Row md={1} xs={1} lg={1}>
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
          </Row>
        </section>

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
