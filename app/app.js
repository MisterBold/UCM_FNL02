const headr=document.querySelector('body > header')
const theNav=document.querySelector('body > header + img + nav')
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
const mediaQuoteBtn=document.querySelector('.quote.media')
const mediaQuoteIcons=document.querySelectorAll('img.media.quote-icon')
const LetterHead=document.querySelector('body > header + img')
const lttheadsrcs=['./res/img/ucmlgo05.png', './res/img/ucmlgoblck01.png']

const imgsrcs={
    house:'./res/img/orange house.jpeg',
    phone:'./res/img/orange phone01_2.png',
    notebook:'./res/img/notebook01.jpeg',
}

const burger=document.querySelector('.burger')
const bars=document.querySelector('.bar')
const barsBef=document.querySelector('.bar::before')
const barsAft=document.querySelector('.bar::after')

theNav.addEventListener('click',()=>{
    allMayneToggles()
})

mainLftrLi.forEach(li=>{

    allMayneToggles()

    li.addEventListener('mouseenter',()=>{
        mainRytrImg.setAttribute('src',`${li.getAttribute('data-imgsrc')}`)
        ImageOverlayImg.setAttribute('src',`${li.getAttribute('data-imgsrc')}`)
        main.style.background=`url(..${li.getAttribute('data-imgsrc')})`
        
    })
    
    li.addEventListener('mouseleave',()=>{
        mainRytrImg.classList.toggle('blrr')
        
    })
    
    li.addEventListener('click',()=>{
        allMayneToggles()
    
    })
})

function allMayneToggles() {
    
    main.classList.toggle('actv')
    bars.classList.toggle('actv')
    
    setTimeout(()=>{
        LetterHead.classList.toggle('norm')
        theNav.classList.toggle('norm')
        // console.log('1 second')
    }, 200)

    let theDiv=175
    
    for(let ind=0; ind < mainLftrLi.length*theDiv; ind+=theDiv){
        setTimeout(()=>{
            mainLftrLi[ind/theDiv].classList.toggle('chng')
            // console.log(mainLftrLi[ind/theDiv].textContent)
        }, ind)
    }

}

burger.addEventListener('mouseover',()=>{
    burger.style.cursor='pointer'
})



mediaQuoteBtn.addEventListener('mouseenter',()=>{
    // mediaQuoteIcons.classList.add('icon-present')
    mediaQuoteBtn.classList.add('between-space')
    mediaQuoteIcons.forEach(quote_icon => {
        quote_icon.classList.add('icon-present')
        setTimeout(() => {
            // mediaQuoteBtn.style.background='springgreen'
            quote_icon.classList.add('icon-present-display')
        }, 100);
    });
    
    
})

mediaQuoteBtn.addEventListener('mouseleave',()=>{
    mediaQuoteBtn.classList.remove('between-space')
    mediaQuoteIcons.forEach(quote_icon => {
        quote_icon.classList.remove('icon-present')
        setTimeout(() => {
            quote_icon.classList.remove('icon-present-display')
            // mediaQuoteBtn.style.background='orange'
        }, 100);
    });
    // mediaQuoteIcons.classList.remove('icon-present')
    // mediaQuoteBtn.style.background='red'
})
