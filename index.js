
// margin and padding 0 for all elements

const allElements = document.querySelectorAll('*');

for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.margin = '0';
    allElements[i].style.padding = '0';
}


// create Parent Div

// + Child Div for selected imgs && + Child Div for listed imgs

const parentDiv = document.createElement('div');
const divSelected = document.createElement('div');
const divListed = document.createElement('div');

document.body.append(parentDiv);
parentDiv.appendChild(divSelected);
parentDiv.appendChild(divListed);

parentDiv.classList.add('parentDiv', 'div');
divSelected.classList.add('selected', 'div');
divListed.classList.add('listed', 'div');


// add styles for Divs

parentDiv.style.cssText =
    `    width: 1300px;
height: 900px;
justify-content: center;
align-items: center;
display: grid;
background-color: red;`

divListed.style.cssText =
    `display: inline-block;`


// add Array of imgs

const imgs = [

    'https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london-1068x641.jpg',

    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg',

    'https://media.cntraveller.com/photos/6220bfe35e6084e5d4f02404/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg',

    'https://www.berlin.de/binaries/asset/image_assets/6340464/ratio_2_1/1685015071/1500x750/',

];

// add main img which was selected

let selectedImg = new Image();

selectedImg.classList.add('selected', 'img');

function handleListedImgClick(index) {
    selectedImg.src = imgs[index];
}

divSelected.appendChild(selectedImg);

// set any of imgs as default in Div for selected img

const defaultIndex = 0;

handleListedImgClick(defaultIndex); 

// add styles for main img (in Div for selected img)

function imgStyle (element, width, height, border, cursor = 'auto') {
    element.style.cssText = `
    width: ${width}px;
    height: ${height}px;
    border: ${border};
    cursor: ${cursor}`;
}

imgStyle(selectedImg, 1260, 640, '10px solid red');

// img.selected:hover

selectedImg.addEventListener('mouseenter', function() {
    imgStyle(selectedImg, 1260, 640, '10px solid blue');
});

selectedImg.addEventListener('mouseleave', function() {
    imgStyle(selectedImg, 1260, 640, '10px solid red');
});

// add listed img

imgs.forEach(function (imageSrc, index) {

    const listedImg = new Image();
    listedImg.src = imageSrc;
    listedImg.classList.add('listed', 'img');

    listedImg.addEventListener('click', function () {
        handleListedImgClick(index);
    });

    listedImg.addEventListener('load', function () {
        divListed.appendChild(listedImg);

        imgStyle(listedImg, 300, 200, '10px solid red;');

        listedImg.addEventListener('mouseenter', function() {
            imgStyle(listedImg, 300, 200, '10px solid blue', 'pointer');
        });
        
        listedImg.addEventListener('mouseleave', function() {
            imgStyle(listedImg, 300, 200, '10px solid red');
        });

    });


});

