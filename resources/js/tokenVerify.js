var aToken = window.localStorage.getItem('token')
absentToken(aToken);

function absentToken(token){
    if(!token){
        window.location.href="../login.html"
    }
}