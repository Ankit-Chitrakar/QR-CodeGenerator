// console.log('Welcome to ');

// Targeting the id and class 

let generateBtn = document.getElementById('generateBtn');
let mainBox = document.querySelector('.mainBox');
let qrImg = document.querySelector('.qrImg');
let URLInput = document.getElementById('URLInput');
let imgBox = document.querySelector('.img');

// Create a audio object
let audio = new Audio('click.mp3');

// if user clicks on Generate QR Code button then..
generateBtn.addEventListener('click', ()=>{
    // console.log('Hello');
    audio.play();
    generateBtn.innerHTML = 'Generating QR Code.....';
    
    URLVal = URLInput.value;
    // console.log(URLVal);

    // firstly check wheather user input valid or not
    if(URLVal == ''){
        alert('Oops!!..Please Enter Correct URL/Text Here!!');
        generateBtn.innerHTML = 'Generate QR Code';
        return;
    }
    // if this is valid URL/Text then show the QR code
    else{
        setTimeout(() => {
            generateBtn.innerHTML = 'Scan the QR Code';
            mainBox.className = 'active';
            
        }, 1700);
    }
    // This is a QR Code generated API that takes input value as a input and we get corresponding QR Code on it.
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${URLVal}`;
    

    // qrImg.addEventListener('load', ()=>{
    // })
});

// When user has already get the QR Code of corresponding input URL/Text then reset the input Box.
URLInput.addEventListener('click', ()=>{
    mainBox.className = 'mainBox';
    URLInput.value = '';
})