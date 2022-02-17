/*******************VARIABLE*********************************/
var btnCnx = document.getElementById("connexion")
var btnAccount = document.getElementById("createAccount")
var login = document.getElementById("login")
var account = document.getElementById("register-popup")
var btnInsciption = document.getElementById("inscription")
var btnClose = document.getElementById("close")
var choiceContent = document.getElementById("content-quizz")
var choiceQuiz = document.getElementById("list-question")

/*********************FONCTION***************************/
var listenerFunction = {
    connexion:()=>{
        reLogin()
        if(window.localStorage.getItem("mail1") === window.localStorage.getItem("Email2") 
        && window.localStorage.getItem("Mdp") === window.localStorage.getItem("Pass") ){
            window.alert("Bienvenue")
            choiceContent.style.visibility ="visible"
            choiceQuiz.style.visibility ="visible"
            login.style.visibility = "hidden"

        }else{
            window.alert("Identifiant incorrecte, reessayer")
        }
    },
    account:()=>{
        login.style.visibility = "hidden";
        account.style.visibility = "visible";
    }, 
    inscription:()=>{
        stit()
        login.style.display = "hidden";
        account.style.display = "visible";
    },
    closing:()=>{
        login.style.visibility = "visible";
        account.style.visibility = "hidden"; 
    }
}

// Evenement
btnCnx.onclick = listenerFunction.connexion
btnAccount.onclick = listenerFunction.account
btnInsciption.onclick = listenerFunction.inscription
btnClose.onclick = listenerFunction.closing

/************************FONCTION ********************/

// signup
function signUp(){
     var itemMail = document.getElementById("email").value
     var itemPass = document.getElementById("password").value
     if(itemMail === "" || itemPass === ""){
        window.alert("Veuillez saisir vos identifiants")
     }else{
         window.localStorage.setItem("mail", itemMail)
     }
}

//inscription
function stit(){
    var itemName = document.getElementById("name").value
    var itemFirst = document.getElementById("firstName").value
    var itemMail1 = document.getElementById("email1") .value
    var itemPseudo = document.getElementById("pseudo").value
    var itemMdp = document.getElementById("mdp").value
    var itemDay = document.getElementById("day").value
    var itemMonth = document.getElementById("month").value
    var itemYear = document.getElementById("year").value
    window.localStorage.setItem("Name" , itemName)
    window.localStorage.setItem("First" , itemFirst)
    window.localStorage.setItem("mail1" , itemMail1)
    window.localStorage.setItem("Pseudo" , itemPseudo)
    window.localStorage.setItem("Mdp" , itemMdp)
    window.localStorage.setItem("Day" , itemDay)
    window.localStorage.setItem("Month" , itemMonth)
    window.localStorage.setItem("Year" , itemYear)
}
//relogin
function reLogin(){
   var itemMail2 = document.getElementById("email").value
   var itemPass = document.getElementById("password").value
   window.localStorage.setItem("Email2" , itemMail2)
   window.localStorage.setItem("Pass" , itemPass)
}