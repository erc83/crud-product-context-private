import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FormUpdateProduct from "../../components/form-update-product/FormUpdateProduct"
import ContextProduct from "../../contexts/ContextProduct"

const UpdateProduct = () => {
    const { id }: { id: string } = useParams()
    const [product, setProduct]: any = useState({})
    const context = useContext(ContextProduct)

    useEffect(() => {
        const p: any = context.getProduct(Number.parseInt(id))
        setProduct(p)
    }, [context, id])

    return product.id ? (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                <FormUpdateProduct onSubmit={context.updateProduct} product={product} />
            </div>
        </div>
    ) : (<span />)
}

export default UpdateProduct
