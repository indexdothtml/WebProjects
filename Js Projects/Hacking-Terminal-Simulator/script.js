let allTexts = document.querySelectorAll(".all");


// Initial making all paragraphs invisible.
allTexts.forEach((e) => {
    e.style.display = "none";
})

async function main() {

    // Initialization
    let lastChild = document.querySelector(".output").lastElementChild;
    let dots = document.createElement("span");

    // Show the dots with 200 ms interval until next sibling element not starts.
    setInterval(() => {
        // If Text full with 3 dots reset again and starts adding dots. It will avoid adding dots more than 3.
        if (dots.innerText.endsWith("...")) {
            dots.innerText = dots.innerText.slice(0, 0);
        }
        else {
            dots.innerText = dots.innerText + ".";
        }
    }, 200);

    // Iterate each child element which is inside console class element.
    for (let index = 0; index < allTexts.length; index++) {
        const element = allTexts[index];
        if (index == 0) {
            //For first text delay is fixed for 1.5 sec.
            await delay(1500).then(async (resolved) => {
                await renderCharacters({ text: element.innerText });
            });

        }
        else {
            //Other than first element delay will be in between 1 to 7 randomly.
            let randomTime = (Math.ceil(Math.random() * 7)) * 1000;
            await delay(randomTime).then(async (resolved) => {
                await renderCharacters({ text: element.innerText });
            });

        }

        //After Rendering text in output class element as a child element. It will be picked as last child in which dots are appened.
        lastChild = document.querySelector(".output").lastElementChild;
        dots = document.createElement("span");
        lastChild.append(dots);

        //To clear the dots from previous rendered text, the previous element from dom is selected and again initialized with original text from console class element.
        let preElement = document.querySelector(".output").lastElementChild.previousElementSibling;

        //If any single dot present in last element from output class then it will be removed.
        //the dot will be removed by changing innerHTML of previous element sibling of current element with original html text from console class element.
        if (preElement.innerText.endsWith(".")) {
            let element = allTexts[index - 1];
            preElement.innerText = element.innerText;
        }

    }

    //For last text the dots are removed after 2 sec of delay.
    setTimeout(() => {
        lastChild.removeChild(dots);
    }, 2000);

}

//START FUNCTION.
main();


//UTILITY FUNCTIONS.

//Make the Text visible from left to right, character by character.
async function renderCharacters({ start = "LeftToRight", text = "" }) {

    //For each text seperate div is added in output element and inside the div text will be rendered.
    let outputDom = document.querySelector(".output");
    let div = document.createElement("div");
    outputDom.append(div);

    if (start === "RightToLeft") {

        for (let index = (text.length) - 1; index >= 0; index--) {
            const element = text.charAt(index);
            let spanElement = createSpan(element);
            div.append(spanElement);
            await delay(100).then((resolved) => {
                spanElement.style.display = "inline-block";
            });
        }

    }
    else {

        //Each chracter from text is taken and display inline-block style is added with 100 ms delay in between each character.
        for (let index = 0; index < text.length; index++) {
            const element = text.charAt(index);
            //For each character the seperate span is created. To apply the styles.
            let spanElement = createSpan(element);
            div.append(spanElement);
            await delay(100).then((resolved) => {
                spanElement.style.display = "inline-block";
            });
        }

    }
}

//The createSpan function will create span element for each chracter from text and add the text in span.
function createSpan(element) {
    let charBlock = document.createElement("span");
    charBlock.innerHTML = element;
    return charBlock;
}

//delay function will add delay in between execution of script where you want the delay to be.
async function delay(inputDelayTime) {

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, inputDelayTime);
    });

}


