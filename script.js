function buscarImagem() {
    const username = document.getElementById('username').value.trim();
    const avatarContainer = document.getElementById('avatar-container');
    const avatar = document.getElementById('avatar');

    if (username !== "") {
        avatar.src = `https://tr.rbxcdn.com/30DAY-AvatarHeadshot-${username}-Png/420/420/AvatarHeadshot/Png/noFilter`;
        avatarContainer.style.display = "block";
    } else {
        avatarContainer.style.display = "none";
    }
}

// Typewriter Effect
const texto = "Consulta de Imagem Roblox - Tropa Egito";
let i = 0;
function typeWriter() {
    if (i < texto.length) {
        document.getElementById("typewriter").innerHTML += texto.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();
