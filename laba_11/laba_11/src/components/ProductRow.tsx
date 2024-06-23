import { Product } from "../resources/Types";

interface PropsTypes {
    product: Product,
}

const ProductRow = ({ product }: PropsTypes) => {
    const name = product.stocked ?
        product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;