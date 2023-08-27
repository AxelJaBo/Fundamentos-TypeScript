(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password);
  }
  // login('nico@nico.co', '12121212');
  login({
    email: 'nico@nico.co',
    password: '12121212'
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pro1',
    createAt: new Date(1991, 1, 1),
    stock: 12
  });
  console.log(products);
})();
