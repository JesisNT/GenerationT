let numbers = [5, 4, 1, 9, 2]



let max = numbers.reduce(function(a, b){
   return Math.max(a, b)

});


console.log(max)
// debería mostrar 9
