function calcularMelhorPreco(){

  //validar campos
  let valido = document.getElementById('valido').value
  let invalido = document.getElementById('invalido').value

  if( valido != "" ){
    if( invalido != "" ){

      /*Calcular se é melhor usar álcool ou gasolina
        * se valorAlcool / valorGasolina >= 0.7 é melhor utilizar Gasolina
        * senão é melhor utilizar álcool
      */
      let resultado = valido| invalido
      if( resultado >= valido ){
        //alert("Melhor utilizar gasolina")
        document.getElementById('resultado').innerHTML = "Pode ir"
      }else{
        //alert("Melhor utilizar alcool")
        document.getElementById('resultado').innerHTML = "nao pode ir"
      }

    }else{
      alert("Preencha a senha")
    }
  }else{
    alert("Preencha o o E-mail")
  }

}