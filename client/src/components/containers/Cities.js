import React, { Component } from "react";
import axios from 'axios';

export default class Cities extends Component {
    state = {
        error: null,
        isLoaded: false,
        cities: []
    };

    componentDidMount() {
        axios.get("http://localhost:8080/cities/all").then(
            result => {
                this.setState({
                    isLoaded: true,
                    cities: result.data
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, cities } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {cities.map((city, index) => (
                        <li key={index}>
                            {city.name}: {city.country}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}