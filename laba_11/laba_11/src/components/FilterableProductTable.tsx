import { useState } from "react";
import { Product } from "../resources/Types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

interface PropsTypes {
    products: Product[]
}

const FilterableProductTable = ({ products }: PropsTypes) => {
    const [filterText, setFilterText] = useState<string>('');
    const [inStockOnly, setInStockOnly] = useState<boolean>(false);

    const handleFilterTextChange = (filterText: string): void => {
        setFilterText(filterText);
    }

    const handleInStockChange = (inStockOnly: boolean): void => {
        setInStockOnly(inStockOnly);
    }

    return (
        <div className="mainDiv">
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable;