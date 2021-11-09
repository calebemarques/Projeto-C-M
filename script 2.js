
		
//const obj = jQuery()
//const obj = $('h1')
//console.log(obj)


  //$('#conteudo').addClass('destaque')
  //$('#conteudo').removeClass('destaque')
  //$('ul li').addClass('destaque')
  //$('ul#lista li').addClass('destaque')
  //$('h1').addClass('destaque')
  //$('[acao-clique]').addClass('destaque')
  //$('[ativo="sim"]').addClass('destaque')
  //$('*').addClass('destaque')

  /*encadeamento*/
  //$('h1')
    //.css('color','white')
    //.addClass('destaque')

  /* Seletores exclusivos jQuery (filtros) */
  //$('ul li:first').addClass('destaque')
  //$('ul li:last').addClass('destaque')
  //$('ul li:eq(2)').addClass('destaque')
  //$('ul li:gt(1)').addClass('destaque')
  //$('ul li:lt(2)').addClass('destaque')
  //$('ul li:odd').addClass('destaque')
  //$('#area :header').addClass('destaque')
  //$('ul li:hidden').show()
  //$('ul li:contains("ana")').addClass('destaque')

  /*Filtros de formulário*/
  //$('form :input').hide()
  //$('form :text').toggle()
  //$('form :password').toggle()
  //$('form :radio').toggle()
  //$('form :checkbox').toggle()
  $('form :submit').toggle()

})            












let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
