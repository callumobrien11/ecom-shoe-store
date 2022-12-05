import { Row } from "react-bootstrap";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList(props) {
    let products = props.productList.filter(item => item.brand.name === props.activeBrand)
    
    return (
        <Row md={2} xs={1} lg={4} className="g-3 d-flex justify-content-center">
            {props.activeBrand ? products.map(p => 
               <ProductListItem setFavorite={props.setFavorite} favorite={props.favorite} name={p.name} image={p.image} price={p.price} id={p._id} />)
                : 
                props.productList.filter((val) => {
                    if (props.searchTerm === "") {
                        return val
                    } else if (val.name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
                        console.log("val.name", val.name)
                        return val
                    } 
                }).map((val) => {
                    return <ProductListItem setFavorite={props.setFavorite} favorite={props.favorite} name={val.name} image={val.image} price={val.price} id={val._id} />
                })
            } 

        </Row>
    )
}