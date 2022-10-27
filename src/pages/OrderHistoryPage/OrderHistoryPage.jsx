import { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Header from "../../components/Header/Header";

export default class OrderHistoryPage extends Component {
    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                Previous Orders
            </div>
        )
    }
}