import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'Pro1',
  createAt: new Date(1991, 1, 1),
  stock: 12
});

console.log(products);
