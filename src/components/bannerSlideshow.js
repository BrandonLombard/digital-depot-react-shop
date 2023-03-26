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
        updateSlide = setInterval(updateBanner, 5000);
        $('#banner-buttons').empty()
        for (var i = 0; i < maxLength; i++) {
                $('#banner-buttons').append(`<div id='bannerBtn${i}' class="banner-button"></div>`) 
                $(`#bannerBtn${i}`).click({param1: parseInt(i)}, updateBannerClick);
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
        $('#banner-image').attr('src', `/images/banner${bannerNum}.png`);
        clearInterval(updateSlide);
        createBannerButtons(bannerNum);
        console.log("BannerNum " + bannerNum);
        bannerNum += 1;
        
        // fadeOut = setTimeout(fadeSlide, 4500, 'out');
        // fadeIn = setTimeout(fadeSlide, 5000, 'in');
        fadeOut = setTimeout(fadeSlide, 4500, 'out');
        fadeIn = setTimeout(fadeSlide, 5000, 'in');
}

function updateBannerClick(param1) {
        clearTimeout(fadeOut);
        clearTimeout(fadeIn); 
        var param1data = parseInt(param1.data.param1) + 1;
        console.log(param1data);
        bannerNum = param1data;
        updateBanner();
        
}

var bannerNum = 1;
const maxLength = 4;

updateSlide = setTimeout(updateBanner, 100, bannerNum);
updateBanner();