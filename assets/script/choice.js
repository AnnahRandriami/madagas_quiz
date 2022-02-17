var btnChoisir = document.getElementById("choisir")

var listenerFunction2 = {
    choice : ()=>{
      choixTheme();
     if(document.getElementById("theme-select").options[3].selected === true){
       window.alert("anime")
       let quiz = new Quiz(questions);
       quizApp();
       console.log(quiz);
     }else{
       let quiz = new Quiz(question);
       window.alert("not anime")
     }
    } 
}

btnChoisir.onclick = listenerFunction2.choice

//fonction qui gère le choix des thème
 function choixTheme(){
  var select = document.getElementById("theme-select");
  var itemSelect = select.options[select.selectedIndex].value;
  window.localStorage.setItem("value1" ,itemSelect)

  }


  
  

 
