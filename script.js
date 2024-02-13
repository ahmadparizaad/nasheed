var arr = [
    {name: "Kun Anta", duration: "4:43", url: "./nasheed/Kun_Anta.mp3", img: "./nasheed/kun-anta-slowed-reverb-mp3-download.jpg"},
    {name: "Liakun Yawmuka", duration: "2:37", url: "./nasheed/liyakun-yawmuka-nasheed.mp3", img: "https://imgs.search.brave.com/3FXmBX4ZIb-H3HTyuZMfjbsYyOUFN6FLSdeyMXq7W3s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDM4/ODIxMTM5NC01N29h/eW8tdDUwMHg1MDAu/anBn"},
    {name: "Taweel Al Shawqi", duration: "6:09", url: "./nasheed/Al-Shawqi.mp3", img: "https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Hadidja Ya Rabbi Shukran", duration: "5:02", url: "./nasheed/hadidja.mp3", img: "https://plus.unsplash.com/premium_photo-1677532567589-29af91a451c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGlzbGFtfGVufDB8fDB8fHww"},
    {name: "Tasbih", duration: "3:25", url: "./nasheed/Tasbih.mp3", img: "https://images.pexels.com/photos/2233416/pexels-photo-2233416.jpeg?auto=compress&cs=tinysrgb&w=600"}
]

let list = document.querySelector("#list")
let left = document.querySelector("#left")
let backward = document.querySelector("#backward")
let play = document.querySelector("#play")
let forward = document.querySelector("#forward")

// backward.style.opacity = "0.5"


let audio = new Audio()

let selected = 0

function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="card" id=${index}>
    <div class="inner-card">
        <img src=${elem.img} alt="">
        <h3>${elem.name}</h3>
    </div>
    <h6>${elem.duration}</h6>
</div>`
    })
    list.innerHTML = clutter

    audio.src = arr[selected].url
    left.style.backgroundImage = `url(${arr[selected].img})`
}
mainFunction()

list.addEventListener("click", function (e) {
    selected = e.target.id
    audio.src = arr[selected].url
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    left.style.backgroundImage = `url(${arr[selected].img})`
    audio.play()
})

var flag = 0

play.addEventListener("click", function () {
    if (flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        audio.play()
        flag = 1
    } else {
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function () {
    if(selected < arr.length - 1){
        selected++
        audio.src = arr[selected].url
        left.style.backgroundImage = `url(${arr[selected].img})`
        audio.play()
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        if(selected > 0){
            backward.style.opacity = "1"
        }
        if(selected == arr.length - 1){
            forward.style.opacity = "0.5"
        }
    }
})

backward.addEventListener("click", function () {
    if(selected > 0){
        selected--
        audio.src = arr[selected].url
        left.style.backgroundImage = `url(${arr[selected].img})`
        audio.play()
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        if(selected < arr.length -1){
            forward.style.opacity = "1"
        }
        if(selected == 0){
            backward.style.opacity = "0.5"
        }
    }
})