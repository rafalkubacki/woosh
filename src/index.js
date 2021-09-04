import 'main.css';
const woosh = 'https://i.imgur.com/QpKUKVt.png';
const magic = 'https://i.imgur.com/NxYLiWJ.png';
const embed = 'dQw4w9WgXcQ';

const p = document.createElement('div');
p.id = 'player';
p.classList.add('woosh-video');
document.body.appendChild(p);

document.body.innerHTML += `<img class="woosh-image woosh-image--1" src="${magic}">`;
document.body.innerHTML += `<img class="woosh-image woosh-image--2" src="${magic}">`;
document.body.innerHTML += `<img class="woosh-image woosh-image--3" src="${magic}">`;
document.body.innerHTML += `<img class="woosh-hero" src="${woosh}">`;

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onload = () => {
    let player;
    player = new YT.Player('player', {
        height: '1920',
        width: '1080',
        videoId: embed,
        playerVars: {
            modestbranding : 1,
            showinfo : 0,
            autoplay: 0,
            rel: 0,
            playsinline: 1,
            controls: 0,
            mute: 1,
            loop: 1,
        },
    });

    setTimeout(() => {
        player.playVideo();
    }, 5500);

    setTimeout(() => {
        document.querySelector('.woosh-video').style.opacity = 1;
    }, 6000);
}