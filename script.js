const AddOrReduceItemValue = 1;
const actualPhonePrice = getTextFieldValue('firstItem-price');
const actualCasePrice = getTextFieldValue('secondItem-price');
const actualSubtotalPrice = getTextFieldValue('subtotal-bill');
//First item events
 document.getElementById('firstItem-add-one').addEventListener('click',function(event)
 {
      const amountOfItem =  addOrRemoveCartItem('firstItem-itemAmount',AddOrReduceItemValue);
      updatedPrice('firstItem-price',actualPhonePrice,amountOfItem);

 })
 document.getElementById('firstItem-minus-one').addEventListener('click',function(event)
 {
    const amountOfItem = addOrRemoveCartItem('firstItem-itemAmount',-1*AddOrReduceItemValue);
    updatedPrice('firstItem-price',-1*actualPhonePrice,amountOfItem);  
 })

 //Second item events
 document.getElementById('secondItem-add-one').addEventListener('click',function(event)
 {
    const amountOfItem = addOrRemoveCartItem('secondItem-itemAmount',AddOrReduceItemValue);
     updatedPrice('secondItem-price',actualCasePrice,amountOfItem);
 })
 document.getElementById('secondItem-minus-one').addEventListener('click',function(event)
 {
    const amountOfItem = addOrRemoveCartItem('secondItem-itemAmount',-1*AddOrReduceItemValue);
    updatedPrice('secondItem-price',-1*actualCasePrice,amountOfItem);
 })


 document.getElementById('check-btn').addEventListener('click',function(event)
 {
     document.getElementById('main-cart').style.display = "none";
     document.getElementById('deliveryProduct').style.display = "block";
 })

 

 function getInputFieldValue(id)
 {
   const value = document.getElementById(id).value;
   const convertedFloatValue = parseFloat(value);
   return convertedFloatValue;
 }
 
 function getTextFieldValue(id)
 {
   const value = document.getElementById(id).innerText;
   const convertedFloatValue = parseFloat(value.split(',').join(''));;
   return convertedFloatValue;
 }

 function addOrRemoveCartItem(id,value)
 {
   var currentValueFloat = getInputFieldValue(id)
   currentValueFloat = currentValueFloat + value;
   if(currentValueFloat<=0)
   {
      currentValueFloat = 0;
   }

   document.getElementById(id).value = currentValueFloat;   
   return currentValueFloat;   
 }

//First and second item balance update
function updatedPrice(id,price,numberOfItems)
{
    if((numberOfItems> 0) && isFinite(numberOfItems))
    {
        var updatedPrice = getTextFieldValue(id) + price; 
        document.getElementById(id).innerText = updatedPrice;
        console.log(updatedPrice);
     
        var subtotalPrice = getTextFieldValue('subtotal-bill') +  price;
        document.getElementById('subtotal-bill').innerText = subtotalPrice;
        console.log('Subtotal '+subtotalPrice);
     
        var tax = subtotalPrice * 0.1
        document.getElementById('tax').innerText = tax;
     
        var newTotal = subtotalPrice + tax;
        document.getElementById('total-bill').innerText = newTotal;
    }

}

 
