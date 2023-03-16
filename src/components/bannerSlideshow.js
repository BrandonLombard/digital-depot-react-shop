function fadeSlide(typeFade) {
        var speed = 500;
        if (typeFade == 'in') {
                $('#banner-image').fadeIn(speed)
        } else {
                $('#banner-image').fadeOut(speed)
        }
}

function createBannerButtons() {
        clearInterval(updateSlide);
        updateSlide = setInterval(updateBanner, 5000);
        $('#banner-buttons').empty()
        for (var i = 0; i < maxLength; i++) {
                $('#banner-buttons').append(`<span id='bannerBtn${i}' class="banner-button">🟠</span>`) 
                $(`#bannerBtn${i}`).click(updateBanner);
        }
        
}

function updateBanner() {
        if (bannerNum > maxLength) {
                bannerNum = 1;
        } 
        console.log(bannerNum);
        $('#banner-image').attr('src', `../src/images/banner${bannerNum}.png`);
        bannerNum += 1;
        setTimeout(fadeSlide, 4500, 'out')
        setTimeout(fadeSlide, 5000, 'in')
        createBannerButtons()
}

var bannerNum = 1;
const maxLength = 4;

updateSlide = setInterval(updateBanner, 5000);