// Add the coffee to local storage with key "coffee"
window.onload=getCoffee();
async function getCoffee()
{
    try{
        let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
        let res= await fetch(url);
        let data = await res.json();
        console.log(data.menu.data);
        append(data.menu.data);
    }
    catch(error)
    {
        console.log("Error");
    }
}

function append(data)
{
    
    data.forEach(function(ele,index)
    {
        var box=document.createElement("div");
        box.style.height="320px";
        box.style.width="250px";
        box.style.textAlign="center";
        box.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
        var image = document.createElement("img");
        image.src=ele.image;
        image.style.width="250px";
        image.style.height="200px";
        var name = document.createElement("p");
        name.innerText=ele.title;
        var price = document.createElement("p");
        price.innerText=ele.price;
        var add = document.createElement("button");
        add.innerText="Add to Bucket";
        add.setAttribute("id","add_to_bucket");

        add.addEventListener("click" , function(){
            addFun(ele,index);
        });
       

        box.append(image,name,price,add);

        document.querySelector("#menu").append(box);
    });
}


function addFun(ele,index)
{
    var arrObj=JSON.parse(localStorage.getItem("coffee")) || [];
    var obj={};
    obj.image=ele.image,
    obj.name=ele.title,
    obj.price=ele.price,
    arrObj.push(obj);
    
    localStorage.setItem("coffee",JSON.stringify(arrObj));
}


var count=JSON.parse(localStorage.getItem("coffee"));
console.log("count=",count.length);
document.querySelector("#coffee_count").innerText=count.length;



