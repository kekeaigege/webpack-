import $ from 'jquery'
import './css/index.less'
import logo from './images/ww.jpg'


$('.box').attr('src',logo)
$(function() {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})