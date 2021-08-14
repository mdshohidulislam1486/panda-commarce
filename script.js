const allh4Tag =document.getElementsByTagName("h4");
for(const allh4 of allh4Tag){
    allh4.style.color = "lightblue";
}

document.getElementById('tomato').style.backgroundColor ="tomato";

const cardSlectors = document.querySelectorAll(".card")
for(const cardSelector of cardSlectors){
    cardSelector.style.borderRadius = "30px"
}


document.getElementById('add-console').addEventListener('click', function(){
    console.log("Clikc the first by Supply 350 sho and check the console")
})

const allBuyButtons =document.querySelectorAll('button.btn-dark');
for(const button of allBuyButtons){
    button.addEventListener('click', function(event){
        let targetDiv = event.target.parentElement;
        targetDiv.removeChild(event.target)
 })
}

document.getElementById('enable-text').addEventListener("keyup", function(event){
const innnerText = event.target.value
const btnDisable = document.getElementById("bnt-disable")
if(innnerText == "email"){
btnDisable.removeAttribute("disabled")
}else{
    btnDisable.setAttribute("disabled", true)
}

})
document.getElementById('bnt-disable').addEventListener('click', function(){
const palinText = document.getElementById('enable-text');
palinText.value ='';
})

document.getElementById('img-change').addEventListener('mouseenter', function(event){
    event.target.src = 'images/bags/bag-4.jpg'
})

/* const getImages = document.querySelectorAll('.card img')
for(const getImage of getImages){
    
    getImage.addEventListener('mouseenter', function(event){
        event.style.transform ="rotate(7deg)"
    })
}
 */
/* const footerBg = document.getElementById('footer-bg');
footerBg.ondblclick = "changeFooter"

console.log(footerBg)

function changeFooter(){
    footerBg.style.backgroundColor = 'red'
    console.log("double Clickd")
    
} */

document.getElementById('footer-bg').addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'lightblue'

})

