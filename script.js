'use strict';
//popup, popup__content, popu__close, btn btn--white, btn--popup

const button = document.querySelectorAll('.btn--popup');
const popup = document.querySelector('.popup');
const close = document.querySelectorAll('.popup__close');
const contactUsPage = document.querySelector('#contactUs')
const formPopup = document.querySelector('#formPopup')

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        popup.classList.add('popup--hidden');
    });
}

const closeBar = function () {
    popup.classList.remove('popup--hidden');
    formPopup.classList.remove('popup--hidden');
}

close[0].addEventListener('click', closeBar);
close[1].addEventListener('click', closeBar);
popup.addEventListener('click', closeBar);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && (popup.classList.contains('popup--hidden') || formPopup.classList.contains('popup--hidden'))) {
        closeBar();

    }
})

contactUsPage.addEventListener('click', function () {

    formPopup.classList.add('popup--hidden')
})

/*
<--------------------------- FORM VALIDATION ----------------------------->
*/
function validate() {

    let form = document.getElementsByClassName("form-check")
    let formErrorMessage = document.getElementsByClassName("form-error")
    let formValue = []


    for (let i = 0; i < form.length; i++) {
        formValue.push(form[i].value)
    }

    let [fullName, phNumber, email] = formValue

    if (fullName === '' || fullName.length < 2) {
        formErrorMessage[0].style.display = 'block'
        form[0].style.borderBottom = '3px solid #ff7730' //red
        // form[0].style.borderBottom = '3px solid #55c57a' //green
        return false
    }
    else {
        formErrorMessage[0].style.display = 'none'
        form[0].style.borderBottom = '3px solid #55c57a'

    }

    if (phNumber.length !== 10 || phNumber === "") {
        formErrorMessage[1].style.display = 'block'
        form[1].style.borderBottom = '3px solid #ff7730'

        return false
    }
    else {
        formErrorMessage[1].style.display = 'none'
        form[1].style.borderBottom = '3px solid #55c57a'

    }

    if (email == "" || !email.includes('@') || !email.includes('.')) {
        formErrorMessage[2].style.display = 'block'
        form[0].style.borderBottom = '3px solid #ff7730'
        return false
    }
    else {
        console.log(email.length - email.indexOf('.'))
        if ((email.length - email.indexOf('.') > 2)) {

            formErrorMessage[2].style.display = 'none'
            form[0].style.borderBottom = '3px solid #55c57a'

        }
        else {
            formErrorMessage[2].style.display = 'block'
            form[0].style.borderBottom = '3px solid #ff7730'
            return false
        }
    }
    alert(`Thank You for contacting us! 
We will get in touch with you very soon!`)
    return true
}

/*
<--------------------------- FORM VALIDATION ----------------------------->
*/