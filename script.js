Test.value = 0;
TestIn.value = 0;
async function Fetch() {
    let url = 'https://musicapi-19wk.onrender.com/music/myAPI';
    let response = await fetch(url);
    let songDetail = await response.json();
    
    for (let index = 0; index < songDetail.length; index++) {
        let element = songDetail[index];
        document.getElementById("ul").innerHTML += `
            <button  onclick="playing(${index})" class="shadow-sm all px-2 w-100 bg-body-tertiary p-1 mt-2 rounded-4 musiclist">
                <img class=" songimg mt-2 ms-2 rounded-circle" style="height: 50px; width:50px;" src="${element.songImage}" alt="">
                <div class="name ms-3">
                <h6 class="mt-1"><b>${element.songTitle}</b></h6>
                <small class="mt-1 small text-dark">${element.artistName}</small>
                </div>
                </button>`;
            }
        }   
Fetch();


let mus = ""
let currentTime = "";
let duramin = ""
let durationInSeconds = ""
let current = ""
var currentSong = null;

async function playing(index) {
    pauseimg.style.display = "flex"
    pausetwo.style.display = "flex"
    let songDetail = await fetch('https://musicapi-19wk.onrender.com/music/myAPI');
    songDetail = await songDetail.json();
    let song = songDetail[index];
    mus = new Audio(song.songUrl)
    mus.play();
    naame.innerHTML = song.songTitle
    artistname.innerHTML = song.artistName
    coverIn.innerHTML =`<img src="${song.songImage}" alt="" style="height:200px; width:200px;" class="rounded-circle">`
    console.log(song);
    const audio = mus;

setInterval(() => {
 currentTime = Math.ceil(audio.currentTime);
 currentTime2 = Math.ceil(audio.currentTime);

//   console.log(currentTime);
//   console.log(durationInSeconds);
  console.log((currentTime / durationInSeconds) * 100);
  current = (currentTime / durationInSeconds) * 100
  if(currentTime >= 60){
      var min = Math.floor(currentTime / 60)
      currentTime = min + ":" + currentTime % 60
}
else{
    currentTime = 0 + ":" + currentTime
}
console.log();
if (currentTime2 > 1) {
    Test.value = current
    TestIn.value = current
}
lenghtCurrent.innerHTML = currentTime
lenghtCurrentIn.innerHTML = currentTime

}, 1);

testeqn = document.getElementById("Test")
testeqn.addEventListener("input", () => {
    var seekTime = mus.duration * (document.getElementById("Test").value / 100);
    mus.currentTime = seekTime;
});

testeqn2 = document.getElementById("TestIn")
testeqn2.addEventListener("input", () => {
    var seekTime = mus.duration * (document.getElementById("TestIn").value / 100);
    mus.currentTime = seekTime;
});
    let audioElement = new Audio(song.songUrl);
    audioElement.onloadedmetadata = function() {
        durationInSeconds = Math.round(audioElement.duration);
        audioElement.addEventListener('timeupdate', function() {
            let currentTime = audioElement.currentTime;
            console.log(currentTime); // Log the current time elapsed or update the UI
        });
        duramin = Math.floor(durationInSeconds / 60)
        durasec = durationInSeconds % 60
        Lenght.innerHTML = duramin + ":" + durasec
        LenghtIn.innerHTML = duramin + ":" + durasec
        
    };
}
    
    const pauseimgeqn = document.getElementById("pauseimg")
    pauseimgeqn.addEventListener("click", ()=>{
        mus.pause()
        pausetwo.style.display = "none"
        playtwo.style.display = "flex"
        pauseimg.style.display = "none"
        playimg.style.display = "flex"
        
    })
    
    const playimgeqn = document.getElementById("playimg")
    playimgeqn.addEventListener("click", ()=>{
        mus.play()
        pauseimg.style.display = "flex"
        playimg.style.display = "none"
        pausetwo.style.display = "flex"
        playtwo.style.display = "none"
        
    })

const pauseimgeqn2 = document.getElementById("pausetwo")
pauseimgeqn2.addEventListener("click", ()=>{
    mus.pause()
    pausetwo.style.display = "none"
    playtwo.style.display = "flex"
    pauseimg.style.display = "none"
    playimg.style.display = "flex"
})

const playimgeqn2 = document.getElementById("playtwo")
playimgeqn2.addEventListener("click", ()=>{
    mus.play()
    pausetwo.style.display = "flex"
    playtwo.style.display = "none"
    pauseimg.style.display = "flex"
    playimg.style.display = "none"
})






















let menu = document.getElementById("menu");
let last = document.getElementById("last");
let card = document.getElementById("card");
let rangelast = document.getElementById("rangelast");

menu.addEventListener("click", () => {
  // Fade out card
  card.style.opacity = '1';
  // Hide card after the fade out transition completes
  setTimeout(() => {
    card.style.display = "none";
  }, 1000); // Adjust timing to match the transition duration

  last.style.transform = "translateY(-1vh)"; // Initial transformation
  last.style.height = "90vh"; // Set height

  // Display rangelast
  rangelast.style.display = "flex";
  // Fade in rangelast
  setTimeout(() => {
    rangelast.style.opacity = '1';
  }, 100);

  // Reset transition after a delay
  setTimeout(() => {
    last.style.transition = '';
  }, 100);
});

let foot2 = document.getElementById("foot");
foot2.addEventListener("click", () => {
  last.style.transform = "translateY(-78vh)"; // Restore original position

  // Fade out rangelast
  rangelast.style.opacity = '0';
  // Hide rangelast after the fade out transition completes
  setTimeout(() => {
    rangelast.style.display = "none";
  }, 1000); // Adjust timing to match the transition duration

  // Fade in card
  card.style.opacity = '1';
  card.style.display = "block"; // Show card
});


let foot = document.getElementById("last")
foot.addEventListener("drag",  () =>{
    last.style.transition = 'transform 1.1s ease-in';
    last.style.transform = "translateY(-78vh)";
    card.style.display = "block"
    rangelast.style.display = "none"
})