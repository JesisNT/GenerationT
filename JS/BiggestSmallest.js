let nums = [1,2,33,4,5];

function biggest_smallest(numeros){
    var aux = numeros[0];
    var aux2 = numeros[0];
    let menorMayor = [];

    for (i = 0; i < nums.length; i++) {
        if(nums[i] > aux){
            aux = nums[i];
        }
    }
    menorMayor.unshift(aux);

    for (i = 0; i < nums.length; i++) {
        if(nums[i] < aux2){
            aux2 = nums[i];
        }
    }
    menorMayor.unshift(aux2);
    return menorMayor;
}
console.log(biggest_smallest(nums));