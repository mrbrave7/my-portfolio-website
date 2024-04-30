$(document).ready(function () {

    var typed = new Typed('#element', {
        strings: [
            'UI/UX Designer',
            'React Developer',
            'Backend Developer',
            'Javascript Developer'
        ],
        typeSpeed: 50
    })


    $('#profile__ripple').ripples({
        resolution: 512,
        dropRadius: 10
    })
    const bars = document.querySelectorAll('.progress_bar')
    bars.forEach((bar) => {
        let percent = bar.dataset.percent;
        const tooltip = bar.children[0]
        tooltip.innerText = percent + "%"
        bar.style.width = percent + "%"
    });
    const counters = document.querySelectorAll(".couter")
    function runCounter() {
        counters.forEach((counter) => {
            counter.innerText = 0
            let target = +counter.dataset.counter
            let countIt = function () {
                let displayedCount = +counter.innerText
                if (displayedCount < target) {
                    counter.innerText = displayedCount + 1
                    // countIt()
                    setTimeout(countIt, 1)
                }
                else {
                    counter.innerText = target;
                }
            }
            countIt()
        })
    }
    let counterSection = document.querySelector(".counter__wrapper")
    let option = {
        rootMargin: '0px 0px -20px 0px'
    }
    let done = 0
    const inter = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            console.log("Intersecting")
            done = 1
            runCounter()
        }
    }, option)
    inter.observe(counterSection)




    var $wrapper = $('.portfolio__wrapper')
    // console.log($wrapper)
    $wrapper.isotope({
        filter: '*',
        layoutMode: "masonry",
        animationOption: {
            duration: 750,
            easing: 'linear'
        }
    })


    const links = document.querySelectorAll(".navs a")
    console.log(links)
    links.forEach(link => {
        const selector = link.dataset.filter
        link.addEventListener("click", (e) => {
            e.preventDefault()
            $wrapper.isotope({
                filter: selector,
                layoutMode: "masonry",
                animationOption: {
                    duration: 750,
                    easing: 'linear'
                }
            })
            links.forEach(link => {
                link.classList.remove("active")
            })
            e.target.classList.add("active")
        })

    })

    $('.magnify').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        },
        zoom:{
            enabled:true
        }
    })

    $(".sliders").slick({
        arrows:false,
        autoplay:true
    })

})

