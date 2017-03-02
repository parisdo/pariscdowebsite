/* Sliding red border for contact form */
$(document).ready(function () {
    $( "#name" ).focus(function() {
        $('.one').addClass('clicked');
    });

    $( "#name" ).blur(function() {
        $('.one').removeClass('clicked');
    });

    $( "#user_email" ).focus(function() {
        $('.one2').addClass('clicked');
    });

    $( "#user_email" ).blur(function() {
        $('.one2').removeClass('clicked');
    });

    $( "#textarea1" ).focus(function() {
        $('.one3').addClass('clicked');
    });

    $( "#textarea1" ).blur(function() {
        $('.one3').removeClass('clicked');
    });

});

$(document).on("focusin", function(e) {
    if ($(e.target).is('#sliding-border') === false) {
      $('.one').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border') === true){
        $('.one').addClass('clicked');

    }
    if ($(e.target).is('#sliding-border1') === false) {
      $('.one1').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border1') === true){
        $('.one1').addClass('clicked');

    }
    if ($(e.target).is('#sliding-border2') === false) {
      $('.one2').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border2') === true){
        $('.one2').addClass('clicked');

    }
    if ($(e.target).is('#sliding-border3') === false) {
      $('.one3').removeClass('clicked');
    }
    else if ($(e.target).is('#sliding-border3') === true){
        $('.one3').addClass('clicked');

    }
  });



var $w = $(window);

var $name_p_1 = $('.name_p_1');
var $name_p_2 = $('.name_p_2');
var $name_p_3 = $('.name_p_3');
var $name_a_1 = $('.name_a_1');
var $name_a_2 = $('.name_a_2');
var $name_a_3 = $('.name_a_3');
var $name_r_1 = $('.name_r_1');
var $name_r_2 = $('.name_r_2');
var $name_i_1 = $('.name_i_1');
var $name_i_2 = $('.name_i_2');
var $name_i_3 = $('.name_i_3');
var $name_i_4 = $('.name_i_4');
var $name_s_1 = $('.name_s_1');
var $name_s_2 = $('.name_s_2');
var $name_s_3 = $('.name_s_3');
var $name_d_1 = $('.name_d_1');
var $name_d_2 = $('.name_d_2');
var $name_o_1 = $('.name_o_1');
var $name_o_2 = $('.name_o_2');
var $add_info = $('.add-info');
var $nav_about = $('.nav-about');
var $nav_about_letters = $('.nav-about-letters');
var $nav_projects = $('.nav-projects');
var $nav_projects_letters = $('.nav-projects-letters');
var $nav_contact = $('.nav-contact');
var $nav_contact_letters = $('.nav-contact-letters');
var $nav_resume = $('.nav-resume');
var $nav_resume_letters = $('.nav-resume-letters');

$w.scroll(function(){
  $add_info.css('opacity', lighten_landing_info())
  $name_p_1.css('transform', move_p_1())
  $name_p_2.css('transform', move_p_2())
  $name_p_3.css('transform', move_p_3())
  $name_a_1.css('transform', move_a_1())
  $name_a_2.css('transform', move_a_2())
  $name_a_3.css('transform', move_a_3())
  $name_r_1.css('transform', move_r_1())
  $name_r_2.css('transform', move_r_2())
  $name_i_1.css('transform', move_i_1())
  $name_i_2.css('transform', move_i_2())
  $name_i_3.css('transform', move_i_3())
  $name_i_4.css('transform', move_i_4())
  $name_s_1.css('transform', move_s_1())
  $name_s_2.css('transform', move_s_2())
  $name_s_3.css('transform', move_s_3())
  $name_d_1.css('transform', move_d_1())
  $name_d_2.css('transform', move_d_2())
  $name_o_1.css('transform', move_o_1())
  $name_o_2.css('transform', move_o_2())
});




function lighten_landing_info() {
    return 100/($w.scrollTop()*2);

}

function move_p_1() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + $w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_p_2() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + 0 + "%) rotate(" + $w.scrollTop()/2 + "deg)";
}

function move_p_3() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_a_1() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + $w.scrollTop()/6 + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_a_2() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + $w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_a_3() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_r_1() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + $w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_r_2() {
    return "translate( " + -$w.scrollTop()/4 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_i_1() {
    return "translate( " + 0 + "%, " + $w.scrollTop()*2 + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_i_2() {
    return "translate( " + -$w.scrollTop()/2 + "%, " + $w.scrollTop()*2 + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_i_3() {
    return "translate( " + -$w.scrollTop()*2 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_i_4() {
    return "translate( " + -$w.scrollTop()/4 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_s_1() {
    return "translate( " + $w.scrollTop()/4 + "%, " + $w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_s_2() {
    return "translate( " + $w.scrollTop()/2 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_s_3() {
    return "translate( " + -$w.scrollTop()/4 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_d_1() {
    return "translate( " + $w.scrollTop()/4 + "%, " + $w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_d_2() {
    return "translate( " + $w.scrollTop()/4 + "%, " + -$w.scrollTop() + "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_o_1() {
    return "translate( " + $w.scrollTop() + "%, " + $w.scrollTop()/4+ "%) rotate(" + $w.scrollTop() + "deg)";
}

function move_o_2() {
    return "translate( " + $w.scrollTop() + "%, " + -$w.scrollTop()/4+ "%) rotate(" + $w.scrollTop() + "deg)";
}

var name_p_1 = document.querySelector('.name_p_1');
var name_p_1_length = name_p_1.getTotalLength();

$('.name_p_1').css('stroke-dashoffset', name_p_1_length);
$('.name_p_1').css('stroke-dasharray', name_p_1_length);

var name_p_2 = document.querySelector('.name_p_2');
var name_p_2_length = name_p_2.getTotalLength();

$('.name_p_2').css('stroke-dashoffset', name_p_2_length);
$('.name_p_2').css('stroke-dasharray', name_p_2_length);

var name_p_3 = document.querySelector('.name_p_3');
var name_p_3_length = name_p_3.getTotalLength();

$('.name_p_3').css('stroke-dashoffset', name_p_3_length);
$('.name_p_3').css('stroke-dasharray', name_p_3_length);

var name_a_1 = document.querySelector('.name_a_1');
var name_a_1_length = name_a_1.getTotalLength();

$('.name_a_1').css('stroke-dashoffset', name_a_1_length);
$('.name_a_1').css('stroke-dasharray', name_a_1_length);

var name_a_2 = document.querySelector('.name_a_2');
var name_a_2_length = name_a_2.getTotalLength();

$('.name_a_2').css('stroke-dashoffset', name_a_2_length);
$('.name_a_2').css('stroke-dasharray', name_a_2_length);

var name_a_3 = document.querySelector('.name_a_3');
var name_a_3_length = name_a_3.getTotalLength();

$('.name_a_3').css('stroke-dashoffset', name_a_3_length);
$('.name_a_3').css('stroke-dasharray', name_a_3_length);

var name_r_1 = document.querySelector('.name_r_1');
var name_r_1_length = name_r_1.getTotalLength();

$('.name_r_1').css('stroke-dashoffset', name_r_1_length);
$('.name_r_1').css('stroke-dasharray', name_r_1_length);

var name_r_2 = document.querySelector('.name_r_2');
var name_r_2_length = name_r_2.getTotalLength();

$('.name_r_2').css('stroke-dashoffset', name_r_2_length);
$('.name_r_2').css('stroke-dasharray', name_r_2_length);

var name_i_1 = document.querySelector('.name_i_1');
var name_i_1_length = name_i_1.getTotalLength();

$('.name_i_1').css('stroke-dashoffset', name_i_1_length);
$('.name_i_1').css('stroke-dasharray', name_i_1_length);

var name_i_2 = document.querySelector('.name_i_2');
var name_i_2_length = name_i_2.getTotalLength();

$('.name_i_2').css('stroke-dashoffset', name_i_2_length);
$('.name_i_2').css('stroke-dasharray', name_i_2_length);

var name_i_3 = document.querySelector('.name_i_3');
var name_i_3_length = name_i_3.getTotalLength();

$('.name_i_3').css('stroke-dashoffset', name_i_3_length);
$('.name_i_3').css('stroke-dasharray', name_i_3_length);

var name_i_4 = document.querySelector('.name_i_4');
var name_i_4_length = name_i_4.getTotalLength();

$('.name_i_4').css('stroke-dashoffset', name_i_4_length);
$('.name_i_4').css('stroke-dasharray', name_i_4_length);

var name_s_1 = document.querySelector('.name_s_1');
var name_s_1_length = name_s_1.getTotalLength();

$('.name_s_1').css('stroke-dashoffset', name_s_1_length);
$('.name_s_1').css('stroke-dasharray', name_s_1_length);

var name_s_2 = document.querySelector('.name_s_2');
var name_s_2_length = name_s_2.getTotalLength();

$('.name_s_2').css('stroke-dashoffset', name_s_2_length);
$('.name_s_2').css('stroke-dasharray', name_s_2_length);

var name_s_3 = document.querySelector('.name_s_3');
var name_s_3_length = name_s_3.getTotalLength();

$('.name_s_3').css('stroke-dashoffset', name_s_3_length);
$('.name_s_3').css('stroke-dasharray', name_s_3_length);

var name_d_1 = document.querySelector('.name_d_1');
var name_d_1_length = name_d_1.getTotalLength();

$('.name_d_1').css('stroke-dashoffset', name_d_1_length);
$('.name_d_1').css('stroke-dasharray', name_d_1_length);

var name_d_2 = document.querySelector('.name_d_2');
var name_d_2_length = name_d_2.getTotalLength();

$('.name_d_2').css('stroke-dashoffset', name_d_2_length);
$('.name_d_2').css('stroke-dasharray', name_d_2_length);

var name_o_1 = document.querySelector('.name_o_1');
var name_o_1_length = name_o_1.getTotalLength();

$('.name_o_1').css('stroke-dashoffset', name_o_1_length);
$('.name_o_1').css('stroke-dasharray', name_o_1_length);

var name_o_2 = document.querySelector('.name_o_2');
var name_o_2_length = name_o_2.getTotalLength();

$('.name_o_2').css('stroke-dashoffset', name_o_2_length);
$('.name_o_2').css('stroke-dasharray', name_o_2_length);


/* earthquakes lines */
var wave_1 = document.querySelector('.wave_1');
var wave_1_length = wave_1.getTotalLength();

$('.wave_1').css('stroke-dashoffset', wave_1_length);
$('.wave_1').css('stroke-dasharray', wave_1_length);

var wave_2 = document.querySelector('.wave_2');
var wave_2_length = wave_2.getTotalLength();

$('.wave_2').css('stroke-dashoffset', wave_2_length);
$('.wave_2').css('stroke-dasharray', wave_2_length);


/* earthquakes lines */
var wave_3 = document.querySelector('.wave_3');
var wave_3_length = wave_3.getTotalLength();

$('.wave_3').css('stroke-dashoffset', wave_3_length);
$('.wave_3').css('stroke-dasharray', wave_3_length);

/* earthquakes lines */
var wave_4 = document.querySelector('.wave_4');
var wave_4_length = wave_4.getTotalLength();

$('.wave_4').css('stroke-dashoffset', wave_4_length);
$('.wave_4').css('stroke-dasharray', wave_4_length);

/* earthquakes lines */
var wave_5 = document.querySelector('.wave_5');
var wave_5_length = wave_5.getTotalLength();

$('.wave_5').css('stroke-dashoffset', wave_5_length);
$('.wave_5').css('stroke-dasharray', wave_5_length);

/* earthquakes lines */
var wave_6 = document.querySelector('.wave_6');
var wave_6_length = wave_6.getTotalLength();

$('.wave_6').css('stroke-dashoffset', wave_6_length);
$('.wave_6').css('stroke-dasharray', wave_6_length);
