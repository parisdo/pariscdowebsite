function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

var $w = $(window);

var $sun_gone = $('.sun-1');
var $sun = $('.sun');
var $moon = $('.moon');
var $sky = $('.intro-section');
var $ground = $('.ground-1');
var $clouds = $('.cloud');
var $introsection = $('.intro-section');
var $mountain1 = $('.mountains-1');
var $mountain2 = $('.mountains-2');
var $mountain3 = $('.mountains-3');
var $mountain4 = $('.mountains-4');
var $mountain5 = $('.mountains-5');
var $mountain6 = $('.mountains-6');
var $mountain7 = $('.mountains-7');
var $mountain8 = $('.mountains-8');
var $mountain9 = $('.mountains-9');
var $mountain10 = $('.mountains-10');
var $mountain11 = $('.mountains-11');
var $trees = $('.tree-1');


$w.scroll(function(){
  $mountain1.css('fill', darken_mountain1())
  $mountain2.css('fill', darken_mountain2())
  $mountain3.css('fill', darken_mountain3())
  $mountain4.css('fill', darken_mountain4())
  $mountain5.css('fill', darken_mountain5())
  $mountain6.css('fill', darken_mountain6())
  $mountain7.css('fill', darken_mountain7())
  $mountain8.css('fill', darken_mountain8())
  $mountain9.css('fill', darken_mountain9())
  $mountain10.css('fill', darken_mountain10())
  $mountain11.css('fill', darken_mountain11())

  $sun.css('top',sun_down())
  $moon.css('top', moon_down())
  $sun.css('left',sun_left())
  $moon.css('left',moon_left())
  $sky.css('background', dark_sky())
  $ground.css('fill', darken_ground())
  $clouds.css('opacity', disappear_clouds())
  $trees.css('fill', darken_trees())
 // $clouds.css('fill-opacity', disappear_clouds())

});

function darken_trees() {
    return LightenDarkenColor("#97B25E", -($w.scrollTop()/10));
}
function disappear_clouds() {
    return (1 - $w.scrollTop()/250);
}

function darken_mountain1() {
    return LightenDarkenColor($mountain1.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain2() {
    return LightenDarkenColor($mountain2.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain3() {
    return LightenDarkenColor($mountain3.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain4() {
    return LightenDarkenColor($mountain4.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain5() {
    return LightenDarkenColor($mountain5.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain6() {
    return LightenDarkenColor($mountain6.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain7() {
    return LightenDarkenColor($mountain7.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain8() {
    return LightenDarkenColor($mountain8.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain9() {
    return LightenDarkenColor($mountain9.attr('fill'), -($w.scrollTop()/5));
}

function darken_mountain10() {
    return LightenDarkenColor($mountain10.attr('fill'), -($w.scrollTop()/5));
}
function darken_mountain11() {
    return LightenDarkenColor($mountain11.attr('fill'), -($w.scrollTop()/5));
}

function goleft(){
  return 15 + $w.scrollTop()/8
}

function mgoleft(){
  return -20 + $w.scrollTop()/8
}

function sun_left() {
    if (goleft() > 70)
      return '70%'
    else
      return goleft() +'%'
}

function moon_left() {
    if (mgoleft() > 70)
      return '70%'
    else
      return mgoleft() +'%'
}

function godown() {
  return 15 + ($w.scrollTop()/8) * (($w.scrollTop())/200)
}

function sun_down() {
    if (godown() > 60)
      return '60%'
    else
      return godown() +'%'
}

//left 80
function mgodown() {
    return 2 + (($w.scrollTop() - 20)/100 * ($w.scrollTop() - 20)/100) + 15
}

function moon_down() {
    if (mgodown() > 60)
      return '60%'
    else
      return mgodown() +'%'
}

function dark_sky() {
    if (($w.scrollTop()/2.3) > 200)
        return LightenDarkenColor("#cdebf9", -200)
    else {
        return LightenDarkenColor("#cdebf9", -($w.scrollTop()/2.3))
    }
}

function darken_ground() {
    return LightenDarkenColor("#ffe7ba", -($w.scrollTop()/10));
}











/* SVG Animation */

/*text*/
var letter_p = document.querySelector('.letter_p');
var letter_p_length = letter_p.getTotalLength();

var letter_a = document.querySelector('.letter_a');
var letter_a_length = letter_a.getTotalLength();

var letter_r = document.querySelector('.letter_r');
var letter_r_length = letter_r.getTotalLength();

var letter_i = document.querySelector('.letter_i');
var letter_i_length = letter_i.getTotalLength();

var letter_s = document.querySelector('.letter_s');
var letter_s_length = letter_s.getTotalLength();

var letter_d = document.querySelector('.letter_d');
var letter_d_length = letter_d.getTotalLength();

var letter_o = document.querySelector('.letter_o');
var letter_o_length = letter_o.getTotalLength();

/* clouds */
var clouds = document.querySelector('.cloud-1');
var cloud_length = clouds.getTotalLength();
/* sun */
var sun = document.querySelector('.sun-1');
var r = $('.sun-1').attr('r');
var sun_length = 2 * Math.PI * r;
/* trees */
var trees = document.querySelector('.tree-1');
var tree_length = trees.getTotalLength();
/* mountain 1 */
var mountain1 = document.querySelector('.mountains-1');
var mountain1_length = mountain1.getTotalLength();
/* mountain 2 */
var mountain2 = document.querySelector('.mountains-2');
var mountain2_length = mountain2.getTotalLength();
/* mountain 3 */
var mountain3 = document.querySelector('.mountains-3');
var mountain3_length = mountain3.getTotalLength();
/* mountain 4 */
var mountain4 = document.querySelector('.mountains-4');
var mountain4_length = mountain4.getTotalLength();
/* mountain 5 */
var mountain5 = document.querySelector('.mountains-5');
var mountain5_length = mountain5.getTotalLength();
/* mountain 6 */
var mountain6 = document.querySelector('.mountains-6');
var mountain6_length = mountain6.getTotalLength();
/* mountain 7 */
var mountain7 = document.querySelector('.mountains-7');
var mountain7_length = mountain7.getTotalLength();
/* mountain 8 */
var mountain8 = document.querySelector('.mountains-8');
var mountain8_length = mountain8.getTotalLength();
/* mountain 9 */
var mountain9 = document.querySelector('.mountains-9');
var mountain9_length = mountain9.getTotalLength();
/* mountain 10 */
var mountain10 = document.querySelector('.mountains-10');
var mountain10_length = mountain10.getTotalLength();
/* mountain 11 */
var mountain11 = document.querySelector('.mountains-11');
var mountain11_length = mountain11.getTotalLength();
/* ground */
var ground = document.querySelector('.ground-1');
var ground_length = ground.getTotalLength();
/* snow peak 1 */
var snowpeak1 = document.querySelector('.snow-peak-1');
var snowpeak1_length = snowpeak1.getTotalLength();
/* snow peak 1 */
var snowpeak2 = document.querySelector('.snow-peak-2');
var snowpeak2_length = snowpeak2.getTotalLength();
/* snow peak 1 */
var snowpeak3 = document.querySelector('.snow-peak-3');
var snowpeak3_length = snowpeak3.getTotalLength();
/* snow peak 1 */
var snowpeak4 = document.querySelector('.snow-peak-4');
var snowpeak4_length = snowpeak4.getTotalLength();
/* hotairballoon 1 */
var hotairballoon1 = document.querySelector('.hotairballoon-1');
var hotairballoon1_length = snowpeak4.getTotalLength();
/* hotairballoon 2 */
var hotairballoon2 = document.querySelector('.hotairballoon-2');
var hotairballoon2_length = snowpeak4.getTotalLength();
/* hotairballoon 3 */
var hotairballoon3 = document.querySelector('.hotairballoon-3');
var hotairballoon3_length = snowpeak4.getTotalLength();
/* hotairballoon 4 */
var hotairballoon4 = document.querySelector('.hotairballoon-4');
var hotairballoon4_length = snowpeak4.getTotalLength();
/* hotairballoon 5 */
var hotairballoon5 = document.querySelector('.hotairballoon-5');
var hotairballoon5_length = snowpeak4.getTotalLength();
/* moon */
var moon = document.querySelector('.moon-1');
var moon_length = moon.getTotalLength();

/*letters*/
$('.letter_p').css('stroke-dashoffset', letter_p_length);
$('.letter_p').css('stroke-dasharray', letter_p_length);

$('.letter_a').css('stroke-dashoffset', letter_a_length);
$('.letter_a').css('stroke-dasharray', letter_a_length);

$('.letter_r').css('stroke-dashoffset', letter_r_length);
$('.letter_r').css('stroke-dasharray', letter_r_length);

$('.letter_i').css('stroke-dashoffset', letter_i_length);
$('.letter_i').css('stroke-dasharray', letter_i_length);

$('.letter_s').css('stroke-dashoffset', letter_s_length);
$('.letter_s').css('stroke-dasharray', letter_s_length);

$('.letter_d').css('stroke-dashoffset', letter_d_length);
$('.letter_d').css('stroke-dasharray', letter_d_length);

$('.letter_o').css('stroke-dashoffset', letter_o_length);
$('.letter_o').css('stroke-dasharray', letter_o_length);


/* moon */
$('.moon-1').css('stroke-dashoffset', moon_length);
$('.moon-1').css('stroke-dasharray', moon_length);

/* clouds */
$('.cloud-1').css('stroke-dashoffset', cloud_length);
$('.cloud-1').css('stroke-dasharray', cloud_length);
/* sun */
$('.sun-1').css('stroke-dashoffset', cloud_length);
$('.sun-1').css('stroke-dasharray', cloud_length);
/* trees */
$('.tree-1').css('stroke-dashoffset', tree_length);
$('.tree-1').css('stroke-dasharray', tree_length);

/* mountain1 */
$('.mountains-1').css('stroke-dashoffset', mountain1_length);
$('.mountains-1').css('stroke-dasharray',  mountain1_length);
/* mountain1 */
$('.mountains-2').css('stroke-dashoffset', mountain2_length);
$('.mountains-2').css('stroke-dasharray',  mountain2_length);
/* mountain1 */
$('.mountains-3').css('stroke-dashoffset', mountain3_length);
$('.mountains-3').css('stroke-dasharray',  mountain3_length);
/* mountain1 */
$('.mountains-4').css('stroke-dashoffset', mountain4_length);
$('.mountains-4').css('stroke-dasharray',  mountain4_length);
/* mountain1 */
$('.mountains-5').css('stroke-dashoffset', mountain5_length);
$('.mountains-5').css('stroke-dasharray',  mountain5_length);
/* mountain1 */
$('.mountains-6').css('stroke-dashoffset', mountain6_length);
$('.mountains-6').css('stroke-dasharray',  mountain6_length);
/* mountain1 */
$('.mountains-7').css('stroke-dashoffset', mountain7_length);
$('.mountains-7').css('stroke-dasharray',  mountain7_length);
/* mountain1 */
$('.mountains-8').css('stroke-dashoffset', mountain8_length);
$('.mountains-8').css('stroke-dasharray',  mountain8_length);
/* mountain1 */
$('.mountains-9').css('stroke-dashoffset', mountain9_length);
$('.mountains-9').css('stroke-dasharray',  mountain9_length);
/* mountain1 */
$('.mountains-10').css('stroke-dashoffset', mountain10_length);
$('.mountains-10').css('stroke-dasharray',  mountain10_length);
/* mountain1 */
$('.mountains-11').css('stroke-dashoffset', mountain11_length);
$('.mountains-11').css('stroke-dasharray',  mountain11_length);
/* ground */
$('.ground-1').css('stroke-dashoffset', ground_length);
$('.ground-1').css('stroke-dasharray',  ground_length);
/* snow peak 1 */
$('.snow-peak-1').css('stroke-dashoffset', snowpeak1_length);
$('.snow-peak-1').css('stroke-dasharray',  snowpeak1_length);
/* snow peak 2 */
$('.snow-peak-2').css('stroke-dashoffset', snowpeak2_length);
$('.snow-peak-2').css('stroke-dasharray',  snowpeak2_length);
/* snow peak 1 */
$('.snow-peak-3').css('stroke-dashoffset', snowpeak3_length);
$('.snow-peak-3').css('stroke-dasharray',  snowpeak3_length);
/* snow peak 1 */
$('.snow-peak-4').css('stroke-dashoffset', snowpeak4_length);
$('.snow-peak-4').css('stroke-dasharray',  snowpeak4_length);
