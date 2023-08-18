function envoie(){
    let Nom = document.getElementById("nom").value;
    let Prenom = document.getElementById("prenom").value;
    let Mail = document.getElementById("email").value;
    let Tel = document.getElementById("tel").value;
    let Ville = document.getElementById("ville").value;
    let Code = document.getElementById("cp").value;
    let Msg = document.getElementById("msg").value;

    // console.log(Nom, Prenom, Mail, Tel, Ville, Code, Msg);

    localStorage.setItem("nom",Nom);
    localStorage.setItem("prenom",Prenom);
    localStorage.setItem("email",Mail);
    localStorage.setItem("tel",Tel);
    localStorage.setItem("ville",Ville);
    localStorage.setItem("cp",Code);
    localStorage.setItem("msg",Msg);

    let prenom = localStorage.getItem("prenom");
    console.log(localStorage.getItem("prenom"));
    document.getElementById("sp1").innerText += prenom;
}