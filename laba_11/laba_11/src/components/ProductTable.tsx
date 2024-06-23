import myStyle from '../style/ProductTableStyle.module.css'
import { Product } from "../resources/Types";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface PropsTypes {
    products: Product[],
    filterText: string,
    inStockOnly: boolean,
}

const ProductTable = ({products, filterText, inStockOnly}: PropsTypes) => {
      const rows: JSX.Element[] = [];
      let lastCategory: string | null = null;
  
      products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
        <table className={myStyle.ProductTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
  }

  export default ProductTable;