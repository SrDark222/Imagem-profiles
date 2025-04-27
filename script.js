function consultarImagem() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    const profileImage = document.getElementById('profileImage');

    if (usernameInput === '') {
        profileImage.style.display = 'none';
        return;
    }

    const imageUrl = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${usernameInput}&size=420x420&format=Png&isCircular=true`;

    fetch(imageUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data[0] && data.data[0].imageUrl) {
                profileImage.src = data.data[0].imageUrl;
                profileImage.style.display = 'block';
            } else {
                alert('Usuário não encontrado!');
                profileImage.style.display = 'none';
            }
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao buscar imagem!');
            profileImage.style.display = 'none';
        });
}
