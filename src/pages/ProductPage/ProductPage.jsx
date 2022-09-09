import { Component } from "react"
import Header from "../../components/Header/Header"

export default class ProductPage extends Component {
    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                products
            </div>
        )
    }
}