/* String Templates old version */


let product = "Pizza",
    price = 30,
    product2 = "Hamburguer",
    price2 = 40;

let html;

/*
html ="<ul>" +
        "<li>Order: " + product + "</li>" +
        "<li>Price: " + price + "</li>" +
        "<li>Order: " + product2 + "</li>" +
        "<li>Price: " + price2 + "</li>" +
        "<li>Total: " + (price + price2) + "</li>" +
        "</ul>";

document.getElementById('old').innerHTML = html;
console.log(html);
*/

/* Template Literals New Version */

html = `
    <ul>
        <li>Order: ${product}</li>
        <li>Price: ${price}</li>
        <li>Order: ${product2}</li>   
        <li>Price: ${price2}</li>
        <li>Total: ${total(price, price2)}</li> 
    </ul>
    `;

function total(price, price2) {
    return price + price2;
}

document.getElementById('new').innerHTML = html;

