import Dropdown from "react-bootstrap/Dropdown";

export default function BrandsList(props) {
  return (
    <div>
      <ul>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Brands
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.brandList.map((b) => (
              <Dropdown.Item onClick={() => props.setActiveBrand(b)}>
                {b}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}
