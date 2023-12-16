const isValidIPv4 = (input) => {
    const octest= input.split('.')
    if(octest.length !== 4){
        return false
    }
    return octest.every((octet)=>{
        const num =parseInt(octet)
        return num >=0 && num <= 255 && octet == num.toString();
    })


    
};

module.exports = isValidIPv4;
