import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Cities extends Component {
    state = {
        cities: []
    }
    render() {
        const { cities } = this.state;
        const citiesList = cities.length ? (
            cities.map(city => {
                return (
                    <div className="card-content" key={city.id}>
                        <Link to={'/cities' + city.id}><h3>{city.name}</h3></Link>
                    </div>
                )
            })
        ) : (
                <div className="center">
                    Loading...
            </div>
            )
        return (
            <div className="container cities-container">
                {citiesList}
            </div>
        )
    }
}

export default Cities;