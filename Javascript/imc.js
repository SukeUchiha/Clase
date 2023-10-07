function calcular() {
    let altura = document.getElementById("txt_altura").value;
    let peso = document.getElementById("txt_peso").value;
    let edad = document.getElementById("txt_edad").value;
    let e = document.getElementById("cmb_sexo");
    // let value_sexo = e.options[e.selectedIndex].value;
    var sexo = e.options[e.selectedIndex].text;

    let IMC = null;
    console.log("altura: "+altura);
    console.log("peso: "+peso);
    console.log("edad: "+edad);
    console.log("sexo: "+sexo);

    if(altura=="" || peso=="" || edad=="" || sexo==""){
        alert("debe llenar todos los campos");
    }
    else{
        IMC = peso/(altura)^2
        document.getElementById("lbl_rta").innerHTML="El índice de masa corporal es: "+IMC;
        document.getElementById("lbl_rta").style.display = "block";
    }

}