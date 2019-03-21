var form;
var subTotal;
var shipping = 0;
var taxes = 0;
var total = 0;

window.onload = main;

function main()
{
    form = document.getElementById("productForm");
    form.onchange = formChanged;
    console.log("Main function complete.");
}

function formChanged(event)
{
    console.log(event);
    

    var products = document.getElementsByName("product");

    subTotal = 0;
    products.forEach(calcSubtotal);

    document.getElementById("sub-total").innerHTML = "£" + subTotal + ".00";
}

function calcSubtotal(product)
{
  var inputs = product.getElementsByTagName("input");
  var checkBox = inputs[0]; // Only works because add to cart is the first input tag under each product
  var qty = inputs[1];
  if (checkBox.checked)
  {
    subTotal += parseInt(product.dataset.price) * parseInt(qty.value);
  }
}
