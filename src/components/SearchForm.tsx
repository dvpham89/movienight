import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  updateSearchTerm: (s: string) => void;
  updateSearchRating: (s: string) => void;
  updateSearchDate: (s: string) => void;
}

const SearchForm = ({
  updateSearchTerm,
  updateSearchDate,
  updateSearchRating,
}: Props) => {
  const [search, setSearch] = useState("");
  const [inputType, setInputType] = useState("title");
  const [searchRating, setSearchRating] = useState("2");
  const [searchDate, setSearchDate] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    if (inputType === "title") {
      updateSearchTerm(search);
      setSearch("");
    } else if (inputType === "ratingDate") {
      updateSearchRating(searchRating);
      updateSearchDate(searchDate);
      setSearchRating("");
      setSearchDate("");
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
          Rating and Date
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
          <select
            name="rating"
            id="rating"
            onChange={(e) => setSearchRating(e.target.value)}
            value={searchRating}
          >
            <option value="2">1 Star</option>
            <option value="4">2 Star</option>
            <option value="6">3 Star</option>
            <option value="8">4 Star</option>
            <option value="9.5">5 Star</option>
          </select>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setSearchDate(e.target.value)}
            value={searchDate}
          />
          <button>Search</button>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
