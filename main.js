//Making the content align correct with navbar extending or minimizing

const content = document.getElementsByClassName('main-container');
const navCheckbox = document.querySelector("input[name=navcheckbox]");

// console.log(navCheckbox);

navCheckbox.addEventListener('change', function() {
    if(this.checked) {
        content[0].classList.add('active')
        // console.log('Checked');
    } else {
        content[0].classList.remove('active')
    }
});

// Switching from dark to light mode

const themeSelected = document.querySelector("input[name=navtheme]");
console.log(themeSelected);

//Get the needed element to change colors
const outerToggle = document.getElementsByClassName('outer-toggle');
const innerToggle = document.getElementsByClassName('inner-toggle');
const navCheckboxElement = document.getElementsByClassName('nav-checkbox');
const navExtend = document.getElementsByClassName('nav-extend');
const navContainer = document.getElementsByClassName('nav-container');
const darkModeToggle = document.getElementsByClassName('dark-mode-toggle');
const navTheme = document.getElementsByClassName('nav-theme');
const navBox = document.getElementsByClassName('nav-box');

// nav-container


themeSelected.addEventListener('change', function() {
    if(this.checked) {
        outerToggle[0].classList.add('light');
        innerToggle[0].classList.add('light');
        navCheckboxElement[0].classList.add('light');
        navExtend[0].classList.add('light');
        navContainer[0].classList.add('light');
        darkModeToggle[0].classList.add('light');
        navTheme[0].classList.add('light');
        //Switch to a foreach
        for(let i = 0; i < navBox.length; i++) {
            navBox[i].classList.add('light');
        }



    } else {
        outerToggle[0].classList.remove('light');
        innerToggle[0].classList.remove('light');
        navCheckboxElement[0].classList.remove('light');
        navExtend[0].classList.remove('light');
        navContainer[0].classList.remove('light');
        darkModeToggle[0].classList.remove('light');
        navTheme[0].classList.remove('light');
        for(let i = 0; i < navBox.length; i++) {
            navBox[i].classList.remove('light');
        }


    }
})