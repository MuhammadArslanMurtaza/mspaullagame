import a_img from '../img/herbs/ant.png';
import b_img from '../img/herbs/banana.png';
import c_img from '../img/herbs/cinema.png';
import d_img from '../img/herbs/dinosaur.png';
import e_img from '../img/herbs/eggs.png';
import f_img from '../img/herbs/four.png';
import g_img from '../img/herbs/green.png';
import h_img from '../img/herbs/hat.png';
import i_img from '../img/herbs/ink.png';
import j_img from '../img/herbs/july.png';
import k_img from '../img/herbs/kick.png';
import l_img from '../img/herbs/light.png';
import m_img from '../img/herbs/mat.png';
import n_img from '../img/herbs/nails.png';
import o_img from '../img/herbs/octopus.png';
import p_img from '../img/herbs/park.jpg';
import q_img from '../img/herbs/quick.png';
import r_img from '../img/herbs/rope.png';
import s_img from '../img/herbs/stamp.png';
import t_img from '../img/herbs/triangle.png';
import u_img from '../img/herbs/umbrella.png';
import v_img from '../img/herbs/vase.png';
import w_img from '../img/herbs/west.png';
import x_img from '../img/herbs/x-ray.png';
import y_img from '../img/herbs/yawn.png';
import z_img from '../img/herbs/zoo.jpg';

var Randomherbs = function (ansstr) {
     var cut = [
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z'
     ];
     var de = Array.from(ansstr);
     var i;
     for (i = 0; i < de.length; i++) {
          if (cut.indexOf(de[i]) !== -1) {
               cut.splice(cut.indexOf(de[i]), 1);
                cut = cut.slice(0);
          }
     }
     var unq = de.filter((item, i, de) => de.indexOf(item) === i);
     return cut.splice(0, 10-unq.length);
};
var GetRandom = function (corect, random) {
     var de = Array.from(corect);
     var unq = de.filter((item, i, de)=> de.indexOf(item) === i);
     var cut = unq.concat(random);
     var A = cut.slice(0);
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 10);
};
var Selectedherbsarray = function(sanslength){
     var de = Array.from(sanslength);
     return de;
}
var Selectedherbslenght = function (sanslength) {
     var harbarray = [];
     var i = 0;
     for (i = 0; i < sanslength.length; i++) {
          harbarray[i] = ['10px', '']
     }
     return harbarray;
}
var createherbsarr = function (ansarray) {
     var de = Array.from(ansarray);
     for (var i = 0; i < de.length; i++) {
          de[i] = '';
     }
     return de;
}
var checkarrayempty = function(arr) {
     for (var i = 0; i < arr.length; i++) {
          if (arr[i] === 'undefined' || arr[i] === null || arr[i] === '') return i
     }
     return true;
}
var updatecheckarray = function (index, changevalue, ansarray) {
     ansarray[index] = changevalue;
     return ansarray;
}
var updateansarray = function (index,changevalue,ansarray) {
     ansarray[index][0] = '40px';
     ansarray[index][1] = changevalue;
     return ansarray;
}
var changeansarray = function (index, ansarray) {
     ansarray[index][0] = '10px';
     ansarray[index][1] = '';
     return ansarray;
}
var Selectedherbs = function (sid) {
    var cut = [
         [0, 'A common garden insect', 'ant', a_img],
         [1, 'A yellow fruit', 'banana', b_img],
         [2, 'A building where movies are shown', 'cinema', c_img],
         [3, 'Creatures that lived millions of years ago', 'dinosaurs', d_img],
         [4, 'Birds lay these', 'eggs', e_img],
         [5, '11 minus 7 =', 'four', f_img],
         [6, 'The colour of grass', 'green', g_img],
         [7, 'You wear this on your head', 'hat', h_img],
         [8, 'The liquid inside a pen', 'ink', i_img],
         [9, 'The seventh month of the year', 'july', j_img],
         [10, 'What you do to a football', 'kick', k_img],
         [11, 'The opposite of dark', 'light', l_img],
         [12, 'Something to wipe your feet on', 'mat', m_img],
         [13, 'Something you hit with a hammer', 'nail', n_img],
         [14, 'A sea creature with eight legs', 'octopus', o_img],
         [15, 'A place that you may go to play', 'park', p_img],
         [16, 'Another word meaning fast', 'quick', q_img],
         [17, 'You might tie something up with this', 'rope', r_img],
         [18, 'Something you stick on an envelope', 'stamp', s_img],
         [19, 'A shape with just three sides', 'triangle', t_img],
         [20, 'Something to keep you dry in the rain', 'umbrella', u_img],
         [21, 'Something to put flowers in', 'vase', v_img],
         [22, 'North, south, east and......', 'west', w_img],
         [23, 'A picture that shows your bones', 'x-ray', x_img],
         [24, 'Something you do when you feel tired', 'yawn', y_img],
         [25, 'A place to see lots of animals', 'zoo', z_img]
    ];
     return cut.splice(sid, 1);
};
var arraysAreIdentical = function(arr1, arr2) {
     if (arr1.length !== arr2.length) return false;
     for (var i = 0, len = arr1.length; i < len; i++) {
          if (arr1[i] !== arr2[i]) {
               return false;
          }
     }
     return true;
}
export {
     GetRandom,
     Randomherbs,
     Selectedherbs,
     Selectedherbslenght,
     Selectedherbsarray,
     updateansarray,
     arraysAreIdentical,
     changeansarray,
     createherbsarr,
     checkarrayempty,
     updatecheckarray
}