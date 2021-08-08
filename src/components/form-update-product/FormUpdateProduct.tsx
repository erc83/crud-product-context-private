import { useEffect } from 'react'
import useInput from '../../hooks/useInput'
import styles from './FormUpdateProduct.module.css'
import { useHistory, Link } from 'react-router-dom'

interface FormProps {
    onSubmit: (product: any) => void;
    product: any,
}

const FormUpdateProduct = ({ onSubmit, product }: FormProps) => {
    const [name, setName, setNameValue] = useInput('')
    const [price, setPrice, setPriceValue] = useInput(`0`)
    const disabled = () => name === '' || price === ''
    const history = useHistory()

    useEffect(() => {
        setNameValue(product.name)
        setPriceValue(product.price)
    }, [product, setNameValue, setPriceValue])

    const validNumber = (p: string) => {
        if (p === '') return '';
        const n = Number.parseInt(p) * 1
        return n
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        onSubmit({
            id: product.id,
            name,
            price,
        })
        setNameValue('')
        setPriceValue('0')
        history.push("/products")
    }
    return (
        <div>
            <form onSubmit={handlerSubmit} className={styles.form}>
                <div className="card mt-4">
                    <div className={styles.cardHeader}>
                        Edit Product
                    </div>
                    <div className="card-body">
                        <label className={styles.label}>Name</label>
                        <input className="form-control" value={name} onChange={setName} />
                        <label className={styles.label}>Price</label>
                        <input className="form-control" min={0} type="number" value={validNumber(price)} onChange={setPrice} />
                    </div>
                    <div className={styles.cardFooter}>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm" disabled={disabled()}>
                                Save
                            </button>
                            <Link to="/" className="btn btn-secondary btn-sm">Go to products</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormUpdateProduct
