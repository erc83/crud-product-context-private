import { useState, useContext, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import ContextProduct from "../../contexts/ContextProduct"

const DeleteProduct = () => {
    const { id }: { id: string } = useParams()
    const [product, setProduct]: any = useState({})
    const context = useContext(ContextProduct)
    const history = useHistory()

    useEffect(() => {
        const p: any = context.getProduct(Number.parseInt(id))
        setProduct(p)
    }, [context, id])

    const handlerRemove = () => {
        context.delProduct(Number.parseInt(id))
        history.push("/products")
    }

    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                {product ? (
                    <div className="card mt-4">
                        <div className="card-header">Confirm delete {product.name} ({product.id})?</div>
                        <div className="card-body">
                            price: {product.price}
                        </div>
                        <div className="card-footer">
                            <div className="btn-group">
                                <button className="btn btn-danger btn-sm" onClick={handlerRemove}>Yes</button>
                                <Link to="/products" className="btn btn-primary btn-sm">No</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="alert alert-danger mt-4">
                        <div>Product not found</div>
                        <Link to="/products" className="btn btn-danger btn-sm">Go to Products</Link>
                    </div>
                )}
            </div>s
        </div>
    )
}

export default DeleteProduct
