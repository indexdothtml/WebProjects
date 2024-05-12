async function main() {

    async function getMusicData() {
        try {
            let data = await fetch("http://127.0.0.1:3000/data/music.json");
            let jsonData = await data.json();
            return jsonData;
        } catch (error) {
            console.log("something having problem buddy");
        }
    }

    function makePlaylistCard(name, author, cardId) {
        //creating background of playlist card
        let cardBackground = document.createElement("div");
        cardBackground.classList.add("playlistCard", "flex-column", "yAxisCenter");

        //creating image frame for playlist card and adding it into the background.
        let cardImage = document.createElement("div");
        cardImage.classList.add("playlistImage");

        //creating playlist name div for playlist card and adding it into the playlist background.
        let cardPlayListName = document.createElement("div");
        cardPlayListName.classList.add("playlistName");
        let playListName = document.createElement("p");
        cardPlayListName.append(playListName);
        playListName.innerText = name;

        //creating author name of playing and adding it into the playlist background.
        let cardPlayListAuthor = document.createElement("div");
        cardPlayListAuthor.classList.add("authorName");
        let authorName = document.createElement("p");
        cardPlayListAuthor.append(authorName);
        authorName.innerText = author;

        cardBackground.append(cardImage, cardPlayListName, cardPlayListAuthor);

        cardBackground.id = cardId;

        return cardBackground;
    }

    function makeSongCard(name, author) {
        //background of song card
        let songCardBackground = document.createElement("div");
        songCardBackground.classList.add("songCard");

        //Song name
        let songCardName = document.createElement("div");
        songCardName.classList.add("songName");
        let songName = document.createElement("p");
        songName.innerText = "Song Name is very very long";
        songCardName.append(songName);

        //Author Name and Duration
        let authorNameAndDurationBg = document.createElement("div");
        authorNameAndDurationBg.classList.add("authorAndDuration", "flex-row");
        let authorNameSongCard = document.createElement("div");
        let authorName = document.createElement("p");
        authorName.innerText = "Author Name is very very long";
        authorNameSongCard.append(authorName);
        let durationSongCard = document.createElement("div");
        let duration = document.createElement("p");
        duration.innerText = "00:00";
        durationSongCard.append(duration);
        authorNameAndDurationBg.append(authorNameSongCard, durationSongCard);


        songCardBackground.append(songCardName, authorNameAndDurationBg);

        return songCardBackground;
    }

    function fillSongsList(data, cardId) {

        console.log(cardId);
        let songs = document.querySelector(".songs");

        let allSongs = data.playlists[cardId].songs;
        
        for (let index = 0; index < allSongs.length; index++) {
            songs.append(makeSongCard(allSongs[index].name, allSongs[index].author))
        }
    }

    let musicData = await getMusicData();

    let playlists = document.querySelector(".playlists");

    let playlistCard = document.querySelectorAll(".playlistCard");

    // console.log(musicData);

    for (let index = 0; index < musicData.playlists.length; index++) {
        playlists.append(makePlaylistCard(musicData.playlists[index].name, musicData.playlists[index].author, index));
        // playlists.id = index;
        playlists.lastElementChild.addEventListener("click", (e) => {
            fillSongsList(musicData, e.id);
        })
    }

    // songs.append(makeSongCard());

    let playSongList = [];

    // console.log(playlists);

    // for (let index = 0; index < playlistCard.length; index++) {
    //     playlistCard[index].addEventListener("click", () => {
    //         console.log(index);
    //         playSongList = musicData.playlists[index].songs;
    //     });      
    // }

    // let areSongsInList = setInterval(() => {
    //     if (playSongList.length != 0) {
    //         console.log(playlistCard);
    //         return 0;
    //     }
    // }, 2000);

    // if (areSongsInList == 1) {
    //     clearInterval(areSongsInList);
    // }

    // playlistCard.forEach((card) => {
    //     card.addEventListener("click", (e) => {
    //         console.log(card);
    //     })
    // });

    // console.log(playlistCard);

    // makePlaylistCard();

    
    // playlists.append(makePlaylistCard());

    // playlists.append(makePlaylistCard());
    // playlists.append(makePlaylistCard());

    // playlists.append(makePlaylistCard());
    // playlists.append(makePlaylistCard());


// let playListCards = document.querySelectorAll(".playlistCard");

// let playListName = document.querySelectorAll(".playlistName p");

// let authorName = document.querySelectorAll(".authorName p");

// for (let index = 0; index < playListCards.length; index++) {
//     if (playListName[index].clientWidth > playListCards[index].clientWidth) {
//         playListName[index].classList.add("scrollingAnimation");
//     }
    
//     if (authorName[index].clientWidth > playListCards[index].clientWidth) {
//         authorName[index].classList.add("scrollingAnimation");
//     }   
// }

}

main();



