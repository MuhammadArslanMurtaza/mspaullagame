import a_alpha from '../img/atozalphbets/A.png';
import apple_img from '../img/Vegtables-alphabets-pics/amaranth.png';
import b_alpha from '../img/atozalphbets/B.png';
import b_img from '../img/Vegtables-alphabets-pics/Beet.png';
import c_alpha from '../img/atozalphbets/C.png';
import c_img from '../img/Vegtables-alphabets-pics/Cabbage.png';
import d_alpha from '../img/atozalphbets/D.png';
import d_img from '../img/Vegtables-alphabets-pics/Diakon-radish.png';
import e_alpha from '../img/atozalphbets/E.png';
import e_img from '../img/Vegtables-alphabets-pics/Endive.png';
import f_alpha from '../img/atozalphbets/F.png';
import f_img from '../img/Vegtables-alphabets-pics/Fiddlehead_closeup.png';
import g_alpha from '../img/atozalphbets/G.png';
import g_img from '../img/Vegtables-alphabets-pics/Garlic.png';
import h_alpha from '../img/atozalphbets/H.png';
import h_img from '../img/Vegtables-alphabets-pics/Habanero.png';
import i_alpha from '../img/atozalphbets/I.png';
import i_img from '../img/Vegtables-alphabets-pics/Iceberg-Lettuce.png';
import j_alpha from '../img/atozalphbets/J.png';
import j_img from '../img/Vegtables-alphabets-pics/Jalapeno.png';
import k_alpha from '../img/atozalphbets/K.png';
import k_img from '../img/Vegtables-alphabets-pics/Kale.png';
import l_alpha from '../img/atozalphbets/L.png';
import l_img from '../img/Vegtables-alphabets-pics/Lemon.png';
import m_alpha from '../img/atozalphbets/M.png';
import m_img from '../img/Vegtables-alphabets-pics/Mushroom.png';
import n_alpha from '../img/atozalphbets/N.png';
import n_img from '../img/Vegtables-alphabets-pics/Napa-cabbage.png';
import o_alpha from '../img/atozalphbets/O.png';
import o_img from '../img/Vegtables-alphabets-pics/Onion.png';
import p_alpha from '../img/atozalphbets/P.png';
import p_img from '../img/Vegtables-alphabets-pics/Pepper.png';
import r_alpha from '../img/atozalphbets/R.png';
import r_img from '../img/Vegtables-alphabets-pics/Red-cabbage.png';
import s_alpha from '../img/atozalphbets/S.png';
import s_img from '../img/Vegtables-alphabets-pics/Spinach.png';
import t_alpha from '../img/atozalphbets/T.png';
import t_img from '../img/Vegtables-alphabets-pics/Turnips.png';
import u_alpha from '../img/atozalphbets/U.png';
import u_img from '../img/Vegtables-alphabets-pics/Ulluco.png';
import v_alpha from '../img/atozalphbets/V.png';
import v_img from '../img/Vegtables-alphabets-pics/Velvet-beans.png';
import w_alpha from '../img/atozalphbets/W.png';
import w_img from '../img/Vegtables-alphabets-pics/wasabi.png';
import x_alpha from '../img/atozalphbets/X.png';
import x_img from '../img/Vegtables-alphabets-pics/Ximenia.png';
import y_alpha from '../img/atozalphbets/Y.png';
import y_img from '../img/Vegtables-alphabets-pics/Yam.png';
import z_alpha from '../img/atozalphbets/Z.png';
import z_img from '../img/Vegtables-alphabets-pics/Zucchini.png';

var Randomvagitables = function (sid) {
     var cut = [
          [0, 'Amaranth', a_alpha, apple_img],
          [1, 'Beet', b_alpha, b_img],
          [2, 'Cabbage', c_alpha, c_img],
          [3, 'Diakon Radish', d_alpha, d_img],
          [4, 'Endive', e_alpha, e_img],
          [5, 'Fiddlehead Closeup', f_alpha, f_img],
          [6, 'Garlic', g_alpha, g_img],
          [7, 'Habanero', h_alpha, h_img],
          [8, 'Iceberg Lettuce', i_alpha, i_img],
          [9, 'Jalapeno', j_alpha, j_img],
          [10, 'Kale', k_alpha, k_img],
          [11, 'Lemon', l_alpha, l_img],
          [12, 'Mushroom', m_alpha, m_img],
          [13, 'Napa Cabbage', n_alpha, n_img],
          [14, 'Onion', o_alpha, o_img],
          [15, 'Pepper', p_alpha, p_img],
          [16, 'Red Cabbage', r_alpha, r_img],
          [17, 'Spinach', s_alpha, s_img],
          [18, 'Turnips', t_alpha, t_img],
          [19, 'Ulluco', u_alpha, u_img],
          [20, 'Velvet Beans', v_alpha, v_img],
          [21, 'Wasabi', w_alpha, w_img],
          [22, 'Ximenia', x_alpha, x_img],
          [23, 'Yam', y_alpha, y_img],
          [24, 'Zucchini', z_alpha, z_img]
     ];
     cut.splice(sid, 1);
     var A = cut.slice(0);
     A.sort(function () {
          return .5 - Math.random();
     });
     return A.splice(0, 2);
};
var GetRandom = function (corect, random) {
     var farray = [
          [0, 'Amaranth', a_alpha, apple_img],
          [1, 'Beet', b_alpha, b_img],
          [2, 'Cabbage', c_alpha, c_img],
          [3, 'Diakon Radish', d_alpha, d_img],
          [4, 'Endive', e_alpha, e_img],
          [5, 'Fiddlehead Closeup', f_alpha, f_img],
          [6, 'Garlic', g_alpha, g_img],
          [7, 'Habanero', h_alpha, h_img],
          [8, 'Iceberg Lettuce', i_alpha, i_img],
          [9, 'Jalapeno', j_alpha, j_img],
          [10, 'Kale', k_alpha, k_img],
          [11, 'Lemon', l_alpha, l_img],
          [12, 'Mushroom', m_alpha, m_img],
          [13, 'Napa Cabbage', n_alpha, n_img],
          [14, 'Onion', o_alpha, o_img],
          [15, 'Pepper', p_alpha, p_img],
          [16, 'Red Cabbage', r_alpha, r_img],
          [17, 'Spinach', s_alpha, s_img],
          [18, 'Turnips', t_alpha, t_img],
          [19, 'Ulluco', u_alpha, u_img],
          [20, 'Velvet Beans', v_alpha, v_img],
          [21, 'Wasabi', w_alpha, w_img],
          [22, 'Ximenia', x_alpha, x_img],
          [23, 'Yam', y_alpha, y_img],
          [24, 'Zucchini', z_alpha, z_img]
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
var Selectedvagitables = function (sid) {
     var cut = [
          [0, 'Amaranth', a_alpha, apple_img],
          [1, 'Beet', b_alpha, b_img],
          [2, 'Cabbage', c_alpha, c_img],
          [3, 'Diakon Radish', d_alpha, d_img],
          [4, 'Endive', e_alpha, e_img],
          [5, 'Fiddlehead Closeup', f_alpha, f_img],
          [6, 'Garlic', g_alpha, g_img],
          [7, 'Habanero', h_alpha, h_img],
          [8, 'Iceberg Lettuce', i_alpha, i_img],
          [9, 'Jalapeno', j_alpha, j_img],
          [10, 'Kale', k_alpha, k_img],
          [11, 'Lemon', l_alpha, l_img],
          [12, 'Mushroom', m_alpha, m_img],
          [13, 'Napa Cabbage', n_alpha, n_img],
          [14, 'Onion', o_alpha, o_img],
          [15, 'Pepper', p_alpha, p_img],
          [16, 'Red Cabbage', r_alpha, r_img],
          [17, 'Spinach', s_alpha, s_img],
          [18, 'Turnips', t_alpha, t_img],
          [19, 'Ulluco', u_alpha, u_img],
          [20, 'Velvet Beans', v_alpha, v_img],
          [21, 'Wasabi', w_alpha, w_img],
          [22, 'Ximenia', x_alpha, x_img],
          [23, 'Yam', y_alpha, y_img],
          [24, 'Zucchini', z_alpha, z_img]
     ];
     return cut.splice(sid, 1);
};
export {
     GetRandom,
     Randomvagitables,
     Selectedvagitables
}