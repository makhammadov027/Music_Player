const musicMenu = document.querySelector('#style')
    musicPlayer = document.querySelector('.music-display')

// music data
const musicData = [
    {
        id: 1,
        musicAuthor: 'Jaloliddin Axmadaliyev',
        image: '../music-date/Jalolllll.jpg',
        musicName: 'Sogindim',
        url: '../music-date/jaloliddin_ahmadaliyev_sog_indim_remiix_48.mp3'
    },
    {
        id: 2,
        musicAuthor: 'Ummon',
        image: '../music-date/ummon.jpg',
        musicName: 'Janonima Remix',
        url: '../music-date/jaloliddin_ahmadaliyev_janonim_remix_21.mp3'
    },
    {
        id: 3,
        musicAuthor: 'Xamdan Sobirov',
        image: '../music-date/xamdan sobirov.jpg',
        musicName: 'Qora Kapalak',
        url: '../music-date/Qora kapalak.mp3'
    },
    {
        id: 4,
        musicAuthor: 'Toby Morrow',
        image: '../music-date/toby.jpg',
        musicName: 'Linght It Up',
        url: '../music-date/Robin Hustin x TobiMorrow - Light It Up (feat. Jex).mp3'
    },
    {
        id: 5,
        musicAuthor: 'Patrick Drowie',
        image: '../music-date/Patrik.jpg',
        musicName: 'DNightcore★_Goblins_from_Mars',
        url: '../music-date/Nightcore★_Goblins_from_Mars_Patrick_Drowie_Somewhere_sorokam_ru.mp3'
    },
    {
        id: 6,
        musicAuthor: 'Xamdan Sobirov',
        image: '../music-date/xamdan sobirov.jpg',
        musicName: 'Maktabimda',
        url: '../music-date/Xamdam Sobirov - Maktabimda (audio 2021).mp3'
    },
   
   

]

musicData.forEach(item => {
    musicMenu.innerHTML += `
        <li>${item.musicName}</li>
    `
    
})

const lists = document.querySelectorAll('li')
for( let i = 0; i <= lists.length; i++){
    lists[i].addEventListener('click', () => {
        musicPlayer.innerHTML = `
        <div class="img">
        <h3 class="author">${musicData[i].musicAuthor}</h3>
        <img src="${musicData[i].image}" alt="error music">
        </div>
        <audio controls autoplay>
        <source src="${musicData[i].url}" type="audio/mpeg">
        </audio>
        `
    })
}