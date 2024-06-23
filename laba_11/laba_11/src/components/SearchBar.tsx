import { ChangeEvent } from "react";

interface PropsTypes {
    filterText: string,
    inStockOnly: boolean,
    onFilterTextChange: (filterText: string) => void,
    onInStockChange: (inStockOnly: boolean) => void,
}

const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockChange }: PropsTypes) => {

    const handleFilterTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onFilterTextChange(e.target.value);
    }

    const handleInStockChange = (e: ChangeEvent<HTMLInputElement>): void => {
        onInStockChange(e.target.checked);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={handleInStockChange}
                />
                {' '}
                Only show products in stock
            </p>
        </form>
    );
}

export default SearchBar;