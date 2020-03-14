let button =document.getElementById("theBoxes");
button.addEventListener("click",myfunction);

var oldValue=0;
var i=1;
function myfunction()
{
    let n =document.getElementById('number').nodeValue;
    n=parseInt(oldValue)+parseInt(n);
    for(var i=0;i<=n;i++)
    {
        var box=document.createElement('div');
        box.classList.add('mydiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML =i;
var oldValue=document.getElementById('box').lastElementChild.innerHTML;
console.log(oldValue)
    }
}