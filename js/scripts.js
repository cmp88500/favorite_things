
var arr = []
  function myFunction(event) {
    var x=document.getElementById("box");
    arr.push(document.getElementById("input1").value);
    arr.push(document.getElementById("input2").value);
    arr.push(document.getElementById("input3").value);
    arr.push(document.getElementById("input4").value);
    x.innerHTML=arr.join('<br/>');
    event.preventDefault();
    var newj1 = arr[0];
    var newj2 = arr[1];
    var newj3 = arr[2];
    console.log(newj1);

    document.getElementById('fave1').append(newj1);
    document.getElementById('fave2').append(newj2);
    document.getElementById('fave3').append(newj3);
  }
