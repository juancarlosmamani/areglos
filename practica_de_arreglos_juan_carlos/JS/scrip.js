
function pares(){
    const par = [];
    let n = prompt("numeros pares");
    for (let i = 0; i <= n; i++){
        par[i-1]=i*2;
        console.log(par[i]);
    }

    let tam = par.length
    texto ="<ul>";
    for (let j = 0; j < tam; j++){
        texto = texto+"<li>"+par[j]+"</li>";
    }

    texto = texto+"<ul>";
    document.getElementById("res").innerHTML=texto;
}

function impares(){
    const impar = [];
    let n = prompt("numeros impares");
    for (let i = 0; i < n; i++){
        impar[i]=(2*i)+1;
        console.log(impar[i]);
    }

    let tem = impar.length
    texto ="<ol>";
    for (let m = 0; m < tem; m++){
        texto = texto+"<li>"+impar[m]+"</li>";
    }

    texto = texto+"</ol>";
    document.getElementById("resp").innerHTML=texto;
    
}

function multiplos3(){
    const mult = [];
    let n = prompt("multiplos de 3");
    for (let i = 1; i<=n; i++){
        mult[i]=i*3;
        console.log(mult[i]);
    }

    let tem = mult.length
    texto = "<ul>";
    for(let k = 1; k < tem; k++){
        texto = texto+"<li>"+mult[k]+"</li>";
    }

    texto = texto+"<ul>";
    document.getElementById("re").innerHTML=texto;
} 


function multiplos5(){
    const mult = [];
    let n = prompt("multiplos de 5");
    for (let i = 1; i<=n; i++){
        mult[i]=(i*5);
        console.log(mult[i]);
    }

    let tam = mult.length
    texto = "<ol>";
    for(let j = 1; j < tam; j++){
        texto = texto+"<li>"+mult[j]+"</li>";
    }

    texto = texto+"<ol>";
    document.getElementById("rep").innerHTML=texto;
} 


function aleatorio(){
    const aleat = [];
    let n = prompt("generar n numeros aleatorios entre 10-100");
   
        
        for(let i = 0;i < n; i++){
            var alet = Math.floor(Math.random()*90)+10;
            aleat[i] = alet;
            console.log(aleat[i])
    
    }
    let tam = aleat.length
    texto1 = "<ul>";
    for(let a = 0;a < tam;a++){
        texto1 = texto1+"<li>"+aleat[a]+"</li>";
    }

    texto1 = texto1+"<ol>";
    document.getElementById("respu").innerHTML=texto1;
}