//
//-TASK_1
//
class ProductInfo {
    number: string;
    size: number;
    color: string;
    price: number;

    constructor(number: string, size: number, color: string, price: number) {
        this.number = number;
        this.size = size;
        this.color = color;
        this.price = price;
    }
}

interface ProductCategory {
    [productName: string]: ProductInfo[];
}

interface Products {
    [category: string]: ProductCategory;
}

let products: Products = {};

products['Shoes'] = {};
products['Trousers'] = {};
products['Jackets'] = {};

products['Shoes']['Boots'] = [];
products['Shoes']['Sneakers'] = [];
products['Shoes']['Sandals'] = [];

products['Trousers']['Joggers'] = [];
products['Trousers']['Jeans'] = [];
products['Trousers']['Cargo'] = [];

products['Jackets']['Waxed'] = [];
products['Jackets']['Windbreakers'] = [];
products['Jackets']['Bombers'] = [];

products['Shoes']['Boots'].push(new ProductInfo('001', 42, 'black', 500));
products['Shoes']['Sneakers'].push(new ProductInfo('002', 39, 'red', 300));
products['Shoes']['Sandals'].push(new ProductInfo('003', 37, 'white', 250));

products['Trousers']['Joggers'].push(new ProductInfo('101', 32, 'grey', 500));
products['Trousers']['Jeans'].push(new ProductInfo('102', 30, 'blue', 400));
products['Trousers']['Cargo'].push(new ProductInfo('103', 34, 'green', 250));

products['Jackets']['Waxed'].push(new ProductInfo('201', 33, 'grey', 600));
products['Jackets']['Windbreakers'].push(new ProductInfo('202', 35, 'black', 500));
products['Jackets']['Bombers'].push(new ProductInfo('203', 41, 'brown', 700));
products['Jackets']['Bombers'].push(new ProductInfo('203', 42, 'black', 700));
//
//-TASK_2
//

class ProductsIterator implements IterableIterator<ProductInfo> {
    private iii: number = 0;
    private jjj: number = 0;
    private ccc: number = 0;

    constructor(private productsData: Products) {
    }

    next(): IteratorResult<ProductInfo> {

        let cccMemory = 0;
        let jjjMemory = 0;
        let iiiMemory = 0;

        for (let el in this.productsData) {
            iiiMemory++;
        }

        if(this.iii >= iiiMemory){
            return{value: undefined, done: true }
        }

        for (let el in this.productsData[Object.keys(this.productsData)[this.iii]]) {
            jjjMemory++;
        }

        cccMemory = this.productsData[Object.keys(this.productsData)[this.iii]][Object.keys(this.productsData[Object.keys(this.productsData)[this.iii]])[this.jjj]].length;

        if(this.iii < iiiMemory && this.jjj < jjjMemory && this.ccc < cccMemory){
            const product = this.productsData[Object.keys(this.productsData)[this.iii]][Object.keys(this.productsData[Object.keys(this.productsData)[this.iii]])[this.jjj]][this.ccc];
            this.ccc++;
            if(this.ccc >= cccMemory){
                this.ccc = 0;
                this.jjj++;
            }

            if(this.jjj >= jjjMemory){
                this.jjj = 0;
                this.iii++;
            }

            // if(this.iii >= iiiMemory){
            //     return { value: product, done: false };
            // }

            return { value: product, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }

    [Symbol.iterator](): IterableIterator<ProductInfo> {
        return this;
    }
}

const iter = new ProductsIterator(products);

console.log("Iterator....\n");
for(const it of iter){
    console.log(it);
}
console.log("\nEnd....\n");

function filterFunc(minPrice: number, maxPrice: number, targetSize: number, targetColor: string): void {
    console.log(`Product filter: `)
    for (let elementCategory in products) {
        for (let element in products[elementCategory]) {
            for (let i = 0; i < products[elementCategory][element].length; i++) {
                let product = products[elementCategory][element][i];

                if(product.price >= minPrice && product.price <= maxPrice &&
                    product.size === targetSize &&
                    product.color === targetColor){
                        console.log(element + " " + product.number);
                }
            }
        }
    }
}


//itarationFunc(products);
//
//-TASK_3
//
function filter(prod: string, minPrice: number, maxPrice: number, targetSize: number, targetColor: string): void {
    console.log(`Product filter: `)
    for (let category in products[prod]) {
        for (let i = 0; i < products[prod][category].length; i++) {
            let product = products[prod][category][i];

            if (product.price >= minPrice && product.price <= maxPrice &&
                product.size === targetSize &&
                product.color === targetColor) {
                console.log(product.number)
            }
        }
    }
}

filterFunc(100, 1000, 42, 'black');
console.log();
//
//-TASK_4-5
//
class NewProductInfo {
    number: string;
    size: number;
    color: string;
    price: number;
    discount: number;
    resultPrice: number;

    constructor(number: string, size: number, color: string, price: number, discount: number) {
        this.number = number;
        this.size = size;
        this.color = color;
        this.price = price;
        this.discount = discount;
        this.resultPrice = price - (discount / 100 * price);
    }

    get ResultPrice():number{
        return this.resultPrice;
    }

    set ResultPrice(value: number){
        this.resultPrice = value;
    }
}

interface NewProductCategory {
    [productName: string]: NewProductInfo[];
}

interface NewProducts {
    [category: string]: NewProductCategory;
}

let newProducts: NewProducts = {};

newProducts['Shoes'] = {};
newProducts['Trousers'] = {};
newProducts['Jackets'] = {};

newProducts['Shoes']['Boots'] = [];
newProducts['Shoes']['Sneakers'] = [];
newProducts['Shoes']['Sandals'] = [];

newProducts['Trousers']['Joggers'] = [];
newProducts['Trousers']['Jeans'] = [];
newProducts['Trousers']['Cargo'] = [];

newProducts['Jackets']['Waxed'] = [];
newProducts['Jackets']['Windbreakers'] = [];
newProducts['Jackets']['Bombers'] = [];

newProducts['Shoes']['Boots'].push(new NewProductInfo('001', 42, 'black', 500, 20));
newProducts['Shoes']['Sneakers'].push(new NewProductInfo('002', 39, 'red', 300, 10));
newProducts['Shoes']['Sandals'].push(new NewProductInfo('003', 37, 'white', 250, 15));

newProducts['Trousers']['Joggers'].push(new NewProductInfo('001', 32, 'grey', 500, 15));
newProducts['Trousers']['Jeans'].push(new NewProductInfo('002', 30, 'blue', 400, 30));
newProducts['Trousers']['Cargo'].push(new NewProductInfo('003', 34, 'green', 250, 20));

newProducts['Jackets']['Waxed'].push(new NewProductInfo('001', 33, 'grey', 600, 30));
newProducts['Jackets']['Windbreakers'].push(new NewProductInfo('002', 35, 'black', 500, 25));
newProducts['Jackets']['Bombers'].push(new NewProductInfo('003', 41, 'brown', 700, 25));


function newItarationFunc(prod: NewProducts): void {
    for (let elementCategory in prod) {
        for (let element in prod[elementCategory]) {
            for (let i = 0; i < prod[elementCategory][element].length; i++) {
                let product = prod[elementCategory][element][i];

                console.log(elementCategory)
                console.log(element)
                console.log(product)
                console.log()
            }
        }
    }
}

//newItarationFunc(newProducts);