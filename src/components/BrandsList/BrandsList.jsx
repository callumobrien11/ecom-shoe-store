import Dropdown from "react-bootstrap/Dropdown";

export default function BrandsList(props) {
  return (
    <div>
      <ul>
        <Dropdown style={{paddingTop: 15}} className="d-flex justify-content-center">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Brands
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.brandList.map((b) => (
              <Dropdown.Item variant="danger" onClick={() => props.setActiveBrand(b)}>
                {b}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}
