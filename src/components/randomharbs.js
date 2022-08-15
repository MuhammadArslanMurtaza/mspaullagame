import a_alpha from '../img/atozalphbets/A.png';
import apple_img from '../img/herbspics/Allspice.png';
import b_alpha from '../img/atozalphbets/B.png';
import b_img from '../img/herbspics/Barberry.png';
import c_alpha from '../img/atozalphbets/C.png';
import c_img from '../img/herbspics/Caraway.png';
import d_alpha from '../img/atozalphbets/D.png';
import d_img from '../img/herbspics/Damiana.png';
import e_alpha from '../img/atozalphbets/E.png';
import e_img from '../img/herbspics/Eleuthero.png';
import f_alpha from '../img/atozalphbets/F.png';
import f_img from '../img/herbspics/False-Unicorn.png';
import g_alpha from '../img/atozalphbets/G.png';
import g_img from '../img/herbspics/ginger.png';
import h_alpha from '../img/atozalphbets/H.png';
import h_img from '../img/herbspics/Hops.png';
import i_alpha from '../img/atozalphbets/I.png';
import i_img from '../img/herbspics/IVY-leaves.png';
import j_alpha from '../img/atozalphbets/J.png';
import j_img from '../img/herbspics/Jasmine.png';
import k_alpha from '../img/atozalphbets/K.png';
import k_img from '../img/herbspics/Kelp.png';
import l_alpha from '../img/atozalphbets/L.png';
import l_img from '../img/herbspics/Lavender.png';
import m_alpha from '../img/atozalphbets/M.png';
import m_img from '../img/herbspics/Mandarin.png';
import n_alpha from '../img/atozalphbets/N.png';
import n_img from '../img/herbspics/Neroli.png';
import o_alpha from '../img/atozalphbets/O.png';
import o_img from '../img/herbspics/Oregano.png';
import p_alpha from '../img/atozalphbets/P.png';
import p_img from '../img/herbspics/Parsley.png';
import q_alpha from '../img/atozalphbets/Q.png';
import q_img from '../img/herbspics/Quassia.png';
import r_alpha from '../img/atozalphbets/R.png';
import r_img from '../img/herbspics/Ragwort.png';
import s_alpha from '../img/atozalphbets/S.png';
import s_img from '../img/herbspics/Saffron.png';
import t_alpha from '../img/atozalphbets/T.png';
import t_img from '../img/herbspics/Tansy.png';
import u_alpha from '../img/atozalphbets/U.png';
import u_img from '../img/herbspics/Uvaursi.png';
import v_alpha from '../img/atozalphbets/V.png';
import v_img from '../img/herbspics/Valerian.png';
import w_alpha from '../img/atozalphbets/W.png';
import w_img from '../img/herbspics/Willow-Herb.png';
import x_alpha from '../img/atozalphbets/X.png';
import x_img from '../img/herbspics/xian-mao.png';
import y_alpha from '../img/atozalphbets/Y.png';
import y_img from '../img/herbspics/Yarrow.png';
import z_alpha from '../img/atozalphbets/Z.png';
import z_img from '../img/herbspics/Zinc-herbs.png';

 var Randomfruits = function (sid) {
     var cut = [
          [0, 'Allspice', a_alpha, apple_img],
          [1, 'Barberry', b_alpha, b_img],
          [2, 'Caraway', c_alpha, c_img],
          [3, 'Damiana', d_alpha, d_img],
          [4, 'Eleuthero', e_alpha, e_img],
          [5, 'False Unicorn', f_alpha, f_img],
          [6, 'Ginger', g_alpha, g_img],
          [7, 'Hops', h_alpha, h_img],
          [8, 'IVY leaves', i_alpha, i_img],
          [9, 'Jasmine', j_alpha, j_img],
          [10, 'Kelp', k_alpha, k_img],
          [11, 'Lavender', l_alpha, l_img],
          [12, 'Mandarin', m_alpha, m_img],
          [13, 'Neroli', n_alpha, n_img],
          [14, 'Oregano', o_alpha, o_img],
          [15, 'Parsley', p_alpha, p_img],
          [16, 'Quassia', q_alpha, q_img],
          [17, 'Ragwort', r_alpha, r_img],
          [18, 'Saffron', s_alpha, s_img],
          [19, 'Tansy', t_alpha, t_img],
          [20, 'Uvaursi', u_alpha, u_img],
          [21, 'Valerian', v_alpha, v_img],
          [22, 'Willow Herb', w_alpha, w_img],
          [23, 'Xian mao', x_alpha, x_img],
          [24, 'Yarrow', y_alpha, y_img],
          [25, 'Zinc herbs', z_alpha, z_img]
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
          [0, 'Allspice', a_alpha, apple_img],
          [1, 'Barberry', b_alpha, b_img],
          [2, 'Caraway', c_alpha, c_img],
          [3, 'Damiana', d_alpha, d_img],
          [4, 'Eleuthero', e_alpha, e_img],
          [5, 'False Unicorn', f_alpha, f_img],
          [6, 'Ginger', g_alpha, g_img],
          [7, 'Hops', h_alpha, h_img],
          [8, 'IVY leaves', i_alpha, i_img],
          [9, 'Jasmine', j_alpha, j_img],
          [10, 'Kelp', k_alpha, k_img],
          [11, 'Lavender', l_alpha, l_img],
          [12, 'Mandarin', m_alpha, m_img],
          [13, 'Neroli', n_alpha, n_img],
          [14, 'Oregano', o_alpha, o_img],
          [15, 'Parsley', p_alpha, p_img],
          [16, 'Quassia', q_alpha, q_img],
          [17, 'Ragwort', r_alpha, r_img],
          [18, 'Saffron', s_alpha, s_img],
          [19, 'Tansy', t_alpha, t_img],
          [20, 'Uvaursi', u_alpha, u_img],
          [21, 'Valerian', v_alpha, v_img],
          [22, 'Willow Herb', w_alpha, w_img],
          [23, 'Xian mao', x_alpha, x_img],
          [24, 'Yarrow', y_alpha, y_img],
          [25, 'Zinc herbs', z_alpha, z_img]
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
           [0, 'Allspice', a_alpha, apple_img],
          [1, 'Barberry', b_alpha, b_img],
          [2, 'Caraway', c_alpha, c_img],
          [3, 'Damiana', d_alpha, d_img],
          [4, 'Eleuthero', e_alpha, e_img],
          [5, 'False Unicorn', f_alpha, f_img],
          [6, 'Ginger', g_alpha, g_img],
          [7, 'Hops', h_alpha, h_img],
          [8, 'IVY leaves', i_alpha, i_img],
          [9, 'Jasmine', j_alpha, j_img],
          [10, 'Kelp', k_alpha, k_img],
          [11, 'Lavender', l_alpha, l_img],
          [12, 'Mandarin', m_alpha, m_img],
          [13, 'Neroli', n_alpha, n_img],
          [14, 'Oregano', o_alpha, o_img],
          [15, 'Parsley', p_alpha, p_img],
          [16, 'Quassia', q_alpha, q_img],
          [17, 'Ragwort', r_alpha, r_img],
          [18, 'Saffron', s_alpha, s_img],
          [19, 'Tansy', t_alpha, t_img],
          [20, 'Uvaursi', u_alpha, u_img],
          [21, 'Valerian', v_alpha, v_img],
          [22, 'Willow Herb', w_alpha, w_img],
          [23, 'Xian mao', x_alpha, x_img],
          [24, 'Yarrow', y_alpha, y_img],
          [25, 'Zinc herbs', z_alpha, z_img]
      ];
      return cut.splice(sid, 1);
 };
export {
     GetRandom,
     Randomfruits,
     Selectedfruit
     }