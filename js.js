let username=prompt('Please enter your username');

if (username ==="") {
    alert('Canceled');}
else if (username==='admin'){
    let password=prompt('Please enter login Password');
    if (password==='TheMaster') {
        alert('Welcome');}
    else if (password === ""){
        alert('Canceled');}
    else {
        alert('Wrong Password');}}

else {
    alert("I don't know you");}