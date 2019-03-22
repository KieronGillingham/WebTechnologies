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

    calcTotals();

    document.getElementById("sub-total").innerHTML = "£" + subTotal;
    document.getElementById("shipping").innerHTML = "£" + shipping;
    document.getElementById("taxes").innerHTML = "£" + taxes;
    document.getElementById("total").innerHTML = "£" + total;
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

function calcTotals()
{
  taxes = subTotal * 0.2;
  var netTotal = subTotal + taxes;

  if (netTotal >= 100)
  {
    shipping = 0;
  }
  else
  {
    shipping = 10;
  }

  total = netTotal + shipping;

}