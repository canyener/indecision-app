console.log('utils.js is running')

const square = x => x * x

const add = (a, b) => a + b
//Alternative way
// export add = (a, b) => a + b

//exports - default export - named exports
export {
  square,
  add
}