const headr=document.querySelector('body > header')
const main=document.querySelector('.mayne')
const mainLftr=document.querySelector('.mayne .left')
const mainRytrImg=document.querySelector('.mayne .right img')
const ImageOverlayImg=document.querySelector('.img.ovrlay img')
const mainLftrLi=document.querySelectorAll('.mayne .left ul li a')
const footr=document.querySelector('footer.foot')
const sections=document.querySelectorAll('section')
const IOsections=document.querySelectorAll('.io')
const ImptntSections=document.querySelectorAll('.importantSect')
const SecondarySections=document.querySelectorAll('.secondaryImptnt')
const secOneImg=document.querySelector('section.on img')
const LetterHead=document.querySelector('.lttrhd img')
const lttheadsrcs=['../../res/img/ucmlgo05.png', '../../res/img/ucmlgoblck01.png']

const imgsrcs={
    house:'../res/img/orange house.jpeg',
    phone:'../res/img/orange phone01_2.png',
    notebook:'../res/img/notebook01.jpeg',
}

const burger=document.querySelector('.burger')
const bars=document.querySelector('.bar')
const barsBef=document.querySelector('.bar::before')
const barsAft=document.querySelector('.bar::after')

mainLftrLi.forEach(li=>{
    li.addEventListener('mouseenter',()=>{
        mainRytrImg.setAttribute('src',`${li.getAttribute('data-imgsrc')}`)
        ImageOverlayImg.setAttribute('src',`${li.getAttribute('data-imgsrc')}`)
        console.log(li.getAttribute('data-imgsrc'))
        console.log(`..${li.getAttribute('data-imgsrc')}`)
        main.style.background=`url(..${li.getAttribute('data-imgsrc')})`
        
    })
    
    li.addEventListener('mouseleave',()=>{
        mainRytrImg.classList.toggle('blrr')
        
    })
    
    li.addEventListener('click',()=>{
        allMayneToggles()
    
    })
})

burger.onclick=()=>{
    allMayneToggles()
}

function allMayneToggles() {
    bars.classList.toggle('actv')
    main.classList.toggle('actv')
    
    sections.forEach(sec=>{
        sec.classList.toggle('down')
    })
    
    footr.classList.toggle('down')
    headr.classList.toggle('down')
    
    let theDiv=175
    
    for(let ind=0; ind < mainLftrLi.length*theDiv; ind+=theDiv){
        setTimeout(()=>{
            mainLftrLi[ind/theDiv].classList.toggle('chng')
            console.log(mainLftrLi[ind/theDiv].textContent)
        }, ind)
    }
    
    // })

    mainLftr.classList.toggle('actv')

    
    if (LetterHead.getAttribute('src')===lttheadsrcs[1]){
        LetterHead.setAttribute('src',lttheadsrcs[0])
    } else {
        LetterHead.setAttribute('src', lttheadsrcs[1])
    }
}

burger.addEventListener('mouseover',()=>{
    burger.style.cursor='pointer'
})

const theIO01=new IntersectionObserver(entries=>{
    entries.forEach((entry, i)=>{
        if (entry.isIntersecting){
            console.log(entry.target.className, `${Math.round(entry.intersectionRatio*100)}%`)
            headr.style.backdropFilter='blur(10px)'
            LetterHead.setAttribute('src',lttheadsrcs[0])
            bars.classList.toggle('actv02')
        } else{
            bars.classList.toggle('actv02')
            headr.style.backdropFilter='blur(0px)'
            LetterHead.setAttribute('src',lttheadsrcs[1])
        }
    })
}, {threshold: .4})

const theIO02=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            console.log(entry.target.className, `${Math.round(entry.intersectionRatio*100)}%`)
            headr.style.backdropFilter='blur(10px)'
            // headr.style.background='orangered'
            LetterHead.setAttribute('src',lttheadsrcs[0])
            // bars.classList.toggle('actv02')
        } else{
            bars.classList.toggle('actv02')
            // headr.style.background='deeppink'
            headr.style.backdropFilter='blur(10px)'
            LetterHead.setAttribute('src',lttheadsrcs[1])
        }
    })
}, {threshold: .6})

// ImptntSections.forEach(sectn=>{
//     theIO01.observe(sectn)
// })

// SecondarySections.forEach(sectn=>{
//     theIO02.observe(sectn)
// })

