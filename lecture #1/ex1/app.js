const rowsNodeList = document.querySelector("table tr");

const rowOne = document.querySelectorAll("table tr");
const thNodeList = rowsNodeList.querySelectorAll("th");

let name = "Price";

function App(name){
    let num;
    for(i=0; i < thNodeList.length; i++){
        if(thNodeList[i].innerText == name){
            num = i;
            break;
        }
    }
    for (i = 1; i < rowOne.length; i++) {
        console.log(rowOne[i].children[num].innerText);
    }
    
}
App(name);
