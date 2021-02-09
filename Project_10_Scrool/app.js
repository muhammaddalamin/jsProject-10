
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


navToggle.addEventListener('click',function(){
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // console.log(containerHeight)
    const linkHeight = links.getBoundingClientRect().height;
    // console.log(linkHeight)

    if(containerHeight === 0){
        linksContainer.style.height = `${linkHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})


const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll',function(){
    // console.log(window.pageXOffset)
    const scrollHight = window.pageXOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if(scrollHight > navbarHeight){
        navbar.classList.add('fixed-nav')
    }
    else{
        navbar.classList.remove('fixed-nav')
    }

})