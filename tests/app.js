//burger icon op

const burger=document.querySelector('.burger')
const bars=document.querySelector('.bar')
const theBod=document.querySelector('body')


burger.onclick=()=>{
    // theBod.classList.toggle('actv')
    // burger.classList.toggle('actv')
    bars.classList.toggle('actv')
}

//***********************************************
//services gen


//placeholder, to input an array with service class names
var count
var service_title=['Digital Marketing','Career Development','Multimedia Services','Content Creation', 'Web Development','Business Development']
var img_alt
var img_src01


//to be continued, variable installation incomplete
var the_services=`<div class=\"serv ${count}\"><div class=\"lft\"><span>Career Development</span></div><div class=\"ryt\"><img src=\"./res/img/UCM03Asset 1@2x.png\" alt=\"\"></div></div>`
var the_services=`<div class=\"serv ${count}\"><div class=\"ryt\"><img src=\"${img_src01}" alt=\"${img_alt}\"></div><div class=\"lft\"><span>${service_title}</span></div></div>`

document.body.innerHTML=''
