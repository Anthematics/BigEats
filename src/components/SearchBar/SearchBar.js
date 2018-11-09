import React from 'react'
import './SearchBar.css'

const sortByOptions= {
    'Best Match': 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

class Searchbar extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                term: '',
                location: '',
                sortBy: 'best_match'
            }

        }
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>
        })
    }
    render() {
        return(
        <div className="SearchBar">
    <div className="SearchBar-sort-options">
        <ul>
        {this.renderSortByOptions()}
        </ul>
    </div>
    <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
    </div>
    <div className="SearchBar-submit">
        <a>Let's Go</a>
    </div>
    </div>
        );}
}

export default Searchbar;

// Line 14 might not be this.sortByOptionValue (maybe remove this)