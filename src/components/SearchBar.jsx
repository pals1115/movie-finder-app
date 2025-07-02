const SearchBar = ({ query, setQuery, onSearch }) => (
    <div className="flex p-4">
      <input
        className="border p-2 w-full"
        type="text"
        value={query}
        placeholder="Search for a movie..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 ml-2" onClick={onSearch}>
        Search
      </button>
    </div>
  );
  
  export default SearchBar;
  