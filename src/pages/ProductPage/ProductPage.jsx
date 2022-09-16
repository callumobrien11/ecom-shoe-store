import { Component } from "react"
import Header from "../../components/Header/Header"
import ProductList from "../../components/ProductList/ProductList"
import BrandList from "../../components/BrandsList/BrandsList"

export default class ProductPage extends Component {

    state = {
        brands: [],
        activeBrand: "",
        products: []
    }

    async componentDidMount() {
        try {
            const fetchProductsResponse = await fetch('/api/products')
            const fetchBrandsResponse = await fetch('/api/brands')
            let products = await fetchProductsResponse.json()
            let brandsObject = await fetchBrandsResponse.json()
            let brands = brandsObject.map(b => b.name)
            this.setState({brands: brands, products: products})
            console.log("Brands", this.state.brands)
        } catch (err) {
            console.error("ERROR: ", err)
        }
    }

    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                <BrandList brandList={this.state.brands}/>
                <ProductList productList={this.state.products}/>
            </div>
        )
    }
}