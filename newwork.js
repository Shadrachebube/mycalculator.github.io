console.log("web developers are scars")

let form =   document.querySelector("#form") 
let button =   document.querySelector(".green") 
let m = document.querySelector("#scr")
let sm = document.querySelector("#scr").value




 button.onClick = (abc) => {
 
  m.innerHTML   = abc

      if (abc == "") {
       return "please type in something"
                    }
}
(sm) ;




