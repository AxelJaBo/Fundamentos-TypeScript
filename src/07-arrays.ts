(() => {
  let prices = [1,2,2,1,1,212, 'hola', true];
  // prices.push('asasa');
  // prices.push(true);
  // prices.push({});
  prices.push(30984);
  prices = [1,2,2];
  let products = ['hola', true];
  // products.push(12);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,2,1,1, 212];
  numbers.map(item => item * 2);
})();
