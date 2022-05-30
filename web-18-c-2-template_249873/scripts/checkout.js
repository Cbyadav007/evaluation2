document.querySelector("#confirm").addEventListener("click",checkFun);
var id;
function checkFun()
{
   id = setInterval(function(){
        alert("Your order is accepted");
    });

    setInterval(function(){
        alert("ff");
    },3000);
    clearInterval(id);

}