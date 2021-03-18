const sec = document.querySelector('#sec')
const nav = document.querySelector('#navigation')

document.addEventListener('click', e => {
    const el = e.target;
    if (el.classList.contains('tog')){
        sec.classList.toggle('ativo')
        nav.classList.toggle('ativo')

    }
})