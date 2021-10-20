import React from "react";
// Styling


const SearchBar = (props) => {

  const checkLength = (string) => {
    if (string.length >= 2)
      props.setQuery(string)
    else props.setQuery("")
  }

  return (
    <input className="searchBar"
      onChange={(event) => checkLength(event.target.value)} //Cu
      placeholder="Search for a jam3ya"
    />
  );
};
export default SearchBar;