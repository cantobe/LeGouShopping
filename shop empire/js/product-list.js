﻿$(function(){new osSlider({pNode:'.slider',cNode:'.slider-main li',speed:2000,autoPlay:true});$('.selling_list li').on('mouseover',function(){$('.selling_list li').removeClass('selling_active')
$(this).addClass('selling_active')})
$('#newbookList li').on('mouseover',function(){$('#newbookList li').removeClass('newbook_right_active')
$(this).addClass('newbook_right_active')})})
$(function(){$("#carousel0").FtCarousel({index:0,auto:false,});$("#carousel1").FtCarousel({index:0,auto:false,});$("#carousel2").FtCarousel({index:1,auto:false,});$("#carousel3").FtCarousel({index:1,auto:false,});$("#carousel4").FtCarousel({index:2,auto:false,});$("#carousel5").FtCarousel({index:2,auto:false,});$("#carousel6").FtCarousel({index:3,auto:false,});$('.list_box').hide()
$('#carousel0').show()
$('.content_title .content_list:first-child').addClass('content_title_active')
$('.content_list').on('mouseover',function(){let a=$(this).index()
let b='#carousel'+a
$('.content_list').removeClass('content_title_active')
$(this).addClass('content_title_active')
$('.list_box').hide()
$(b).show()})
$('#youLike li').css('z-index','10')
$('#youLike li:first-child').css('height','516px')
$('.change').on('click',function(){let x=4;let y=0;let rand=parseInt(Math.random()*(x-y)+y);$('#youLike li').css('height','0px')
$('#youLike li').stop()
$('#youLike li').eq(rand).animate({height:'516px'},1000)})})