import React, { Component } from 'react';


class SearchBar  extends Component {
  render() {
    return (

      <div className="SearchBar">
        <form method="get" action="/search" id="search">
          <input name="q" type="text" size="40" placeholder="Search Artists..." />
        </form>
      </div>

    )
  }
}
export default SearchBar;
