import React from "react";
import './style.css';

export default class Contact extends React.Component {

    render() {
        return (
            <div>
                Contact
            </div>
        )
    }

    componentDidMount() {
        document.title = 'Contact'
    }
}