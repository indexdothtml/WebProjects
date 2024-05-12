// scroll animation for song name if text is overflowing the background

let currentSongName = document.querySelector(".currentSongName p");

let currentSongNameBackground = document.querySelector(".currentSongName");

if (currentSongName.clientWidth > currentSongNameBackground.clientWidth) {
    currentSongName.classList.add("scrollingAnimation");
}

// scroll animation for song name in song card if text is overflowing the background

let songNameInList = document.querySelectorAll(".songName p");

let songCardBackground = document.querySelectorAll(".songCard");

for (let index = 0; index < songCardBackground.length; index++) {
    if (songNameInList[index].clientWidth > songCardBackground[index].clientWidth) {
        songNameInList[index].classList.add("scrollingAnimation");
    }
}

// scroll animation for author name in song card if text is overflowing the background

let authorNameInList = document.querySelectorAll(".authorAndDuration>div:first-child p");

let authorNameDiv = document.querySelectorAll(".authorAndDuration>div:first-child");

for (let index = 0; index < authorNameDiv.length; index++) {
    if (authorNameInList[index].clientWidth > authorNameDiv[index].clientWidth) {
        authorNameInList[index].classList.add("scrollingAnimation");
    }
}

// scroll animation for playlist name and author Name if text is overflowing the background

let playListCards = document.querySelectorAll(".playlistCard");

let playListName = document.querySelectorAll(".playlistName p");

let authorName = document.querySelectorAll(".authorName p");

for (let index = 0; index < playListCards.length; index++) {
    if (playListName[index].clientWidth > playListCards[index].clientWidth) {
        playListName[index].classList.add("scrollingAnimation");
    }
    
    if (authorName[index].clientWidth > playListCards[index].clientWidth) {
        authorName[index].classList.add("scrollingAnimation");
    }   
}