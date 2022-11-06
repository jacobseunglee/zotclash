const IMAGES_TO_SHOW = 10
let numPairsShown = 0



myimg1 = document.getElementById("image1")
myimg2 = document.getElementById("image2")
text1 = document.getElementById("text1")
text2 = document.getElementById("text2")

function grabImgData(chosen) {

    if (chosen == 1) {
        fetch(`http://localhost:3000/inc?name=${text1.textContent}`)
    }
    else if (chosen == 2) {
        fetch(`http://localhost:3000/inc?name=${text2.textContent}`)
    }

    if (numPairsShown == IMAGES_TO_SHOW) { // Last choice selected!
        fetch('http://localhost:3000/stats')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            stats = data
        })
        
        window.location.href = "http://localhost:3000/stats.html";
    }

    fetch(`http://localhost:3000/prompt?sid=${SESSION_ID.id}`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        choice1 = data.choices[0];
        choice2 = data.choices[1];

        text1.textContent = choice1.name;
        text2.textContent = choice2.name;

        myimg1.src = choice1.image;
        myimg2.src = choice2.image;

        numPairsShown++;
        
    });

}

fetch('http://localhost:3000/session')
.then((response) => response.json())
.then((data) => {
    SESSION_ID = data;
    grabImgData('0') // Sets the initial state for the images and text fields
})