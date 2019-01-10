
let start = Date.now();
console.log('===============>start', Date.now() );
const a = function() {
  setTimeout(() => {
    console.log('===============>1', Date.now() - start);
  }, 1000)
}


const c = function() {
  setTimeout(() => {
    console.log('===============>3', Date.now() - start);
  }, 3000)
}


const b = function() {
  setTimeout(() => {
    console.log('===============>5', Date.now() - start);
  }, 5000)
}

a();
b();
c();
console.log('===============>end stack', Date.now());