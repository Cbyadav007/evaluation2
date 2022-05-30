document.querySelector("#confirm").addEventListener("click",checkFun);
var count=0;
function checkFun()
{
    alert("Your order is accepted");
   setTimeout(function(){
        alert("Your order is being Prepared");
       
    },3000);

    setTimeout(function(){
        alert("Your order is being Packed");
        
    },11000);
    setTimeout(function(){
        alert("Your order is out for delivery");
       
    },21000);

    setTimeout(function(){
        alert("Order delivered");
        
    },32000);
    


}