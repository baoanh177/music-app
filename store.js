const initSong = [
    {
        name: "Anh đã ổn hơn",
        singer: "MCK",
        path: "./assets/music/music-1.mp3",
        image: "./assets/img/anhdaonhon-mck.png",
    },
    {
        name: "Luôn yêu đời",
        singer: "Den vau",
        path: "./assets/music/music-2.mp3",
        image: "./assets/img/den.jpg",
    },
    {
        name: "Ex's hate me",
        singer: "AMEE x B RAY",
        path: "./assets/music/music-3.mp3",
        image: "./assets/img/amee.webp",
    },
    {
        name: "Nước mắt em lau bằng tình yêu mới",
        singer: "Da LAB",
        path: "./assets/music/music-4.mp3",
        image: "./assets/img/dalab.jpg",
    },
    {
        name: "Cho mình em",
        singer: "BINZ x DEN",
        path: "./assets/music/music-5.mp3",
        image: "./assets/img/binz.jpg",
    },
    {
        name: "Thích quá rùi nà",
        singer: "Trung trần x Tlinh",
        path: "./assets/music/music-6.mp3",
        image: "./assets/img/trungtran.jpg",
    },
    {
        name: "Nếu lúc đó",
        singer: "Tlinh",
        path: "./assets/music/music-7.mp3",
        image: "./assets/img/tlinh.jpg",
    },
    {
        name: "Thằng điên",
        singer: "Justatee x Phương Ly",
        path: "./assets/music/music-8.mp3",
        image: "./assets/img/thangdien.jpg",
    },
    {
        name: "Tao có khiên",
        singer: "Bomman",
        path: "./assets/music/music-9.mp3",
        image: "./assets/img/bomman.webp",
    }
]

const storeSongs = JSON.parse(localStorage.getItem("Songs"))

export const songs = [...initSong, ...storeSongs]
