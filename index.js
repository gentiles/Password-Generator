const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genpass = document.getElementById("generate")
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")


genpass.addEventListener("click", function(){
      let val1 = []
      let val2 = []
     for(let i = 0; i < 10; i++){
         let gen0 = Math.floor(Math.random() * characters.length)
         val1.push(characters[gen0])
         let str = val1.join("")
         pass1.textContent = str
         
                    
    }
      for(let i = 0; i < 10; i++){
         let gen0 = Math.floor(Math.random() * characters.length)
         val2 += characters[gen0]
         
         pass2.textContent = val2
         
                    
    }
})


