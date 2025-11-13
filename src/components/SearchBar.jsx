const SearchBar = ({ setSearchedMovies, setLoading, allMovies }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value.trim();
    console.log(search_text);

    if (!search_text) {
      setSearchedMovies(allMovies);
      return;
    }

    setLoading(true);

    fetch(
      `https://moviemaster-pro-server-rho.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchedMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <div className="md:pr-6 pr-0">
      <form
        onSubmit={handleSearch}
        className="flex items-center md:px-0 px-6  justify-center md:justify-end"
      >
        <label className="flex items-center gap-2 bg-white/10 border border-gray-400/30 rounded-l-xl px-4 py-2 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="search"
            placeholder="Search for a movie..."
            className="outline-none text-gray-700  md:w-56 w-45"
            onChange={(e) => {
              if (e.target.value.trim() === "") {
                setSearchedMovies(allMovies);
              }
            }}
          />
        </label>

        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l dark:focus:ring-purple-800 font-medium px-5 py-[9px] rounded-r-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
