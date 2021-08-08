import { useContext } from "react"
import FormCreateProduct from "../../components/form-create-product/FormCreateProduct"
import ContextProduct from "../../contexts/ContextProduct"

const CreateProduct = () => {
    const context = useContext(ContextProduct)
    

    return (
        <div className="row">
            <div className="col-12 col-sm-6 offset-sm-3">
                <FormCreateProduct onSubmit={context.addProduct} />
            </div>
        </div>
    
    )
}

export default CreateProduct
