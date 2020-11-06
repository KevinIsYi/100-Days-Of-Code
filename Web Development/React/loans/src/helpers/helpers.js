export const calculateTotal = (quantity, term) => {

    quantity = parseInt(quantity);
    term = parseInt(term);

    let total, totalTerm = 0;

    if (quantity > 10000) {
        total = quantity * 0.10;
    }
    else if (quantity > 5000) {
        total = quantity * 0.15;
    }
    else if (quantity > 1000) {
        total = quantity * 0.20;
    }
    else {
        total = quantity * 0.25;
    }

    switch(term) {
        case 3:
            totalTerm = quantity * 0.05;
            break;
        case 6:
            totalTerm = quantity * 0.10;
            break;
        case 12:
            totalTerm = quantity * 0.15;
            break;
        case 24:
            totalTerm = quantity * 0.20;
            break;   
    }

    return totalTerm + total + quantity;
}