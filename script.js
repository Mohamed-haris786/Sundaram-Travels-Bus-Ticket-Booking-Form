function fun()
{
var name = document.getElementById("name").value
var route = document.getElementById("route").value
var seat = document.getElementById("seat").value
var type = document.getElementById("type").value
var tickets = document.getElementById("tickets").value
let price = 0;
    if(tickets>0){
        if(seat ==="Regular Seat(₹ 500)"){
            price = 500;
        }
        else if(seat ==="Primium Seat(+₹ 200)"){
            price = 700;
        }
        else if(seat ==="VIP Seat(+₹ 500)"){
            price = 1000;
        }
    }
    if(type ==="AC (+₹100)"){
        price+=100;
    }
let total=price*tickets;
document.getElementById("one").innerHTML = name;
document.getElementById("two").innerHTML = route;
document.getElementById("three").innerHTML = "₹"+total;
}
