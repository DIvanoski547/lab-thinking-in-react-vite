
import React, { useState } from "react";

function SearchBar({handleFilter}) {
    const [searchTerm, setSearchterm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchterm(value);
        handleFilter(value);
    }

  return (
    <div>
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
    </div>
  );
}

export default SearchBar;
