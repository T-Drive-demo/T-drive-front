import { useState } from "react";
import { InputContainer, SearchContainer } from "styles/header/searchbar.style";
import { SearchIcons } from "components/common/SvgIcons";

const SearchBar = () => {
  const [searchQuery, setQuery] = useState("");

  const handleSearchByInput = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      console.log(searchQuery + "로 검색시작 - 구현예정");
      setQuery("");
    }
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      console.log(searchQuery + "로 검색시작 - 구현예정");
      setQuery("");
    }
  };

  return (
    <InputContainer>
      <SearchContainer>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleSearchByInput}
          placeholder="Search in Drive"
        />
        <span onClick={handleSearch}>
          <SearchIcons />
        </span>
      </SearchContainer>
    </InputContainer>
  );
};

export default SearchBar;
