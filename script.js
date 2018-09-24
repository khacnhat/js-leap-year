var year = parseInt(prompt('Enter a year'));

var isDivisibleBy4 = year % 4 === 0;
if(isDivisibleBy4){
    var isDivisibleBy100 = year % 100 === 0;
    if(isDivisibleBy100){
        var isDivisibleBy400 = year % 400 === 0;
        if(isDivisibleBy400){
            alert(year + ' is a leap year');
        }else {
            alert(year + ' is NOT a leap year.');
        }
    } else {
        alert(year + ' is a leap year');
    }
} else {
    alert(year + ' is NOT a leap year.');
}