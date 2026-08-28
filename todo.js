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
        let span = document.craeteElement("span");
        span.innerHtml = "\u00d7;
            li.appendChild(span);
    }
    inputBox.value="";
}
