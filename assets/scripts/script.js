const collapsibleToggler = document.querySelector('.collapsible__toggler');
const collapsibleContent = document.querySelector('.collapsible__content');
const btns = document.querySelectorAll('.button');

collapsibleToggler.addEventListener('click', () => {
    collapsibleContent.classList.toggle('collapsible--expanded');
});

btns.forEach(btn => {
    btn.addEventListener('mouseover', function (e) {
        let x = e.clientX - e.target.getBoundingClientRect().left;
        let y = e.clientY - e.target.getBoundingClientRect().top;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 500);
    });
});