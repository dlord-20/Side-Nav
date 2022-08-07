//Making the content align correct with navbar extending or minimizing

const content = document.getElementsByClassName('main-container');
const navCheckbox = document.querySelector("input[name=navcheckbox]");

// console.log(navCheckbox);

navCheckbox.addEventListener('change', function() {
    if(this.checked) {
        content[0].classList.add('active')
        console.log('Checked');
    } else {
        content[0].classList.remove('active')
    }
});

// Switching from dark to light mode

const themeSelected = document.querySelector("input[name=navtheme]");
console.log(themeSelected);

//Get the needed element to change colors
const innerToggle = document.getElementsByClassName('inner-toggle');
console.log(innerToggle[0]);

// Testing color change

innerToggle[0].classList.add('light');

// Seems to be working