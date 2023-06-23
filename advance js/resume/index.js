function addNewfild(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("work");
    newNode.setAttribute("row",3);



    let weob = document.getElementById('we');
    let weaddbtn= document.getElementById('workadd');
    weob.insertBefore(newNode,weaddbtn);
} 