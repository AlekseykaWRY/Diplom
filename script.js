

// function setBodyMarginTop() {
//     var headerHeight = document.querySelector('header').offsetHeight;
//     document.body.style.marginTop = headerHeight * 1.1 +'px';
// }
// window.addEventListener('load', setBodyMarginTop);
// window.addEventListener('resize', setBodyMarginTop);


// window.addEventListener('scroll', function() {
//     let value = window.scrollY;
//     let greenYellowLines = document.querySelectorAll('.green_line, .yellow_line');
//     let num = (0.0 + value * 0.006).toFixed(2);
//     num = Math.min(Math.max(num, 0.0), 1);

//     greenYellowLines.forEach(line => {
//         line.style.transformOrigin = 'left center';
//         line.style.transform = `scaleX(${num})`;
//         line.style.opacity = '1';
//     });
// });

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const typeOfService = document.querySelector('.type_of_service');
const types = document.querySelectorAll('.type');

let index = 0;
const maxIndex = types.length - 3; 

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        updateSlider();
    }
});

function updateSlider() {
    const offset = -index * (types[0].offsetWidth + 75); // Width + margin
    typeOfService.style.transform = `translateX(${offset}px)`;
}



var scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.classList.remove('hide');
    } else {
        scrollToTopBtn.classList.add('hide');
        scrollToTopBtn.classList.remove('show');
    }
}


scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}