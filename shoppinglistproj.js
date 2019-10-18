
function addOn() {
   var itemlist = document.getElementsByTagName('li').length;
   if(document.getElementsByTagName('li').length >6){
     var fulllist = document.getElementById("full").innerHTML = "LIST IS FULL!";

   }
   else{
    var itemlist = document.createElement("li");
    var additem = document.createTextNode(document.getElementById('enterstuff').value);
    itemlist.appendChild(additem);
    var position = document.getElementsByTagName("ol")[0];
    position.appendChild(itemlist);
    document.getElementById("enterstuff").value ="";

    
   
   }
   
}
function removeItem() {
  if(document.getElementsByTagName('li').length < 9) {
    var fulllist = document.getElementById("full").innerHTML = "";
    var removeby = document.getElementById("removeby").value;
    var child = document.getElementsByTagName('li')[removeby -1];
    var parent = child.parentNode;
    parent.removeChild(child);
    document.getElementById("removeby").value ="";

  }
  else {
    var removeby = document.getElementById("removeby").value;
    var child = document.getElementsByTagName('li')[removeby -1];
    var parent = child.parentNode;
    parent.removeChild(child);

  }
  

}
