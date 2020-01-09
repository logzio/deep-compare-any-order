<p align="center">
  <a href="http://logz.io">
    <img height="150px" src="https://logz.io/wp-content/uploads/2017/06/new-logzio-logo.png">
  </a>
</p>


# deep compare object without array order

## Usage

```javascript
const { objectDeepContains, collectionDeepContains, objectDeepCompare } =  require('deep-compare-any-order');

  const A = { b: { b1: null, b2: 2 }, c: [1, 2, 3] };
  const B = { b: { b1: null, b2: 2 }, c: [3, 2, 1] };
  objectDeepCompare(A, B) === true;


  const A = { a: 1, b: { b1: null, b2: 2 }, c: [1, 2, 3] };
  const B = { b: { b1: null, b2: 2 , c: [2, 1, 3] } };
  objectDeepContains(A, B) === true;



  const B = [1, 2, 3];
  const A = [4, 5, 6];
  collectionDeepContains(B, A) === true;

```
