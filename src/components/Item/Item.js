import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

    return (
        <div class="col">
            <div className="productos card shadow h-100">
                <img src={producto.img} className="producto-image card-img-top" alt={producto.name} />
                <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <p className="card-text">${producto.price}</p>

                </div>
                <div class="card-footer">
                    <Link to={`/detail/${producto.id}`} class="btn btn-dark">Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item 