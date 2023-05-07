let text=document.querySelector('.text')
let box=document.querySelector('.box')
let different_Color= function(){
    text.style.color='#FFF8DE';
}
text.addEventListener('mouseover',different_Color)
text.addEventListener('mouseout',()=>{
    text.style.color='red';
    box.style.backgroundColor='#394867';
})



