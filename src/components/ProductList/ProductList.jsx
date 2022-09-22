import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList(props) {
    return (
        <div>
            {props.productList.map(p => 
                <ProductListItem name={p.name} image={p.image} price={p.price} id={p._id} />)}
        </div>
    )
}