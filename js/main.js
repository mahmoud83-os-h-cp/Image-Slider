var slideImage = Array.from(document.querySelectorAll(".slider-container img"));


var slideCount = slideImage.length;

var cuurentIndex = 1;

var slideNumberElement = document.getElementById("slide-number");

var nextButtom = document.getElementById("next");
var prevButtom = document.getElementById("prev");

nextButtom.onclick = nextButtomF;
prevButtom.onclick = prevButtomF;

var paginationElement = document.createElement("ul");

paginationElement.setAttribute("id", "pagination-ul");

for (var i = 1; i <= slideCount; i++) {

    var paginationItem = document.createElement("li");


    paginationItem.setAttribute("data-index", i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");

var slideBollets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (var i = 0; i < slideBollets.length; i++) {

    slideBollets[i].onclick = function() {

        cuurentIndex = parseInt(this.getAttribute("data-index"));

        theCheck();
    }
}

theCheck();

function nextButtomF() {

    if (nextButtom.classList.contains("disabled")) {

        return false;
    } else {
        cuurentIndex++;
        theCheck();
    }
}

function prevButtomF() {

    if (prevButtom.classList.contains("disabled")) {

        return false;
    } else {

        cuurentIndex--;
        theCheck();
    }
}

function theCheck() {

    slideNumberElement.textContent = 'slide #' + cuurentIndex + ' off ' + slideCount;


    removeAll();

    slideImage[cuurentIndex - 1].classList.add("active");

    paginationCreatedUl.children[cuurentIndex - 1].classList.add("active");


    if (cuurentIndex == 1) {

        prevButtom.classList.add("disabled");

    } else {

        prevButtom.classList.remove("disabled");
    }

    if (cuurentIndex == slideCount) {

        nextButtom.classList.add("disabled");

    } else {

        nextButtom.classList.remove("disabled");
    }


}

function removeAll() {

    slideImage.forEach(function(img) {

        img.classList.remove("active");

    });

    slideBollets.forEach(function(bullet) {

        bullet.classList.remove("active");

    })
}