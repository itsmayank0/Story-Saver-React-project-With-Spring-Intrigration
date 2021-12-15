import { useState } from "react";
import SearchBar from "material-ui-search-bar";
import CloseIcon from '@mui/icons-material/Close';

import "./Search.css";

export default function Search() {
  const [results, setResults] = useState();

  return (
    <div className="searchArea">
      <SearchBar
        className="search"
        value={results}
        onChange={(value) => setResults(value)}
        placeholder="Search..."
        closeIcon={
          <button className="closeIcon" onClick={() => setResults("")}>
            <CloseIcon/>
          </button>
        }
      />
    </div>
  );
}
