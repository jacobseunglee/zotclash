const IMAGES_TO_SHOW = 10
let numPairsShown = 0

myimg1 = document.getElementById("image1")
myimg2 = document.getElementById("image2")
text1 = document.getElementById("text1")
text2 = document.getElementById("text2")

function getStats() {
    fetch('../stats')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
}

function grabImgData(chosen) {

    if (chosen == 1) {
        fetch(`../inc?name=${text1.textContent}`)
    }
    else if (chosen == 2) {
        fetch(`../inc?name=${text2.textContent}`)
    }

    if (numPairsShown == IMAGES_TO_SHOW) { // Last choice selected!
        getStats();
        window.location.href = "../public/stats.html";
    }
    
    fetch(`../prompt?sid=${SESSION_ID.id}`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        choice1 = data.choices[0];
        choice2 = data.choices[1];

        if (text1 && text2 && myimg1 && myimg2) {
            text1.textContent = choice1.name;
            text2.textContent = choice2.name;
            myimg1.src = choice1.image;
            myimg2.src = choice2.image;

            numPairsShown++;
        }
        

        
        
    });

}

fetch('../session')
.then((response) => response.json())
.then((data) => {
    SESSION_ID = data;
    grabImgData('0') // Sets the initial state for the images and text fields
})