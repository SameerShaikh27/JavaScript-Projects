// JavaScript for (Musiophile) Music Webapp player.
console.log("Musiophile - Connect your soul with music.")

// Storing all the songs name and their paths as an array inside the objects below.
const songs = [
    { songName: "A Sky Full of Stars - Coldplay", duration: "4:27", filepath: "songs/1.mp3" },
    { songName: "BadLiar - Imagine Dragons", duration: "4:20", filepath: "songs/2.mp3" },
    { songName: "Believer - Imagine Dragons", duration: "3:24", filepath: "songs/3.mp3" },
    { songName: "Demons - Imagine Dragons", duration: "2:57", filepath: "songs/4.mp3" },
    { songName: "Hymn for the Weekend - Coldplay", duration: "4:18", filepath: "songs/5.mp3" },
    { songName: "Paradise - Coldplay", duration: "4:38", filepath: "songs/6.mp3" },
    { songName: "Something Just Like This - Coldplay", duration: "4:07", filepath: "songs/7.mp3" },
    { songName: "Thunder - Imagine Dragons", duration: "3:07", filepath: "songs/8.mp3" },
    { songName: "Up & Up - Coldplay", duration: "4:10", filepath: "songs/9.mp3" },
    { songName: "Whatever It Takes - Imagine Dragons", duration: "3:21", filepath: "songs/10.mp3" },
]


// Initializing or creating variables.

// Below we have created "songIndex" variable so that we can identify songs using index.
let songIndex = 0;
// Initializing an "Audio" by giving the path of the song that you want to hear.
let newAudio = new Audio("songs/1.mp3");
// Fetching the (main play button) with the help of "masterPlay" id.
let masterPlay = document.getElementById("masterPlay");
// Fetching the (previous button) with the help of "previous" id.
let previous = document.getElementById("previous");
// Fetching the (next button) with the help of "next" id.
let next = document.getElementById("next");
// Fetching the (music progressbar) with the help of "musicTime" id.
let musicTime = document.getElementById("musicTime");
// Fetching the (image of gif) with the help of "giffy" id.
let giffy = document.getElementById("giffy");
// Fetching the song name which is present just above the "musicTime" progressbar with the help of "masterSongName" id.
let masterSongName = document.getElementById("masterSongName");
// Fetching the (songItem) container in the dom with the help of "songItem" id.
let songItems = document.getElementsByClassName("songItem");
// Fetching the play icon button from the dom present inside the "songItem" container with the help of "songPlay" class.
let songPlay = document.getElementsByClassName("songPlay");


// Creating a "makeAllPlay" function. To convert all the "pause" icon button into "play" icon button.
const makeAllPlay = () => {
    // Looping through play icon button from the dom present inside the "songItem" container.
    Array.from(songPlay).forEach((element) => {
        // Below, we are removing the "pause" icon button and adding a "play" icon button to all the (i) tag which contains "songPlay" class so that whenever user clicks on the "play" icon button it converts all the "pause" icon button into "play" icon button. Simply means when user plays a new song it will automatically stop the previously playing song.
        element.classList.remove("bi-pause-fill");
        element.classList.add("bi-play-fill");
    });
};


// Looping through the div container named "songItem" in the dom. 
Array.from(songItems).forEach((element, i) => {
    // Fetching the "h2" tag in which we have given the "songName" class so that we can change the innerText of it and makes it equal to the "songName" from above's "song" container.
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // Fetching the "p" tag in which we have given the "songDuration" class so that we can change the innerText of it and makes it equal to the "duration" of the songs from above's "song" container.
    element.getElementsByClassName("songDuration")[0].innerText = songs[i].duration;
});

// Looping through play icon button from the dom present inside the "songItem" container.
Array.from(songPlay).forEach((element) => {
    element.addEventListener("click", (e) => {
        // Running a "makeAllPlay();" function
        makeAllPlay();
        // Below, we are removing the "play" icon when user clicks on the play icon button and replacing it with the "pause" icon button.
        e.target.classList.remove("bi-play-fill");
        e.target.classList.add("bi-pause-fill");
        // Below, we are fetching the index numbers which is present inside the id that we have given to (i) tag of "songItem" container of dom. We have used "parseInt" to fetch index number in the form of integer.
        songIndex = parseInt(e.target.id);
        // Below, we are changing the song and it's path according to the index number that we have fetched above.
        newAudio.src = `songs/${songIndex + 1}.mp3`
        // Below, we are inserting the name of the song inside the "masterSongName". We are fetching the name of the song from the above "songs" array.
        masterSongName.innerText = songs[songIndex].songName;
        // playing the song
        newAudio.play();
        // Below, we have given the value of currentTime as "0" so that the music will start playing from "0".  
        newAudio.currentTime = 0;
        // Below we are also removing the main "play" icon button and adding the main "pause" icon button from the "musicTime" progressbar whenever user clicks on the "play" button beside the song name. 
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
        // Adding the opacity of (1) to the "beats gif" in the dom to make it appear when user play the song.
        giffy.style.opacity = 1;
    });
});


// Listening to Various Events

// Running a various functions whenever user clicks on the main play button.
masterPlay.addEventListener("click", () => {
    // Below code means, if the audio is "paused" or user haven't played the song yet then run the following function.
    if (newAudio.paused || newAudio.currentTime <= 0) {
        // Below we are playing the audio. Also removing the class of "play" icon then adding the class of "pause" icon.
        newAudio.play();
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
        // Adding the opacity of (1) to the "beats gif" in the dom so that we can see it when user plays the song.
        giffy.style.opacity = 1;
    }
    // Below code means, if the audio is "playing" then run the following function. 
    else {
        // Below we are pausing the audio. Also removing the class of "pause" icon then adding the class of "play" icon.
        newAudio.pause();
        masterPlay.classList.remove("bi-pause-circle-fill");
        masterPlay.classList.add("bi-play-circle-fill");
        // Adding the opacity of (0) to the "beats gif" in the dom to hide it when user pause the song.
        giffy.style.opacity = 0;
    }
});

// Updating the time of the music on the "musicTime" progressbar.
newAudio.addEventListener("timeupdate", () => {
    // Below we are fetching the progress of the audio in percentage. (Means abhi tak kitna audio run ho chuka hai)
    // We are also using the "parseInt" because we want the value to be integer.
    // Formula to find the percentage of audio: MT = CT/D*100
    audioProgress = parseInt(newAudio.currentTime / newAudio.duration * 100);
    // Below we are setting the value of "musicTime" progressbar equals to the value that we fetched above in percent. 
    musicTime.value = audioProgress;

});

// Adding an event listener of "change" to the "musicTime" progressbar so that we can change the timing of song.
musicTime.addEventListener("change", () => {
    // Below we are fetching the "currentTime" of the audio. On the (rhs) is the formula to find the "currentTime".
    // Formula to find the currentTime of audio: CT = MT*D/100
    newAudio.currentTime = parseInt(musicTime.value * newAudio.duration / 100);
});

// Adding a "click" event listener and running a particular function when user clicks on the "previous" icon.
previous.addEventListener("click", () => {
    // Below code means, if (songIndex) is less than or equals to "0" then play the song which contains "0" index number.
    // Else decrease the (songIndex) by "-1" to go to the previous song.
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    // Below, we are changing the song and it's path according to the index number that we have fetched above.
    newAudio.src = `songs/${songIndex + 1}.mp3`
    // Below, we are inserting the name of the song inside the "masterSongName". We are fetching the name of the song from the above "songs" array.
    masterSongName.innerText = songs[songIndex].songName;
    // playing the song
    newAudio.play();
    // Below, we have given the value of currentTime as "0" so that the music will start playing from "0".  
    newAudio.currentTime = 0;
    // Below we are also removing the main "play" icon button and adding the main "pause" icon button from the "musicTime" progressbar whenever user clicks on the "play" button beside the song name. 
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    // Adding the opacity of (1) to the "beats gif" in the dom to make it appear when user play the song.
    giffy.style.opacity = 1;

});

// Adding a "click" event listener and running a particular function when user clicks on the "next" icon.
next.addEventListener("click", () => {
    // Below code means, if (songIndex) is greater than or equals to "9" then play song which contains "0" index number.
    // Else increase the (songIndex) by "+1" to go to the next song.
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    // Below, we are changing the song and it's path according to the index number that we have fetched above.
    newAudio.src = `songs/${songIndex + 1}.mp3`;
    // Below, we are inserting the name of the song inside the "masterSongName". We are fetching the name of the song from the above "songs" array.
    masterSongName.innerText = songs[songIndex].songName;
    // Playing the song.
    newAudio.play();
    // Below, we have given the value of currentTime as "0" so that the music will start playing from "0".  
    newAudio.currentTime = 0;
    // Below we are also removing the main "play" icon button and adding the main "pause" icon button from the "musicTime" progressbar whenever user clicks on the "play" button beside the song name. 
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
    // Adding the opacity of (1) to the "beats gif" in the dom to make it appear when user play the song.
    giffy.style.opacity = 1;
});