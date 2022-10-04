
export default function SearchBar(props) {
  return (
    <input
      placeholder="Search Shoes"
      className="m-auto search-bar"
      style={{ width: 380 }}
      onChange={(e) => {
        props.setActiveBrand(null)
        props.setSearchTerm(e.target.value);
      }}
    />
  );
}
