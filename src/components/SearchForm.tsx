import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  updateSearchTerm: (s: string) => void;
}

const SearchForm = ({ updateSearchTerm }: Props) => {
  const [search, setSearch] = useState("");
  const [inputType, setInputType] = useState("title");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    if (inputType === "title") {
      updateSearchTerm(search);
      setSearch("");
    }
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <div>
        <p
          className={inputType === "title" ? "selected" : ""}
          onClick={() => setInputType("title")}
        >
          Title
        </p>
        <p
          className={inputType === "ratingDate" ? "selected" : ""}
          onClick={() => setInputType("ratingDate")}
        >
          Rating or Release Date
        </p>
      </div>
      {inputType === "title" && (
        <div>
          <input
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button>Search</button>
        </div>
      )}
      {inputType === "ratingDate" && (
        <div>
          <select name="rating" id="rating">
            <option value="1">1 Star</option>
            <option value="2">2 Star</option>
            <option value="3">3 Star</option>
            <option value="4">4 Star</option>
            <option value="5">5 Star</option>
          </select>
          <input type="date" name="date" id="date" />
          <button>Search</button>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
