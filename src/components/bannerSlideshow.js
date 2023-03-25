function fadeSlide(typeFade) {
        var speed = 500;
        if (typeFade == 'in') {
                $('#banner-image').fadeIn(speed)
        } else {
                $('#banner-image').fadeOut(speed)
        }
}

function slideshowHover(slideshowButton) {
        slideshowButton.src = "../src/images/slideshow-button-hover.png";
        slideshowButton.style.transition = "0.5s";
}

function createBannerButtons(bannerNum) {
        bannerNum = bannerNum - 1;
        clearInterval(updateSlide);
        updateSlide = setInterval(updateBanner, 5000);
        $('#banner-buttons').empty()
        for (var i = 0; i < maxLength; i++) {
                $('#banner-buttons').append(`<div id='bannerBtn${i}' class="banner-button"></div>`) 
                $(`#bannerBtn${i}`).click(updateBanner);
                if (bannerNum == i) {
                        $(`#bannerBtn${i}`).css("background-color", "#2c3038");
                        // $(`#bannerBtn${i}`).animate({"background-color": "#e7620b"}, 800);
                }
        }
        
}

function updateBanner() {
        if (bannerNum > maxLength) {
                bannerNum = 1;
        } 
        console.log(bannerNum);
        $('#banner-image').attr('src', `/images/banner${bannerNum}.png`);
        
        createBannerButtons(bannerNum);
        bannerNum += 1;
        setTimeout(fadeSlide, 4500, 'out');
        setTimeout(fadeSlide, 5000, 'in');
        
}

var bannerNum = 1;
const maxLength = 4;

updateSlide = setInterval(updateBanner, 5000);