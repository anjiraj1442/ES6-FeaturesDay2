// variable declared using let
let name = 'Anjiraj';
{
    // can be accessed only inside
    let name = 'rama';

    console.log(name); // rama
}
console.log(name); // Anjiraj


// const

// name declared with const cannot be changed
const name = 'Anjiraj';
