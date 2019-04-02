import React from 'react';

const SearchBar=({placeholder, label, onEnter, onClick})=> {
  return (
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder={placeholder} aria-label={label} aria-describedby="button-addon2" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
        </div>
      </div>
  );
}

export default SearchBar;
