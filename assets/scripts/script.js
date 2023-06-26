const collapsibleToggler = document.querySelector('.collapsible__toggler');
const collapsibleContent = document.querySelector('.collapsible__content');

collapsibleToggler.addEventListener('click', () => {
    collapsibleContent.classList.toggle('collapsible--expanded');
});