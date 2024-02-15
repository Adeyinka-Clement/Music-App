let element = ""
async function Fetch() {
    let  url = 'https://musicapi-19wk.onrender.com/music/myAPI'
    let response = await fetch(url);
    let songDetail = await response.json();
    // console.log(songDetail);

    for (let index = 0; index < songDetail.length; index++) {
        element = songDetail[index];

        document.getElementById("ul").innerHTML +=  `
        <div class=" px-2 w-100 bg-body-tertiary p-1 mt-2 rounded-4 musiclist d-flex">
        <button id="Play" onclick="play('${element}')"></i>
        <img style="width: 18px;" src="play-solid.svg" alt="">
        </button>
        <button style="display: none;" id="Pause" onclick="pause('${element}')"></i>
        <img style="width: 18px;" src="pause-solid.svg" alt="">
        </button>
        <img class="mt-2 ms-2 rounded-circle" style="height: 50px; width:50px;" src="${element.songImage}" alt="">
       <div class="name ms-3">
        <h6 class="mt-3 "><b>${element.songTitle}</b></h6>
        <small class="mt-5 small">${element.artistName}</small>
       </div>

      </div>`
        
    }
}
Fetch();    
function play (song) {
    console.log(song.artistName);
    var mus = new Audio(song.songUrl)
    mus.play();
    Play.style.display = "none"
    Pause.style.display = "block"
    console.log(song);
    let audioElement = new Audio(song.songUrl);
    audioElement.onloadedmetadata = function() {
        // Access the duration of the audio file
        let durationInSeconds = Math.round(audioElement.duration);
        audioElement.addEventListener('timeupdate', function() {
            let currentTime = audioElement.currentTime;
            console.log(currentTime); // Log the current time elapsed or update the UI
        });
        duramin = Math.floor(durationInSeconds / 60)
        durasec = durationInSeconds % 60
        Lenght.innerHTML = duramin + ":" + durasec
    };
     
    artistname.innerHTML = song.artistName
    
    
}

// function pause(song){
//     Fetch();
//     var mus = new Audio(song)
//     mus.pause();
//     Play.style.display = "block"
//     Pause.style.display = "none"
// }



















let menu = document.getElementById("menu")
menu.addEventListener("click",  () =>{
    card.style.display = "none !important"
    card.style.display = "none"
    last.style.transition = 'none';
    last.style.transform = "translateY(-1vh)";
    rangelast.style.display = "flex"
    
      setTimeout(() => {
        last.style.transition = ''; 
    }, 100); 
});
let foot = document.getElementById("last")
foot.addEventListener("drag",  () =>{
    last.style.transition = 'transform 1.1s ease-in';
    last.style.transform = "translateY(-78vh)";
    card.style.display = "block"
    rangelast.style.display = "none"
})

let foot2 = document.getElementById("foot")
foot2.addEventListener("click",  () =>{
    last.style.transform = "translateY(-78vh)";
    card.style.display = "block"
    // last.style.marginTop = "-5vh"
    rangelast.style.display = "none"


    
})