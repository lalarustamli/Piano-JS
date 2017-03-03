



function createPiano() {
  document.write('<table>')
    document.write('<tr>')
      for (var i = 0; i < 1; i++) {
        document.write('<td class="white" onclick="audio_lya()">')
        document.write('<td class="black" onclick="audio_lya_s()">')
        document.write('<td class="white" onclick="audio_si()">')
      }
      for (var j = 0; j < 5; j++) {
        document.write('<td class="white" onclick="audio_do()">')
        document.write('<td class="black" onclick="audio_do_s()">')
        document.write('<td class="white" onclick="audio_re()">')
        document.write('<td class="black" onclick="audio_re_s()">')
        document.write('<td class="white" onclick="audio_mi()">')
        document.write('<td class="white" onclick="audio_fa()">')
        document.write('<td class="black" onclick="audio_fa_s()"> ')
        document.write('<td class="white" onclick="audio_sol()">')
        document.write('<td class="black" onclick="audio_sol_s()">')
        document.write('<td class="white" onclick="audio_lya()">')
        document.write('<td class="black" onclick="audio_lya_s()">')
        document.write('<td class="white" onclick="audio_si()">')
      }
      for (var k = 0; k < 1; k++) {
        document.write('<td class="white" onclick="audio_do()">')
        document.write('<td class="black" onclick="audio_do_s()">')
        document.write('<td class="white" onclick="audio_re()">')
        document.write('<td class="black" onclick="audio_re_s()">')
        document.write('<td class="white" onclick="audio_mi()">')
        document.write('<td class="white" onclick="audio_fa()">')
        document.write('<td class="black" onclick="audio_fa_s()"> ')
        document.write('<td class="white" onclick="audio_sol()">')
        document.write('<td class="black" onclick="audio_sol_s()">')
        
      }


    document.write('</tr>')
  document.write('</table>')
}
createPiano()

function audio_do () {
var audio = new Audio('./mp3/c1.mp3');
audio.play();
var a = "do"
console.log(a)


}
function audio_do_s () {
var audio = new Audio('./mp3/c1s.mp3');
audio.play();
var a = "do#"
console.log(a)


}
function audio_re () {
var audio = new Audio('./mp3/d1.mp3');
audio.play();
var a = "re"
console.log(a)


}
function audio_re_s () {
var audio = new Audio('./mp3/d1s.mp3');
audio.play();
var a = "re#"
console.log(a)


}
function audio_mi () {
var audio = new Audio('./mp3/e1.mp3');
audio.play();
var a = "mi"
console.log(a)


}
function audio_fa () {
var audio = new Audio('./mp3/f1.mp3');
audio.play();
var a = "fa"
console.log(a)


}
function audio_fa_s () {
var audio = new Audio('./mp3/f1s.mp3');
audio.play();
var a = "fa#"
console.log(a)


}
function audio_sol () {
var audio = new Audio('./mp3/g1.mp3');
audio.play();
var a = "sol"
console.log(a)


}
function audio_sol_s () {
var audio = new Audio('./mp3/g1s.mp3');
audio.play();
var a = "sol#"
console.log(a)


}
function audio_lya () {
var audio = new Audio('./mp3/a1.mp3');
audio.play();
var a = "lya"
console.log(a)


}
function audio_lya_s () {
var audio = new Audio('./mp3/a1s.mp3');
audio.play();
var a = "lya#"
console.log(a)


}
function audio_si () {
var audio = new Audio('./mp3/b1.mp3');
audio.play();
var a = "si"
console.log(a)


}





