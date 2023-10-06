function adduser(){
    var player1=document.getElementById("name1").value
    var player2=document.getElementById("name2").value

    localStorage.setItem("player1name", player1)
    localStorage.setItem("player2name", player2)

    window.location="game.html"
}































