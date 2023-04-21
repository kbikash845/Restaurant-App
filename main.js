var item=document.getElementById("item");
var costprice=document.getElementById("costprice");

var dish=document.getElementById("dish")

var choosetable=document.getElementById("choosetable");
var table1=document.getElementById("user1")
var table2=document.getElementById("user2")
var table3=document.getElementById("user3")

item.addEventListener("submit",additem);

function additem(e){
    e.preventDefault();
    const li=document.createElement("li");
    const deletebtn=document.createElement("input");
    deletebtn.type="button";
    deletebtn.value="delete"
   
   
    
    // deletebtn.="Delet
    // const dlt=document.createElement("button");
     
    li.appendChild(document.createTextNode(`${costprice.value} : ${dish.value} : ${choosetable.value}  `));

    
    table1.appendChild(li);
    li.appendChild(deletebtn);
    table1.appendChild(li)


    /// delate button
    deletebtn.onclick=(e)=>{
     table1.removeChild(li)
    }

    
    
    costprice.value='';
    dish.value='';
    choosetable.value=''
}



console.log()