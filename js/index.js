

/* ********** Menu ********** */

/*función anónima autoejecutable*/



((d) => {
  
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  /*esconder el menu cuando ya se seleccionó una sección o
  si se clickea en cualquier otro sector de la pantalla
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  d.addEventListener("click", (e) => {
  
  
    if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
    $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
   
      
    });
  
  })(document);
  

  //  FILTRO DE BÚSQUEDA

  const d=document;
/* 
   d.querySelector(input).addEventListener("input", (e)=>{
    d.querySelectorAll(".card")
         .forEach(el =>
             el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
             ? el.classList.remove("filter")              
             : el.classList.add("filter")
         );
 })  */
 
/*   const $inputSearch=d.querySelectorAll(".card-filter"); */  
d.addEventListener("keyup", (e)=>{
  
    if (e.target.matches(".card-filter")) {
        
          if (e.key==="Escape") e.target.value="";  
      
      
      
  
       
       
        d.querySelectorAll(".card").forEach((el)=>
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          :el.classList.add("filter") 
        )
        
       
    }

        
    
})  



/* $inputSearch.addEventListener("clear", (e)=>{
  e.target.value="";
}) */


d.addEventListener("touchstart", (e)=>{
  if (e.target.matches(".card-filter")) {
      
      if (e.key==="Escape") e.target.value="";
      
      d.querySelectorAll(".card").forEach((el)=>
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove("filter")
        :el.classList.add("filter") 
      )

      
  }
})

//  VENTANA MODAL - CUOTAS

d.addEventListener("click", (e)=>{
  if (e.target.matches(".button") && e.target.nextElementSibling.classList.contains("display-none")) {
    e.target.nextElementSibling.classList.remove("display-none");
    e.target.outerHTML="<button class='button'>X</button>";

  }
  if (e.target.matches(".button") && !e.target.nextElementSibling.classList.contains("display-none")) {
    e.target.nextElementSibling.classList.add("display-none");
    e.target.outerHTML="<button class='button'>VER CUOTAS</button>";
  }


//que se vean las respuestas a las Preguntas Frecuentes

 if(e.target.matches(".btn-pregunta")) {

    e.target.nextElementSibling.classList.toggle("display-none"); 
}
 

})

 /* const $pregunta1=d.getElementById("p1"); */
/*$r1=d.getElementById("r1");

$pregunta1.onclick=function(){
   $r1.classList.add("bg-red");
} */
/* 
function colorear(){
  $r1.classList.remove("display-none");
}


$pregunta1.addEventListener("click", colorear);
 */
/* 
d.addEventListener("click", (e)=>{
  if (e.target.matches(".button")  && !e.target.previousElementSibling.classList.contains("cuotas")) {
   
   e.target.previousElementSibling.outerHTML=`
 <div class="cuotas">
   <div class="cuota">
     <span>3 CUOTAS DE</span>
       <span>$40000</span>
   </div>
   <div class="cuota">
     <span>6 CUOTAS DE</span>
       <span>$25000</span>
   </div>
 </div>`; 
   e.target.outerHTML="<button class='button'>X</button>";
  

  }

  if (e.target.matches(".button")  && e.target.previousElementSibling.classList.contains("cuotas")) {
   
    e.target.previousElementSibling.outerHTML="<p>$100000</p>"; 
    e.target.outerHTML="<button class='button'>VER CUOTAS</button>";
   
 
   }

 


  
   
  
}) */

