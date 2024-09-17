const body = document.querySelector('body')
const section = document.querySelector('section')
const slides = section.querySelectorAll('div')


let index = 0
let waitTime = 4000

let pattern = [
  [2.5, 2, 1, 1],
  [9, 2, 1, 1],
  [3, 7, 1, 1],
  [2, 2, 3.5, 1],
  [1.5, 1.5, 1, 2.25],
]

let timeout = null

const nextSlide = () => {
  index += 1
  index %= pattern.length

  section.style.gridTemplateColumns = pattern[index]
    .map((p) => {
      return `${p}fr`
    })
    .join(' ')

  slides.forEach((slide, slideIndex) => {
    if (pattern[index][slideIndex] === 0) {
      slide.classList.add('hide')
    } else {
      slide.classList.remove('hide')
    }
  })

  clearTimeout(timeout)
  timeout = setTimeout(nextSlide, waitTime)
}

timeout = setTimeout(nextSlide, waitTime)
