const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const item = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const NumerIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')
const timer = document.querySelector('timer')

let active = 0
const total = item.length

function update(direction) {
    // Remove classe ativa do item atual
    item[active].classList.remove('active')
    dots[active].classList.remove('active')

    // Atualiza índice
    if (direction > 0) {
        active++
        if (active === total) active = 0
    } else if (direction < 0) {
        active--
        if (active < 0) active = total - 1
    }

    // Adiciona classe ativa no novo item
    item[active].classList.add('active')
    dots[active].classList.add('active')

    NumerIndicator.textContent = String(active + 1).padStart(2,'0')
}

prevButton.addEventListener('click', () => update(-1))
nextButton.addEventListener('click', () => update(1))



clearInterval(timer)
timer = setInterval(() => {
    update(1)
 }, 5000);