import { Component } from "react";
import Header from "../../components/Header/Header";

export default class CommunityPage extends Component {
    render() {
        return (
            <div>
                <Header setUserInState={this.props.setUserInState} />
                Community Page
            </div>
        )
    }
}