let passCharacters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz123456789$~|>=<+^%#&\/*@{}[]().?!:;,-_"
const firstPass = document.getElementById("btn-el-first")
const  secondPass = document.getElementById("btn-el-second")
const thirdPass = document.getElementById("btn-el-third")
const forthPass = document.getElementById("btn-el-forth")
const passGen = document.getElementById("pass-gen") 
let passLength = 20


function generatePassword() {
    let randomPass = " "
    for(let i = 0; i < passLength; i++){
        const randomNum = Math.floor(Math.random() * passCharacters.length)
        randomPass += passCharacters[randomNum]
    } return randomPass
}


passGen.addEventListener("click", function(){
    firstPass.textContent = generatePassword()
    secondPass.textContent = generatePassword()
    thirdPass.textContent = generatePassword()
    forthPass.textContent = generatePassword()
})