﻿$(function(){$('#qrCode').hide();$('#accountLogin').hide()
$('.box li:first-child').addClass('active')
$('#qrCode').show();$('.box li').on('click',function(){$('.box li').removeClass('active')
$(this).addClass('active')
if($(this).index()===0){$('#accountLogin').hide();$('#qrCode').show();}else{$('#qrCode').hide();$('#accountLogin').show();}})
$('.box').on('mouseenter',function(){$('#show').animate({'left':'39px'},700,function(){$('#phone').show();});}).on('mouseleave',function(){$('#phone').hide()
$('#show').animate({'left':'101px'},800);})})