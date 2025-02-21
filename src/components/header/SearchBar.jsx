import { useState } from "react";
import { InputContainer, SearchContainer } from "styles/header/searchbar.style";
import { SearchIcons } from "components/common/SvgIcons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setQuery] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSearchByInput = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
      setQuery("");
    }
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
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
          placeholder={t(`header.inputSearch`)}
        />
        <span onClick={handleSearch}>
          <SearchIcons />
        </span>
      </SearchContainer>
    </InputContainer>
  );
};

export default SearchBar;
