let userProfile = document.querySelector('.user_profile')
let userNameElem = document.querySelector('.user_name')
let userPhoneNumber = document.querySelector('.user_number')
let userCharge = document.querySelector('.overlay')

const mainUrlApi = 'http://localhost:3000/api/'




//! get data from db and show all in dom
window.addEventListener('load', () => {

    let userToken = localStorage.getItem('userToken')

    fetch(`${mainUrlApi}users`, {
        method: 'GET',
        headers: {
            authorization: userToken
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            userProfile.setAttribute('src', data[0].profile)
            userNameElem.innerHTML = `سلام ، ${data[0].firstName} ${data[0].lastName} `
            userPhoneNumber.innerHTML = data[0].phoneNumber
            userCharge.innerHTML = data[0].charge
        })






})