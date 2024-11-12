import Item from "./Item"

function ItemList({product}) {
return (
    <div className="container">
        {products.map( product => <Item key={product.id} product={product} />)}
    </div>
)
}


export default ItemList