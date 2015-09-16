var para = document.createElement("p");
var paraText = document.createTextNode("This is some text appended from javaScript");
para.appendChild(paraText);
document.getElementById("someID").appendChild(para);

function sayHello (){
	alert("Hello there!");
}
