imgIndex = 0

chosenImgs = []


function grabImgData() {
    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((data) => {
        myimg1.src = data.dining_halls[0].image;
        myimg2.src = data.dining_halls[1].image;
    });

}

async function getImg(imgURL) {

    myimg1 = document.getElementById('image1');
    myimg2 = document.getElementById('image2');
    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((data) => {
        myimg1.src = data.dining_halls[0].image;
        myimg2.src = data.dining_halls[1].image;
    });


}
