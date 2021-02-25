function somma(){
    let firstValue=document.getElementById("firstValue").value;
    let secondValue=document.getElementById("secondValue").value;
    let result=document.getElementById("result");
    let sum=parseInt(firstValue)+parseInt(secondValue);
    result.innerText=sum; 
}
function sottrazione(){
    let firstValue=document.getElementById("firstValue").value;
    let secondValue=document.getElementById("secondValue").value;
    let result=document.getElementById("result");
    let sottrazione=parseInt(firstValue)-parseInt(secondValue);
    result.innerText=sottrazione;

}
function moltiplicazione(){
    let firstValue=document.getElementById("firstValue").value;
    let secondValue=document.getElementById("secondValue").value;
    let result=document.getElementById("result");
    let moltiplicazione=parseInt(firstValue)*parseInt(secondValue);
    result.innerText=moltiplicazione;

}
function divisione(){
    let firstValue=document.getElementById("firstValue").value;
    let secondValue=document.getElementById("secondValue").value;
    let result=document.getElementById("result");
    let divisione=parseInt(firstValue)/parseInt(secondValue);
    result.innerText=divisione;

}