imgIndex = 0

chosenImgs = []


async function getImg(imgURL) {

    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then((data) => console.log(data));

    myimg = document.getElementById('image1');
    chosenImgs.push(myimg.src);
    myimg.src = nextImg();
}


images = {
    'arc': 'https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1541539890535-UJ5P5NGX9C7XME811A6W/ARC+Overhead%2C+Source-+UCI+Campus+Recreation.jpg?format=2500w',
    'brandywine': 'https://www.henselphelps.com/wp-content/uploads/2020/04/UCI-Middle-Earth-Towers-c-Kevin-Scott_7.jpg'
}

imgNames = ['arc', 'brandywine'];

function nextImg() {

    let imgURL = images[ imgNames[imgIndex] ];
    imgIndex++;
    if (imgIndex == imgNames.length) {
        console.log('Last image!');
        console.log(chosenImgs);
    }
    return imgURL
}