     $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
          value = value - 1;
        } else {
          value = 0;
        }

        $input.val(value);

      });

      $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
          value = value + 1;
        } else {
          value =100;
        }

        $input.val(value);
      });
/*menu-filters*/
$('.button-img-filters').click(function(){
  if ( document.querySelector('.filters').style.display == "block" ) {
    $(".filters").slideUp('slow');
  } 
  else{
    $(".filters").slideDown('slow');

  }
});
/*menu-table*/
$('.icon-menu').click(function(){
	if ( document.querySelector('.menu').style.display == "block" ) {
		$(".menu").slideUp('slow');
	} 
	else{
		$(".menu").slideDown('slow');

	}
});
/*menu-data*/
$('.user-account-button-data').click(function(){
  if ( document.querySelector('.user-account-right-my-data').style.display == "block" ) {
    $(".user-account-right-my-data").slideUp('slow');
  } 
  else{
    $(".user-account-right-my-data").slideDown('slow');

  }
});
/*menu-orders*/
$('.user-account-button-ordes').click(function(){
  if ( document.querySelector('.user-account-right-my-orders').style.display == "block" ) {
    $(".user-account-right-my-orders").slideUp('slow');
  } 
  else{
    $(".user-account-right-my-orders").slideDown('slow');

  }
});
/*menu-favorites*/
$('.user-account-button-favorites').click(function(){
  if ( document.querySelector('.user-account-right').style.display == "block" ) {
    $(".user-account-right").slideUp('slow');
  } 
  else{
    $(".user-account-right").slideDown('slow');

  }
});
/*menu*/
$('.nomer-menu-all').click(function(){
  if ( document.querySelector('.user-account-menu-all').style.display == "block" ) {
    $(".user-account-menu-all").slideUp('slow');
  } 
  else{
    $(".user-account-menu-all").slideDown('slow');

  }
});

/*swiper*/
var swiper = new Swiper('.banners .swiper-container', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/*user*/
$('.icon-user').click(function(){
		$(".popup").slideDown('slow');
});
/*user_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup').hide()
 });
/*vin*/
$('.vin').click(function(){
		$(".popup__vin").slideDown('slow');
});
/*vin_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup__vin').hide()
 });
 /*bid*/
$('.phone').click(function(){
		$(".popup__bid").slideDown('slow');
});
/*bid_close*/
 		$('.popup-connect__cross').on("click", function(){
  		$('.popup__bid').hide()
 });
