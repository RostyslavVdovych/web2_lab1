//3. Написати функцію, яка порахує факторіал натурального числа
function factorial(n)
{
    if(n == 1){
    return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

let result = factorial(10);
console.log(result);