import add from './add'
console.log(add(4, 5));


import('./subtract').then(({ default: substract }) => {
    console.log(substract(10, 5))
})



