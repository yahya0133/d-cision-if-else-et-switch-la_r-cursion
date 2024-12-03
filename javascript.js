function bissextile(n) {
    if (n % 400 === 0) {
        return "année bissextile";
    }
    else if (n % 100 === 0) {
        return "année non bissextile";
    }
    else if (n % 4 === 0) {
        return "année bissextile";
    }
    return "année non bissextile";
}
console.log(bissextile(2025));




function Ticket_Pricing(n) {
    switch(n>0) {
    case n<=12:
    return ("Enfants votr porix : 10 $")
    break;
    case (n>=13 && n<=17):
    return ("Enfants votr porix : 15 $")
    break;
    case (n>=18):
    return ("Enfants votr porix : 20 $")
    break;
    default:
    return ("entre age >0")
}
}
console.log(Ticket_Pricing(12));





function  température(deg) {
    if(deg<=0){
        return ("plus grand vêtements")
    }
    else if(deg>0 && deg<=15){
        return("moyenne vêtements")
    }
    else if(deg>=16){
        return("vêtements")
    }
}
console.log( température(-1));



function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log( fibonacci(8));




function isPalindrome(str) {
    str = str.toLowerCase();
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log( isPalindrome("AzAzA"));





function puis(n, p) {
    if (p === 0) return 1;
    if (p === 1) return n;
    if (p < 0) {
        return 1 / puis(n, -p);
    }
    return n * puis(n, p - 1);
}
console.log( puis(5,2));