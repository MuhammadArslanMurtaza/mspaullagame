import a_alpha from '../img/atozalphbets/A.png';
import apple_img from '../img/fruits-alphabets-pics/apple1.png';
import b_alpha from '../img/atozalphbets/B.png';
import b_img from '../img/fruits-alphabets-pics/banana.png';
import c_alpha from '../img/atozalphbets/C.png';
import c_img from '../img/fruits-alphabets-pics/cherry.png';
import d_alpha from '../img/atozalphbets/D.png';
import d_img from '../img/fruits-alphabets-pics/damson.png';
import e_alpha from '../img/atozalphbets/E.png';
import e_img from '../img/fruits-alphabets-pics/elderberry.png';
import f_alpha from '../img/atozalphbets/F.png';
import f_img from '../img/fruits-alphabets-pics/fig.png';
import g_alpha from '../img/atozalphbets/G.png';
import g_img from '../img/fruits-alphabets-pics/grapes.png';
import h_alpha from '../img/atozalphbets/H.png';
import h_img from '../img/fruits-alphabets-pics/honeydew.png';
import i_alpha from '../img/atozalphbets/I.png';
import i_img from '../img/fruits-alphabets-pics/imbe.png';
import j_alpha from '../img/atozalphbets/J.png';
import j_img from '../img/fruits-alphabets-pics/jackfruit.png';
import k_alpha from '../img/atozalphbets/K.png';
import k_img from '../img/fruits-alphabets-pics/kiwi.png';
import l_alpha from '../img/atozalphbets/L.png';
import l_img from '../img/fruits-alphabets-pics/lychee.png';
import m_alpha from '../img/atozalphbets/M.png';
import m_img from '../img/fruits-alphabets-pics/mango.png';
import n_alpha from '../img/atozalphbets/N.png';
import n_img from '../img/fruits-alphabets-pics/nectarine.png';
import o_alpha from '../img/atozalphbets/O.png';
import o_img from '../img/fruits-alphabets-pics/orange.png';
import p_alpha from '../img/atozalphbets/P.png';
import p_img from '../img/fruits-alphabets-pics/papaya.png';
import q_alpha from '../img/atozalphbets/Q.png';
import q_img from '../img/fruits-alphabets-pics/quince.png';
import r_alpha from '../img/atozalphbets/R.png';
import r_img from '../img/fruits-alphabets-pics/raspberries.png';
import s_alpha from '../img/atozalphbets/S.png';
import s_img from '../img/fruits-alphabets-pics/strawberry.png';
import t_alpha from '../img/atozalphbets/T.png';
import t_img from '../img/fruits-alphabets-pics/tamarind.png';
import u_alpha from '../img/atozalphbets/U.png';
import u_img from '../img/fruits-alphabets-pics/ugli.png';
import v_alpha from '../img/atozalphbets/V.png';
import v_img from '../img/fruits-alphabets-pics/voavanga.png';
import w_alpha from '../img/atozalphbets/W.png';
import w_img from '../img/fruits-alphabets-pics/walnut.png';
import x_alpha from '../img/atozalphbets/X.png';
import x_img from '../img/fruits-alphabets-pics/xigua.png';
import y_alpha from '../img/atozalphbets/Y.png';
import y_img from '../img/fruits-alphabets-pics/yellow-passionfruit.png';
import z_alpha from '../img/atozalphbets/Z.png';
import z_img from '../img/fruits-alphabets-pics/zhe-fruit.png';

 var Randomfruits = function (sid) {
     var cut = [
          [0, 'Apple', a_alpha, apple_img],
          [1, 'Banana', b_alpha, b_img],
          [2, 'Cherry', c_alpha, c_img],
          [3, 'Damson', d_alpha, d_img],
          [4, 'Elderberry', e_alpha, e_img],
          [5, 'Fig', f_alpha, f_img],
          [6, 'Grapes', g_alpha, g_img],
          [7, 'Honeydew', h_alpha, h_img],
          [8, 'Imbe', i_alpha, i_img],
          [9, 'Jackfruit', j_alpha, j_img],
          [10, 'Kiwi', k_alpha, k_img],
          [11, 'Lychee', l_alpha, l_img],
          [12, 'Mango', m_alpha, m_img],
          [13, 'Nectarine', n_alpha, n_img],
          [14, 'Orange', o_alpha, o_img],
          [15, 'Papaya', p_alpha, p_img],
          [16, 'Quince', q_alpha, q_img],
          [17, 'Raspberries', r_alpha, r_img],
          [18, 'Strawberry', s_alpha, s_img],
          [19, 'Tamarind', t_alpha, t_img],
          [20, 'Ugli', u_alpha, u_img],
          [21, 'Voavanga', v_alpha, v_img],
          [22, 'Walnut', w_alpha, w_img],
          [23, 'Xigua', x_alpha, x_img],
          [24, 'Yellow Passionfruit', y_alpha, y_img],
          [25, 'Zhe Fruit', z_alpha, z_img]
     ];
     cut.splice(sid,1);
     var A = cut.slice(0);
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 2);
};
var GetRandom = function (corect,random) {
     var farray = [
          [0, 'Apple', a_alpha, apple_img],
          [1, 'Banana', b_alpha, b_img],
          [2, 'Cherry', c_alpha, c_img],
          [3, 'Damson', d_alpha, d_img],
          [4, 'Elderberry', e_alpha, e_img],
          [5, 'Fig', f_alpha, f_img],
          [6, 'Grapes', g_alpha, g_img],
          [7, 'Honeydew', h_alpha, h_img],
          [8, 'Imbe', i_alpha, i_img],
          [9, 'Jackfruit', j_alpha, j_img],
          [10, 'Kiwi', k_alpha, k_img],
          [11, 'Lychee', l_alpha, l_img],
          [12, 'Mango', m_alpha, m_img],
          [13, 'Nectarine', n_alpha, n_img],
          [14, 'Orange', o_alpha, o_img],
          [15, 'Papaya', p_alpha, p_img],
          [16, 'Quince', q_alpha, q_img],
          [17, 'Raspberries', r_alpha, r_img],
          [18, 'Strawberry', s_alpha, s_img],
          [19, 'Tamarind', t_alpha, t_img],
          [20, 'Ugli', u_alpha, u_img],
          [21, 'Voavanga', v_alpha, v_img],
          [22, 'Walnut', w_alpha, w_img],
          [23, 'Xigua', x_alpha, x_img],
          [24, 'Yellow Passionfruit', y_alpha, y_img],
          [25, 'Zhe Fruit', z_alpha, z_img]
     ];
     var cut = [
          random[0],
          random[1],
          farray[corect]
     ];
     var A = cut.slice(0);
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 3);
};
 var Selectedfruit = function (sid) {
      var cut = [
           [0, 'Apple', a_alpha, apple_img],
           [1, 'Banana', b_alpha, b_img],
           [2, 'Cherry', c_alpha, c_img],
           [3, 'Damson', d_alpha, d_img],
           [4, 'Elderberry', e_alpha, e_img],
           [5, 'Fig', f_alpha, f_img],
           [6, 'Grapes', g_alpha, g_img],
           [7, 'Honeydew', h_alpha, h_img],
           [8, 'Imbe', i_alpha, i_img],
           [9, 'Jackfruit', j_alpha, j_img],
           [10, 'Kiwi', k_alpha, k_img],
           [11, 'Lychee', l_alpha, l_img],
           [12, 'Mango', m_alpha, m_img],
           [13, 'Nectarine', n_alpha, n_img],
           [14, 'Orange', o_alpha, o_img],
           [15, 'Papaya', p_alpha, p_img],
           [16, 'Quince', q_alpha, q_img],
           [17, 'Raspberries', r_alpha, r_img],
           [18, 'Strawberry', s_alpha, s_img],
           [19, 'Tamarind', t_alpha, t_img],
           [20, 'Ugli', u_alpha, u_img],
           [21, 'Voavanga', v_alpha, v_img],
           [22, 'Walnut', w_alpha, w_img],
           [23, 'Xigua', x_alpha, x_img],
           [24, 'Yellow Passionfruit', y_alpha, y_img],
           [25, 'Zhe Fruit', z_alpha, z_img]
      ];
      return cut.splice(sid, 1);
 };
export {
     GetRandom,
     Randomfruits,
     Selectedfruit
     }