const IMAGES_TO_SHOW = 10
let numPairsShown = 0

function grabImgData() {

    if (numPairsShown == IMAGES_TO_SHOW) { // Last choice selected!
        window.location.href = "http://localhost:3000/stats.html";
    }

    myimg1 = document.getElementById("image1")
    myimg2 = document.getElementById("image2")
    text1 = document.getElementById("text1")
    text2 = document.getElementById("text2")
    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((data) => {

        

        choice1 = data.choices[0];
        choice2 = data.choices[1];

        text1.textContent = choice1.name;
        text2.textContent = choice2.name;

        myimg1.src = choice1.image;
        myimg2.src = choice1.image;

        numPairsShown++;
        
    });

}

grabImgData() // Sets the initial state for the images and text fields