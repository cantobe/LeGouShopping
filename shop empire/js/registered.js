﻿$(function(){var name=$('input[name="username"]')
var pwd=$('input[name="pwd"]')
var pwd2=$('input[name="pwd2"]')
var phone=$('input[name="phone"]')
var VerificationCode=$('input[name="VerificationCode"]')
var PhoneCode=$('input[name="PhoneCode"]')
var checkbox=$('.checkbox[type="checkbox"]')
var reg1=/^[-_a-zA-Z0-9]{6,16}$/;var reg2=/^[a-zA-Z0-9]{6,15}$/;var reg3=/^1\d{10}$/;var reg4=/^\d{5}$/;name.on('blur',function(){if(!reg1.test(name.val())){$('.names').show()}else{$('.names').hide()}})
pwd.on('blur',function(){if(!reg2.test(pwd.val())){$('.psd').show()}else{$('.psd').hide()}})
pwd2.on('blur',function(){if(pwd2.val()!=pwd.val()){$('.psd2').show()}else{$('.psd2').hide()}})
phone.on('blur',function(){if(!reg3.test(phone.val())){$('.tel').show()}else{$('.tel').hide()}})
VerificationCode.on('blur',function(){if(VerificationCode.val()!=$('.code_icon').text()){$('.incorrect').show()}else{$('.incorrect').hide()}})
$('.checkbox').on('click',function(){if(checkbox.is(':checked')){$('#btn').attr('disabled',false);}})})