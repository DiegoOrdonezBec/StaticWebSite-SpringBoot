//Behaviors
$('#btnEat').click(btnEatClick);
$('#btnDrink').click(btnDrinkClick);

function btnEatClick() {
    $('#btnEat').addClass('menu-option-selected');
    $('#btnDrink').removeClass('menu-option-selected');
    $('#eat').removeClass('menu-hiden-product-container');
    $('#drink').addClass('menu-hiden-product-container');
}

function btnDrinkClick() {
    $('#btnEat').removeClass('menu-option-selected');
    $('#btnDrink').addClass('menu-option-selected');
    $('#eat').addClass('menu-hiden-product-container');
    $('#drink').removeClass('menu-hiden-product-container');
}