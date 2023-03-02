import React from "react";

function Search({searchTransaction}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchTransaction}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
