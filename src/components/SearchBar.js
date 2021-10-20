import React from "react";
// Styling

const SearchBar = (props) => {
  const checkLength = (string) => {
    if (string.length >= 2) props.setQuery(string);
    else props.setQuery("");
  };

  return (
    <div className="searchBar">
      <input
        onChange={(event) => checkLength(event.target.value)} //Cu
        placeholder="Search for a jam3ya"
      />
    </div>
  );
};
export default SearchBar;
