function consultarImagem() {
    const userInput = document.getElementById('inputUser').value.trim();
    const avatarImage = document.getElementById('avatarImage');

    if (userInput === '') {
        alert("Digite um ID ou Nickname válido.");
        return;
    }

    // Se for número é ID, se for texto é username
    let id = userInput;

    if (isNaN(userInput)) {
        // Se não é número, buscar ID usando API
        fetch(`https://users.roblox.com/v1/usernames/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ usernames: [userInput], excludeBannedUsers: true })
        })
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                id = data.data[0].id;
                avatarImage.src = `https://tr.rbxcdn.com/30DAY-AvatarHeadshot-${id}-Png/420/420/AvatarHeadshot/Png/noFilter`;
            } else {
                alert("Usuário não encontrado!");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao consultar usuário!");
        });
    } else {
        // Se já for ID
        avatarImage.src = `https://tr.rbxcdn.com/30DAY-AvatarHeadshot-${id}-Png/420/420/AvatarHeadshot/Png/noFilter`;
    }
}
