import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ productos }) => {
    return (

        <div class="container mt-2 mb-4 home__images">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {productos.map(prod => <Item key={prod.id} producto={prod} />)}
            </div>
        </div>

    )
}

export default ItemList