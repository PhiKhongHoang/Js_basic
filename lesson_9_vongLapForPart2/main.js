var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]


function getTotal(orders) {
    var ordersLength = orders.length;
    var sum = 0;
    for (var i = 0; i < ordersLength; i++) {
        sum += orders[i].price;
    }
    console.log(sum);
    return sum;
}


getTotal(orders) // Output: 8700000






