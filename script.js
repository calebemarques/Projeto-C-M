var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");


li_items.forEach((li_item)=>{
  li_item.addEventListener("mouseenter", ()=>{
    if(wrapper.classList.contains("click_collapse")){
      return;
    }
    else{
      li_item.closest(".wrapper").classList.remove("hover_collapse");
    }
  })
})

li_items.forEach((li_item)=>{
  li_item.addEventListener("mouseleave", ()=>{
    if(wrapper.classList.contains("click_collapse")){
      return;
    }
    else{
      li_item.closest(".wrapper").classList.add("hover_collapse");
    }
  })
})



hamburger.addEventListener("click", () => {
  hamburger.closest(".wrapper").classList.toggle("click_collapse");
  hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})



Resources
function validarEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  
  if(!email.checkValidity()){
    error.innerHTML = "Email invalido";  
  }
   
}

function redefinirMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido"){
    error.innerHTML = "";
  }
}
function validarSenha(){
	var senha = document.querySelector('#senha');
	var error = document.querySelector('#error-senha');
	
	if(!email.checkValidity()){
	  error.innerHTML = "Senha invalida";  
	}
	 
  }
  
  function redefinirMsg1(){
	var error = document.querySelector('#error-senha');
	if (error.innerHTML == "Senha invalida"){
	  error.innerHTML = "";
	}
  }
let nomes = [
	"jamilton",
	"josé",
	"letícia",
	"maria",
	"carlos",
	"pedro",
	"marcela",
	"carla",
	"calebe"
]

function pesquisarNome(){

	let nomePesquisa = document.getElementById('campoNome').value
	let intensLista = ''

	for(indice in nomes){
		let nome = nomes[indice]
		if( nomePesquisa == nome ){
			intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`
		}
	}

	document.getElementById('lista').innerHTML = intensLista

}

function carregarNomes(){

	let intensLista = ''
	for(indice in nomes){
		
		let nome = nomes[indice]

		intensLista += `
			<li class="list-group-item">
				${nome}
			</li>`

		//alert(intensLista)
	}

	document.getElementById('lista').innerHTML = intensLista

}


function validarSenha (){
	var senha= "123"

	if (senha =>123 ){
	console.log('coloque outra')
	}
}

class Validator {

	constructor() {
	  this.validations = [
		'data-min-length',
		'data-max-length',
		'data-only-letters',
		'data-email-validate',
		'data-required',
		'data-equal',
		'data-password-validate',
	  ]
	}
  
	// inicia a validação de todos os campos
	validate(form) {
  
	  // limpa todas as validações antigas
	  let currentValidations = document.querySelectorAll('form .error-validation');
  
	  if(currentValidations.length) {
		this.cleanValidations(currentValidations);
	  }
  
	  // pegar todos inputs
	  let inputs = form.getElementsByTagName('input');
	  // transformar HTMLCollection em arr
	  let inputsArray = [...inputs];
  
	  // loop nos inputs e validação mediante aos atributos encontrados
	  inputsArray.forEach(function(input, obj) {
  
		// fazer validação de acordo com o atributo do input
		for(let i = 0; this.validations.length > i; i++) {
		  if(input.getAttribute(this.validations[i]) != null) {
  
			// limpa string para saber o método
			let method = this.validations[i].replace("data-", "").replace("-", "");
  
			// valor do input
			let value = input.getAttribute(this.validations[i])
  
			// invoca o método
			this[method](input,value);
  
		  }
		}
  
	  }, this);
  
	}
  
	// método para validar se tem um mínimo de caracteres
	minlength(input, minValue) {
  
	  let inputLength = input.value.length;
  
	  let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
  
	  if(inputLength < minValue) {
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// método para validar se passou do máximo de caracteres
	maxlength(input, maxValue) {
  
	  let inputLength = input.value.length;
  
	  let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
  
	  if(inputLength > maxValue) {
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// método para validar strings que só contem letras
	onlyletters(input) {
  
	  let re = /^[A-Za-z]+$/;;
  
	  let inputValue = input.value;
  
	  let errorMessage = `Este campo não aceita números nem caracteres especiais`;
  
	  if(!re.test(inputValue)) {
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// método para validar e-mail
	emailvalidate(input) {
	  let re = /\S+@\S+\.\S+/;
  
	  let email = input.value;
  
	  let errorMessage = `Insira um e-mail no padrão matheus@email.com`;
  
	  if(!re.test(email)) {
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// verificar se um campo está igual o outro
	equal(input, inputName) {
  
	  let inputToCompare = document.getElementsByName(inputName)[0];
  
	  let errorMessage = `Este campo precisa estar igual ao ${inputName}`;
  
	  if(input.value != inputToCompare.value) {
		this.printMessage(input, errorMessage);
	  }
	}
	
	// método para exibir inputs que são necessários
	required(input) {
  
	  let inputValue = input.value;
  
	  if(inputValue === '') {
		let errorMessage = `Este campo é obrigatório`;
  
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// validando o campo de senha
	passwordvalidate(input) {
  
	  // explodir string em array
	  let charArr = input.value.split("");
  
	  let uppercases = 0;
	  let numbers = 0;
  
	  for(let i = 0; charArr.length > i; i++) {
		if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
		  uppercases++;
		} else if(!isNaN(parseInt(charArr[i]))) {
		  numbers++;
		}
	  }
  
	  if(uppercases === 0 || numbers === 0) {
		let errorMessage = `A senha precisa um caractere maiúsculo e um número`;
  
		this.printMessage(input, errorMessage);
	  }
  
	}
  
	// método para imprimir mensagens de erro
	printMessage(input, msg) {
	
	  // checa os erros presentes no input
	  let errorsQty = input.parentNode.querySelector('.error-validation');
  
	  // imprimir erro só se não tiver erros
	  if(errorsQty === null) {
		let template = document.querySelector('.error-validation').cloneNode(true);
  
		template.textContent = msg;
	
		let inputParent = input.parentNode;
	
		template.classList.remove('template');
	
		inputParent.appendChild(template);
	  }
  
	}
  
	// remove todas as validações para fazer a checagem novamente
	cleanValidations(validations) {
	  validations.forEach(el => el.remove());
	}
  
  }
  
  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  
  let validator = new Validator();
  
  // evento de envio do form, que valida os inputs
  submit.addEventListener('click', function(e) {
	e.preventDefault();
  
	validator.validate(form);
  });

  function Mudarestado(el, btn) {
    
    var ele = document.getElementById(el);
    var display = ele.style.display;
    
    ele.style.display = display == 'none' ? 'block' : 'none';
    btn.innerHTML = display == 'none' ? 'Esconder' : 'Mostrar';

}