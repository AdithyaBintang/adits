// event saat di klik
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//menangkap element
	var elementTujuan = $(tujuan);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elementTujuan.offset().top - 50
	},500,'swing');

	e.preventDefault();

})