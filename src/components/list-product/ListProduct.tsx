import { useContext } from 'react'
import ContextProduct from '../../contexts/ContextProduct'
import { Link } from 'react-router-dom'

const ListProduct = () => {
    const context = useContext(ContextProduct)

    return (
        <div>
            {<div className="card mt-4">
                <div className="card-body">
                    {context.products.length > 0 ? (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {context.products.map((product: any) => (
                                    <tr key={`${product.id}`}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td className="text-end">
                                            <div className="btn-group">
                                                <Link
                                                    className="btn btn-primary btn-sm"
                                                    to={`/products/detail/${product.id}`}>
                                                    View</Link>
                                                <Link
                                                    className="btn btn-info btn-sm"
                                                    to={`/products/update/${product.id}`}>
                                                    Edit</Link>
                                                <Link
                                                    className="btn btn-sm btn-warning"
                                                    to={`/products/delete/${product.id}`}>
                                                    Remove</Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>) : (
                        <div className="alert alert-danger mt-4">
                            <div>Not Items</div>
                            <Link to="/products/create" className="btn btn-primary btn-sm">Create Item</Link>
                        </div>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default ListProduct
