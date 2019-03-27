var judul = document.querySelector('#judul');
judul.innerText = "Basic Form"  

// kalkulasi fullname
// maks 20 char
// alert toolong merah
// 

function getFullName() {
var firstName = document.querySelector('#firstNameInput').value;
var lastName = document.querySelector('#lastNameInput').value;
var fullName = firstName +" "+ lastName;
var result = document.querySelector('#result');
var fullNameLength = fullName.length;

if(fullNameLength < 20){
        result.classList.remove('text-danger')
        result.innerText = fullName;
}else{
        // jadi merah
        result.classList.add('text-danger')
        result.innerText = 'TOO LONG!'
}


}
