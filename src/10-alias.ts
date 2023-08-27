(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  // Literal types
  type sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 's';

  function greeting(userId: UserID, size: sizes){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(1111, 'S');
  greeting('1111', 'XL');

})();
