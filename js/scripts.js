
var arr = []
  function myFunction(event) {
    var x=document.getElementById("box");
    arr.push(document.getElementById("input").value);
    x.innerHTML=arr.join('<br/>');
    event.preventDefault();
    console.log(arr)
  }
