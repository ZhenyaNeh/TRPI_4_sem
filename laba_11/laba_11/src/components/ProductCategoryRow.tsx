interface PropsTypes {
    category: string,
}

const ProductCategoryRow = ({ category }: PropsTypes) => {
    return (
        <tr>
            <th colSpan={2}>
                {category}
            </th>
        </tr>
    );
}

export default ProductCategoryRow;
