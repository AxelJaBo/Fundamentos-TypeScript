(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aas';

  // function hi(name: string | null){
  //   let hello = 'Hola ';
  //   if(name){
  //     hello += name;
  //   }else {
  //     hello += 'nobody';
  //   }
  //   console.log(hello);
  // }

  function hiv2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hiv2('Nicolas');
  hiv2(null);
})();
