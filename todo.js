const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");
function add(){
    if ( inputBox.value ===''){
        alert(" Hey, disciplined one, writ your task !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listCont.appendChild(li); 
    }
}