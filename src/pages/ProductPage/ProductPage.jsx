import { Component } from "react"
import Header from "../../components/Header/Header"
import ProductList from "../../components/ProductList/ProductList"
import BrandList from "../../components/BrandsList/BrandsList"

export default class ProductPage extends Component {

    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                <BrandList brandList={this.props.brands}/>
                <ProductList productList={this.props.products}/>
            </div>
        )
    }
}