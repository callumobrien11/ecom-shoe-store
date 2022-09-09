import { Component } from "react"
import Header from "../../components/Header/Header"

export default class CartPage extends Component {
    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                Cart is empty
            </div>
        )
    }
}