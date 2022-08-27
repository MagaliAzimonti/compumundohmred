import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {

    return (
        <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col m-3">
                <div className="Cards card shadow h-100">
                    <img src={producto.img} className="card-img-top" alt={producto.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.name}</h5>
                        <p className="card-text">{producto.price}</p>
                        <p className="card-text">{producto.stock}</p>
                        <div class="card-footer">
                        <Link to={`/detail/${producto.id}`} class="btn btn-primary">Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Item 