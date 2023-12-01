function calculator(a,b,op) {
    let result=0;
    switch (op) {
        case '+':
            result= a+b;
            break;
        case '-':
            result=a-b;
            break;
        case '*':
            result= a*b;
            break;
        case '/':
            result=a/b;
            break;
        

    
        default:
            break;
    }
}

module.exports = calculator;
