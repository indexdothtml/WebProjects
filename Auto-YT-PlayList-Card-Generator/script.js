function formatViews(viewsCount) {
    let formattedCount = '';
    if (viewsCount >= 1000 && viewsCount < 10000) {
        formattedCount = viewsCount.toString().slice(0, 1);
        return `${formattedCount}K views`;
    }
    else if(viewsCount >= 10000 && viewsCount < 100000) {
        formattedCount = viewsCount.toString().slice(0, 2);
        return `${formattedCount}K views`;
    }
    else if(viewsCount >= 100000 && viewsCount < 1000000) {
        formattedCount = viewsCount.toString().slice(0, 3);
        return `${formattedCount}K views`;
    }
    else if(viewsCount >= 1000000 && viewsCount < 10000000) {
        formattedCount = viewsCount.toString().slice(0, 1);
        return `${formattedCount}M views`;
    }
    else if(viewsCount >= 10000000 && viewsCount < 100000000) {
        formattedCount = viewsCount.toString().slice(0, 2);
        return `${formattedCount}M views`;
    }
    else if(viewsCount >= 100000000 && viewsCount < 1000000000) {
        formattedCount = viewsCount.toString().slice(0, 3);
        return `${formattedCount}M views`;
    } 
    else if(viewsCount >= 1000000000 && viewsCount < 10000000000) {
        formattedCount = viewsCount.toString().slice(0, 1);
        return `${formattedCount}B views`;
    }
    else if(viewsCount >= 10000000000 && viewsCount < 100000000000) {
        formattedCount = viewsCount.toString().slice(0, 2);
        return `${formattedCount}B views`;
    }
    else if(viewsCount >= 100000000000 && viewsCount < 1000000000000) {
        formattedCount = viewsCount.toString().slice(0, 3);
        return `${formattedCount}B views`;
    }
    else if(viewsCount >= 1000000000000) {
        formattedCount = viewsCount.toString().slice(0, 1);
        return `${formattedCount}T views`;
    }
    else {
        formattedCount = viewsCount.toString();
        return `${formattedCount} views`;
    }
}

function generateYTPlaylistCard(videoTitle, channelName, viewsCount, dateOfUpload, videoDuration, tumbnail) {
    
    // targeting container
    const container = document.querySelector(".container");

    // creating new card
    let card = document.createElement("div");
    card.style.height = "100px";
    card.style.backgroundColor = "#8080801f";
    card.style.display = "flex";
    card.style.gap = "10px";
    card.style.margin = "20px 0px 0px 0px";
    card.style.padding = "10px 0px 10px 25px";
    card.style.borderRadius = "10px";

    //Adding card in cotainer
    container.append(card);

    //Creating tumbnail image
    let tumbnailImage = document.createElement("img");
    tumbnailImage.setAttribute("src", tumbnail);
    tumbnailImage.style.borderRadius = "10px";

    //Creating division for image
    let divImg = document.createElement("div");
    divImg.style.position = "relative";

    //Adding tumbnail to divImg
    divImg.append(tumbnailImage);

    //Adding divImg image to card
    card.append(divImg);

    //Creating division for others except image.
    let div = document.createElement("div");

    //Adding div into card
    card.append(div);

    //Creating Title of card
    let title = document.createElement("p");
    title.innerText = videoTitle;
    title.style.fontWeight = "600";
    title.style.fontFamily = "Roboto";
    title.style.width = "600px";
    title.style.wordBreak = "break-all";

    //Adding Title to div
    div.append(title);

    //Creating division for channel name, views count and date of upload
    let divCNVD = document.createElement("div");
    divCNVD.innerHTML = `${channelName} &#183; ${formatViews(viewsCount)} &#183; ${dateOfUpload}`;
    divCNVD.style.fontSize = "12px";
    divCNVD.style.color = "#4f4d4d";

    //Adding divCNVD to div
    div.append(divCNVD);

    //Creating Video duration
    let vidTime = document.createElement("span");
    vidTime.innerText = videoDuration;
    vidTime.style.position = "absolute";
    vidTime.style.bottom = "10px";
    vidTime.style.right = "5px";
    vidTime.style.padding = "2px 4px";
    vidTime.style.backgroundColor = "#000000b5";
    vidTime.style.color = "white";
    vidTime.style.fontSize = "12px";
    vidTime.style.borderRadius = "5px";

    //Adding video duration into divImg
    divImg.append(vidTime);
}

generateYTPlaylistCard("Introduction to Node Js | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 57000, "3 months ago", "28:30", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

generateYTPlaylistCard("Flex Box CSS | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 545000000, "3 months ago", "15:30", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");

generateYTPlaylistCard("Grid CSS | Sigma Web Development Course - Tutorial #3", "CodeWithHarry", 755000000, "3 months ago", "12:30", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");