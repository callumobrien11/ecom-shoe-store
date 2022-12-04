import "./SearchBar.css"


export default function SearchBar(props) {
  return (
    <input
      placeholder="Search Shoes"
      className="m-auto search-bar d-flex justify-content-center search"
      style={{ width: 320, padding: 8, outline:"none", boxShadow:"none", borderColor:"black", borderRadius:"6px" }}
      onChange={(e) => {
        props.setActiveBrand(null)
        props.setSearchTerm(e.target.value);
      }}
    />
  );
}
