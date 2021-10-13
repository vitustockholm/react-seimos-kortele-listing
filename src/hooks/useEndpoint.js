// const variables = require('../pass');
// console.log(variables.consumer_key);
// //

//
// const AUTH = {
//   consumer_key: variables.consumer_key,
//   consumer_secret: variables.consumer_secret,

//
const useEndpoint = (discount_type) => {
  //authentification
  // const AUTH = {
  //   consumer_key: 'ck_7aeb09a5e5fc04e3fdf7201c2b70f071a985780e',
  //   consumer_secret: 'cs_ab3014e136f0050ceb8e71ed88d68a6ed5e13d61',
  // };
  //routeing -urling
  switch (discount_type) {
    case 'all-discounts':
      return {
        route:
          'https://seimos-kortele.lt/wp-json/wp/v2/nuolaidos_lengvatos?per_page=100',
      };

    case 'single-discount':
      return {
        route: 'https://seimos-kortele.lt/wp-json/wp/v2/nuolaidos_lengvatos/',
      };

    default:
      return { error: 'discount type doesnt exist' };
  }
};

export default useEndpoint;
