//доступ до складових сторінк
const slider = document.querySelector('.slider')
const sliderLeft = document.querySelector('.slider__left')
const sliderRight = document.querySelector('.slider__right')
const slidesCounter = sliderRight.querySelectorAll('div').length
const dwnBtn = document.querySelector('.dwn-btn')
const upBtn = document.querySelector('.up-btn')

//стартове значення змінної для активного слайду
let activeSlideIndex = 0


//змушуємо ліву частину підняти два перші кольорові слайди підняти вгору за межі вікна браузера
sliderLeft.style.top = `-${(slidesCounter-1)*100}vh`

// Шаблонний літерал з вбудованим виразом що перетворюється на рядок та конкатенує вираз
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

upBtn.addEventListener('click', function () {
    nextSlide('up')
})
dwnBtn.addEventListener('click', function () {
    nextSlide('down')
})


function nextSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCounter) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCounter - 1
        }
    }
    //отримання висоти слайдер-контейнера для подальшого обрахування необхідного зсуву слайдів
    const height = slider.clientHeight
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight

    sliderLeft.style.transform = `translateY(${activeSlideIndex*height}px)`
    sliderRight.style.transform = `translateY(-${activeSlideIndex*height}px)`
   
}