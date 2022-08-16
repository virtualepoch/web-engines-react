import "../search-bar/search-bar.css";

export default function SearchBar() {
  return (
    <form className="search-bar-container">
      <input type={"text"} className="search-bar-input" placeholder="Search our site..." aria-label="search" />
      <button className="search-btn search-bar-submit-btn" aria-label="submit-search"></button>
    </form>
  );
}
