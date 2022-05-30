// On clicking remove button the item should be removed from DOM as well as localstorage.
var buck = JSON.parse(localStorage.getItem("coffee"));
var total=0;
window.onload=showBucket(buck,total);

function showBucket(buck,total)
{
  
    console.log(buck.length);
    console.log("bucket=",buck);
    buck.forEach(function(el,index){

        let box=document.createElement("div");
        box.style.height="320px";
        box.style.width="250px";
        box.style.textAlign="center";
        box.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";

        let image=document.createElement("img");
        image.src=el.image;
        image.style.width="250px";
        image.style.height="200px";
        let name = document.createElement("p");
        name.innerText=el.name;
        let price = document.createElement("p");
        price.innerText=el.price;
        let remove = document.createElement("button");
        remove.innerText="Remove";
        remove.addEventListener("click",function(){
    
            removeFun(el,index);
        });

        box.append(image,name,price,remove);
        document.querySelector("#bucket").append(box);
      
     
        total = total + el.price;
     
        //  totalCount(total);

    });
    console.log(total);
    document.querySelector("h3").innerText=total;
   
}


function totalCount(total)
{
    console.log(total);
}
 function removeFun(el,index)
{ 
    buck.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(buck));
    

    window.location.reload();
}
   
    


