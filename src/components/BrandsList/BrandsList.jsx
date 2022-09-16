export default function BrandsList(props) {
    return (
        <div>
            <ul>
                {props.brandList.map(b => <li>{b}</li>)}
            </ul>
        </div>
    )
}