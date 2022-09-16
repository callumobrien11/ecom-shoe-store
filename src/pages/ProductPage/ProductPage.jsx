import { Component } from "react"
import Header from "../../components/Header/Header"

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
            let brands = await fetchBrandsResponse.json()
            console.log(products)
            console.log(brands)
        } catch (err) {
            console.error("ERROR: ", err)
        }
    }

    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                products
            </div>
        )
    }
}