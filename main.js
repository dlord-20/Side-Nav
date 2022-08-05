const content = document.getElementsByClassName('main-container');
const navCheckbox = document.querySelector("input[name=navcheckbox]");

console.log(navCheckbox);


navCheckbox.addEventListener('change', function() {
    if(this.checked) {
        content[0].classList.add('active')
        console.log('Checked');
    } else {
        content[0].classList.remove('active')
    }
});

