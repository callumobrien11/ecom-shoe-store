import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList(props) {
    return (
        <div>
            {props.productList.map(p => 
                <ProductListItem name={p.name} image={p.image[0]} price={p.price} />)}
        </div>
    )
}