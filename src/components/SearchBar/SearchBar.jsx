
export default function SearchBar(props) {
  return (
    <input
      placeholder="Search Shoes"
      className="m-auto search-bar d-flex justify-content-center"
      style={{ width: 380, padding: 8 }}
      onChange={(e) => {
        props.setActiveBrand(null)
        props.setSearchTerm(e.target.value);
      }}
    />
  );
}
