function setaImagem(){
			var settings = {
				primeiraImg: function(){
					elemento = document.querySelector("#slider a:first-child");
					elemento.classList.add("ativo");
					
				},
				slide: function(){
					elemento = document.querySelector(".ativo");
					if(elemento.nextElementSibling){
						elemento.nextElementSibling.classList.add("ativo");
						
						elemento.classList.remove("ativo");
					}else{
						elemento.classList.remove("ativo");
						settings.primeiraImg();
					}
				},
				proximo: function(){
					clearInterval(intervalo);
					elemento = document.querySelector(".ativo");
					
					if(elemento.nextElementSibling){
						elemento.nextElementSibling.classList.add("ativo");
						
						elemento.classList.remove("ativo");
					}else{
						elemento.classList.remove("ativo");
						settings.primeiraImg();
					}
					intervalo = setInterval(settings.slide,4000);
				},
				anterior: function(){
					clearInterval(intervalo);
					elemento = document.querySelector(".ativo");
					
					if(elemento.previousElementSibling){
						elemento.previousElementSibling.classList.add("ativo");
						settings.legenda(elemento.previousElementSibling);
						elemento.classList.remove("ativo");
					}else{
						elemento.classList.remove("ativo");						
						elemento = document.querySelector("a:last-child");
						elemento.classList.add("ativo");
						this.legenda(elemento);
					}
					intervalo = setInterval(settings.slide,4000);
				},
				
			}
			//chama o slide
			settings.primeiraImg();
			
			//chama o slide à um determinado tempo
			var intervalo = setInterval(settings.slide,4000);
			document.querySelector(".next").addEventListener("click",settings.proximo,false);
			document.querySelector(".prev").addEventListener("click",settings.anterior,false);
		}
		window.addEventListener("load",setaImagem,false);
		
function validateForm() {

 if( document.myForm.email.value == "" )
         {
            alert( "Preencha o campo E-mail!" );
            document.myForm.email.focus() ;
            return false;
        }
if( document.myForm.senha.value == "" )
         {
            alert( "Por favor, preencha o campo Senha" );
            document.myForm.senha.focus() ;
            return false;
         }

         return( true );
      
}

function validateForm2() {

if( document.myForm2.name.value == "" )
         {
            alert( "Por favor, preencha o campo Nome" );
            document.myForm2.name.focus() ;
            return false;
         }
if( document.myForm2.email2.value == "" )
         {
            alert( "Por favor, preencha seu email" );
            document.myForm2.email2.focus() ;
            return false;
         }         
if( document.myForm2.senha2.value == "" )
         {
            alert( "Por favor, crie uma senha" );
            document.myForm2.senha2.focus() ;
            return false;
         }
if( document.myForm2.rep_senha.value != document.myForm2.senha2.value )
         {
            alert( "Senha não confere. Confirme a mesma senha!" );
            document.myForm2.rep_senha.focus() ;
            return false;
         }
        return( true );
      
}