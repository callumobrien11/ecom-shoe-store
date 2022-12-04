import Dropdown from "react-bootstrap/Dropdown";
import "./BrandsList.css"

export default function BrandsList(props) {
  return (
    <div>
      <ul>
        <Dropdown style={{paddingTop: "18px", outline:"none", boxShadow:"none", borderRadius:"6px" }} className="d-flex justify-content-center">
          <Dropdown.Toggle variant="danger" id="dropdown-basic" style={{paddingTop: "10px", paddingBottom:"10px"}}>
            Brands
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.brandList.map((b) => (
              <Dropdown.Item style={{backgroundColor:'white', color:"black"}} onClick={() => props.setActiveBrand(b)}>
                {b}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </ul>
    </div>
  );
}
