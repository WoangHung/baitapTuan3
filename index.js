var films = [
    {
        nameImg: './img/poster9.jpg',
        linkFilm: '#',
        nameFilm: 'MOONFALL',
        linkOder: '#'
    },{
        nameImg: './img/poster8.jpg',
        linkFilm: '#',
        nameFilm: 'NGƯỜI LẮNG NGHE',
        linkOder: 'https://www.bhdstar.vn/movie/HO00002385/'
    },{
        nameImg: './img/poster7.jpg',
        linkFilm: '#',
        nameFilm: 'TURNING RED',
        linkOder: '#'
    },{
        nameImg: './img/poster6.jpg',
        linkFilm: '#',
        nameFilm: 'BATMAN',
        linkOder: '#'
    },{
        nameImg: './img/poster5.jpg',
        linkFilm: '#',
        nameFilm: 'CHỊ CHỊ EM EM',
        linkOder: '#'
    },{
        nameImg: './img/poster4.jpg',
        linkFilm: '#',
        nameFilm: 'THE CONJURING 3',
        linkOder: '#'
    },{
        nameImg: './img/poster3.jpg',
        linkFilm: '#',
        nameFilm: 'CẬU VÀNG',
        linkOder: '#'
    },{
        nameImg: './img/poster2.jpg',
        linkFilm: '#',
        nameFilm: 'AVENGER AND GAME',
        linkOder: '#'
    },{
        nameImg: './img/poster1..jpg',
        linkFilm: '#',
        nameFilm: 'MẮT BIẾC',
        linkOder: '#'
    }
];
var films_sap_chieu = [
    {
        nameImg: './img/poster10.jpg',
        linkFilm: '#',
        nameFilm: 'THE GREAT BIG BEAST',
        linkOder: '#',
    },{
        nameImg: './img/poster11.jpg',
        linkFilm: '#',
        nameFilm: 'CHUYỆN MA GẦN NHÀ',
        linkOder: '#',
    },{
        nameImg: './img/poster12.jpg',
        linkFilm: '#',
        nameFilm: 'THE LOST CITY',
        linkOder: '#',
    },{
        nameImg: './img/poster13.jpg',
        linkFilm: '#',
        nameFilm: 'AMBULANCE',
        linkOder: '#',
    },{
        nameImg: './img/poster14.jpg',
        linkFilm: '#',
        nameFilm: 'MẾN GÁI MIỀN TÂY',
        linkOder: '#',
    }
];
var films_hot = [
    {
        nameImg: './img/poster8.jpg',
        linkFilm: '#',
        nameFilm: 'NGƯỜI LẮNG NGHE',
        linkOder: '#'
    },{
        nameImg: './img/poster7.jpg',
        linkFilm: '#',
        nameFilm: 'TURNING RED',
        linkOder: '#',
    },{
        nameImg: './img/poster6.jpg',
        linkFilm: '#',
        nameFilm: 'BATMAN',
        linkOder: '#',
    }
];

// khi load trang lên , măc định chạy đang chiếu
films.forEach(item => {
    var render = `
        <div class="slide">
            <div class="movie">
                <img src="${ item.nameImg }" alt="" height="400">
                <a href="${item.linkFilm}">
                    <h2 class="Ten_phim">${item.nameFilm}</h2>       
                </a>
            </div>
            <div class="Ticket">
                <a href="${item.linkOder} target="_blank">
                    <h2> <i class="fa fa-ticket"> ĐẶT VÉ </i></h2>
                </a>
            </div>
        </div>
    `;
    // chèn phần tử vào khối
    $(".slides").append(render);
});
// khi click vào phim đang chiếu
$("#dang_chieu").click(function(){
    $(".title li h2").removeClass('active');
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
    }
    //gọi hàm renderUI
    renderUI(films);
})
// khi click vào nút phim sắp chiếu
$("#sap_chieu").click(function(){
    $(".title li h2").removeClass('active');
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
    }
    renderUI(films_sap_chieu);
})
$("#film_hot").click(function(){
    $(".title li h2").removeClass('active');
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
    }
    renderUI(films_hot);
})

// hàm render slide phim

function renderUI(film){
    $(".slides").empty();
    film.forEach(item => {
        var render = `
            <div class="slide">
                <div class="movie">
                    <img src="${ item.nameImg }" alt="" height="400">
                    <a href="${item.linkFilm}">
                        <h2 class="Ten_phim">${item.nameFilm}</h2>       
                    </a>
                </div>
                <div class="Ticket">
                    <a href="${item.linkOder}">
                        <h2> <i class="fa fa-ticket"> ĐẶT VÉ </i></h2>
                    </a>
                </div>
            </div>
        `;
        $(".slides").append(render);
    });
    //load lại slick
    
    $('.slides').slick('refresh');
}
  

$('.slides').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,    

});
$('.khuyen_mai_cha').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
});
