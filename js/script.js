//Declaring the local var
let price             // price of the ticket
let km;                 // user's kilometers
let age;                // user's age
let ticketPrice;        // Price of the ticket

//Asking the input values
km = parseInt(prompt("Quanti chilometri vuoi percorrere?")); 
age = parseInt(prompt("Quanti anni hai"));

//Calculating 0.21€ per kilometer and floor the price by 2 decimals
price = km * 0.21;

//Checking the age user, and in case, apply the discount 
if(age < 18)                    //under 18
  price = (price * 20) / 100;

if(age > 65)                    //over 65
  price = (price * 40) / 100;  

//Floor the price  by 2 decimals(but it change the type of price(number => String))
price = price.toFixed(2);

//Print the final price
console.log(price + '€');             
  


