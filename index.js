document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    const userData = document.getElementById("username").value;

    console.log(userData);
};