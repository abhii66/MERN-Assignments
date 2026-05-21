//function def
function biggest(num1,num2,num3){
    // Nested ternary to evaluate the maximum value
    let big=(num1>num2)? (num1>num3? num1:num3) : (num2>num3? num2:num3)
    return big
}
// Execute function and store the result
let result=biggest(10,30,20)
console.log(`${res} is biggest number.`)
