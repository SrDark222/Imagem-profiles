function consultarImagem() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    const profileImage = document.getElementById('profileImage');

    if (usernameInput === '') {
        profileImage.style.display = 'none';
        return;
    }

    const imageUrl = `https://tr.rbxcdn.com/30DAY-AvatarHeadshot-${usernameInput}-Png/420/420/AvatarHeadshot/Png/noFilter`;
    profileImage.src = imageUrl;
    profileImage.style.display = 'block';
}
