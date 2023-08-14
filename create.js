const songNameInput = document.getElementById('song-name')
const authorInput = document.getElementById('author')
const songInput = document.getElementById('song')
const thumbInput = document.getElementById('thumb')
const submitBtn = document.querySelector('.submitBtn')

let songData = {
    name: "",
    singer: "",
    path: "",
    image: ""
}

submitBtn.onclick = e => {
    e.preventDefault()
    if(songNameInput != "" && songInput != "") {
        const songPath = songInput.value.slice(12)
        const imgPath = thumbInput.value.slice(12)
        songData = {
            name: songNameInput.value,
            singer: authorInput.value ?? "Unknown",
            path: `./assets/music/${songPath}`,
            image: thumbInput.value ? `./assets/img/${imgPath}` : ''
        }
        localStorage.setItem("Songs", JSON.stringify([...songs, songData]))
    }
    console.log(songData)
}

