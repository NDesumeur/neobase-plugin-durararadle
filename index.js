// DurararaDle : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoBase sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoBase.
// Elle tourne dans le bac à sable de NeoBase, avec ses outils d'interface (ctx.host) et seulement les autorisations de son plugin.json.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.mdRow{display:grid;grid-template-columns:repeat(var(--n),46px);gap:6px}
.mdCell{height:46px;display:grid;place-items:center;font:18px var(--title);color:#fff;background:#160d30;box-shadow:inset 0 0 0 2px #3a2a6e}
.mdCell.typed{box-shadow:inset 0 0 0 2px var(--lilac)}
.mdCell.ghost{color:#5e4d85}
.mdCell.flip{animation:mdFlip .45s both}
.gSel{width:auto;font-size:14px;padding:6px 10px;margin-right:8px}
.shGrid td.num{text-align:right}
.mdClue{display:flex;flex-direction:column;gap:8px}
.mdHint{--fill:var(--field);padding:10px 14px;color:var(--lilac);font-size:15px}
.mdEmoji{--fill:var(--field);padding:14px;font-size:34px;letter-spacing:6px;text-align:center}
.mdForm{position:relative}
.mdInput{width:100%;font-size:16px;padding:12px 14px}
.mdSug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:5;--fill:#120922;display:flex;flex-direction:column;padding:4px;max-height:340px;overflow-y:auto}
.mdSugItem{all:unset;cursor:var(--cp,pointer);display:flex;justify-content:space-between;gap:12px;padding:8px 10px;color:#fff;font-size:15px}
.mdSugItem:hover,.mdSugItem.on{background:rgba(var(--mgr),.22)}
.mdSugItem .hint{font-size:12px}
.mdSugItem .n{display:flex;align-items:center;gap:10px}
.mdSugItem img{width:30px;height:30px;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.sysCard.mdWin{flex-direction:row;align-items:center;gap:18px}
.mdWin b{color:#ffd07a;font-size:17px}
.mdWinTxt{display:flex;flex-direction:column;gap:6px;min-width:0}
.mdWinImg{width:104px;height:104px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 3px #ffd07a,4px 4px 0 3px rgba(0,0,0,.45)}
.mdPix{width:240px;height:240px;align-self:center;image-rendering:pixelated;box-shadow:0 0 0 3px var(--field),6px 6px 0 3px rgba(0,0,0,.45)}
.mdGuesses{display:flex;flex-direction:column;gap:6px;overflow-x:auto}
.mdRow{display:grid;gap:6px}
.mdRow.head{position:sticky;top:0}
.mdH{font:7px var(--title);letter-spacing:1px;color:var(--muted);text-align:center;padding:4px 0}
.mdCell{display:flex;align-items:center;justify-content:center;gap:4px;min-height:54px;padding:6px;text-align:center;font-size:12px;overflow-wrap:break-word;hyphens:auto;min-width:0;color:#fff;background:#2a1d52;box-shadow:inset 0 -3px 0 rgba(0,0,0,.35);animation:mdFlip .35s steps(4) backwards}
.mdCell.who{background:#1c1238;font-weight:bold;justify-content:flex-start;gap:8px;text-align:left}
.mdCell.who img{width:40px;height:40px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.mdCell.wide img{width:32px;height:32px}
.mdCell.ok{background:#2f8f5a}
.mdCell.part{background:#c0862a}
.mdCell.no{background:#9a2a44}
.mdCell i{font-style:normal;font-size:18px;color:#ffd07a}
.mdCell.wide{justify-content:flex-start;padding:10px 14px;min-height:0;font-size:15px}
.mdRow .mdCell:nth-child(2){animation-delay:.05s}
.mdRow .mdCell:nth-child(3){animation-delay:.1s}
.mdRow .mdCell:nth-child(4){animation-delay:.15s}
.mdRow .mdCell:nth-child(5){animation-delay:.2s}
.mdRow .mdCell:nth-child(6){animation-delay:.25s}
.mdRow .mdCell:nth-child(7){animation-delay:.3s}
.mdRow .mdCell:nth-child(8){animation-delay:.35s}
.mdRow .mdCell:nth-child(9){animation-delay:.4s}

/* habillage v1.2 */
.dleWrap{--dle:#ff5ad9;gap:14px}
.dleWrap .agHead{padding:14px 18px;background:linear-gradient(90deg,color-mix(in srgb,var(--dle) 32%,#0d0820),transparent 85%);box-shadow:inset 5px 0 0 var(--dle)}
.dleWrap .agHead .label{font-size:16px;letter-spacing:2px;color:#fff;text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.dleWrap .agHead .hint{color:color-mix(in srgb,var(--dle) 55%,#fff)}
.dleWrap .agNav button,.dleWrap .row button{letter-spacing:1px}
.dleWrap .mdInput{background:#0d0820;border:3px solid var(--dle);box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 16px color-mix(in srgb,var(--dle) 30%,transparent);transition:box-shadow .15s}
.dleWrap .mdInput:focus{outline:none;box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 26px color-mix(in srgb,var(--dle) 60%,transparent)}
.dleWrap .mdSug{border:3px solid var(--dle);box-shadow:6px 6px 0 rgba(0,0,0,.55)}
.dleWrap .mdSugItem{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.dleWrap .mdSugItem img{width:38px;height:38px}
.dleWrap .mdSugItem:hover,.dleWrap .mdSugItem.on{background:color-mix(in srgb,var(--dle) 28%,transparent)}
.dleWrap .mdHint,.dleWrap .mdEmoji{box-shadow:inset 4px 0 0 var(--dle),0 0 0 3px rgba(0,0,0,.35)}
.dleWrap .mdGuesses{gap:8px;padding:6px 0}
.dleWrap .mdH{background:#160d30;color:#fff;border-bottom:3px solid var(--dle);padding:7px 2px;font-size:7px}
.dleWrap .mdRow{gap:6px}
.dleWrap .mdRow:not(.head) .mdCell{font-weight:bold;text-shadow:1px 1px 0 rgba(0,0,0,.5);box-shadow:inset 0 3px 0 rgba(255,255,255,.2),inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px rgba(0,0,0,.55)}
.dleWrap .mdCell.who{background:linear-gradient(#2a1d52,#1c1238);border-left:4px solid var(--dle)}
.dleWrap .mdCell.who img{width:46px;height:46px;box-shadow:0 0 0 2px var(--dle),3px 3px 0 2px rgba(0,0,0,.5)}
.dleWrap .mdCell.ok{background:linear-gradient(#45c27b,#2f8f5a)}
.dleWrap .mdCell.part{background:linear-gradient(#e8aa42,#c0862a)}
.dleWrap .mdCell.no{background:linear-gradient(#cc3f5e,#9a2a44)}
.dleWrap .mdCell.wide{font-size:16px}
.dleWrap .sysCard.mdWin{background:linear-gradient(135deg,#34265f,#160d30);border:3px solid #ffd07a;box-shadow:0 0 0 3px #000,0 0 30px rgba(255,208,122,.35);padding:16px}
.dleWrap .mdWinImg{width:124px;height:124px}
.dleWrap .mdWin b{font-size:19px;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.dleWrap .mdPix{box-shadow:0 0 0 3px var(--dle),6px 6px 0 3px rgba(0,0,0,.5)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoBase)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoBase pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "dle_durararadle" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __asset = async (rel, type) => URL.createObjectURL(new Blob([Uint8Array.from(atob(await neo.pluginFileRead(ctx.id, rel)), c => c.charCodeAt(0))], { type }));  // un fichier livré avec le plugin
  const __imgs = {};  // les portraits livrés avec le plugin
  await Promise.all(["akane-awakusu.webp","anri-sonohara.webp","aoba-kuronuma.webp","asanuma.webp","celty-sturluson.webp","chikage-rokujou.webp","denis.webp","dougen-awakusu.webp","drakon.webp","earthworm.webp","egor.webp","eijirou-sharaku.webp","emilia-kishitani.webp","erika-karisawa.webp","ginichirou-kuzuhara.webp","haruna-niekawa.webp","haruya-shiki.webp","hashim.webp","higa.webp","himeka-tatsugami.webp","hiroto-shijima.webp","horada.webp","izaya-orihara.webp","jinnai-yodogiri.webp","kanazawa.webp","kasane-kujiragi.webp","kasuka-heiwajima.webp","kaztano.webp","kine.webp","kinnosuke-kuzuhara.webp","kisuke-adabashi.webp","koji-yatabe.webp","kuon-kotonami.webp","kururi-orihara.webp","kyouhei-kadota.webp","mairu-orihara.webp","maju-kuzuhara.webp","manami-mamiya.webp","masaomi-kida.webp","max-sandshelt.webp","mika-harima.webp","mikado-ryuugamine.webp","mikage-sharaku.webp","mikiya-awakusu.webp","mizuki-akabayashi.webp","nakura.webp","namie-yagiri.webp","ran-izumii.webp","rio-kamichika.webp","ruri-hijiribe.webp","ryo-takiguchi.webp","saburo-togusa.webp","saki-mikajima.webp","sayaka-sonohara.webp","seiji-yagiri.webp","seitarou-yagiri.webp","shingen-kishitani.webp","shinichi-tsukumoya.webp","shinra-kishitani.webp","shiri.webp","shizuo-heiwajima.webp","shizuo-nobusuma.webp","shojiro-kitagoma.webp","shu-aozaki.webp","shuuji-niekawa.webp","simon-brezhnev.webp","slon.webp","takaaki-kazamoto.webp","takashi-nasujima.webp","tom-tanaka.webp","vorona.webp","walker-yumasaki.webp","yahiro-mizuchi.webp","yuigadokusonmaru.webp"].map(async n => { __imgs[n] = await __asset('img/' + n, /.png$/.test(n) ? 'image/png' : /.webp$/.test(n) ? 'image/webp' : 'image/jpeg'); }));
  const LEGACY_GAMES = {"top":["durararadle"],"best":"^$"};
  let games = await doc('games');
  if (games == null) {  // première ouverture : tu retrouves tes records et tes parties d'avant
    const old = legacy.api ? await legacy.api('games').catch(() => null) : null; games = { best: {} };
    if (old) { const re = new RegExp(LEGACY_GAMES.best); for (const [k, v] of Object.entries(old.best || {})) if (re.test(k)) games.best[k] = v; for (const k of LEGACY_GAMES.top) if (old[k] !== undefined) games[k] = old[k]; await folder.write('games', games); }
  }
  games = { best: {}, ...games };
  let gamesTimer = null;
  const saveGames = () => { clearTimeout(gamesTimer); gamesTimer = setTimeout(() => { gamesTimer = null; folder.write('games', games).catch(() => {}); }, 500); };
  const best = (k, v, higher = true) => { const b = games.best[k]; if (b == null || (higher ? v > b : v < b)) { games.best[k] = v; saveGames(); return true; } return false; };
  const gstore = (k, init) => (games[k] ??= init);  // la section d'un jeu
function gameLoop(st, appKey, update, draw) {
  cancelAnimationFrame(st.raf);
  const STEP = 1000 / 60; let acc = 0, last = performance.now();
  const frame = t => {
    if (!view.classList.contains('on')) { st.raf = 0; if (st.mode === 'play') st.mode = 'pause'; return; }  // leaving the tab pauses the game
    st.raf = requestAnimationFrame(frame);
    acc += Math.min(200, t - last); last = t;
    while (acc >= STEP) { if (st.mode === 'play') update(); st.tick++; acc -= STEP; }
    draw();
  };
  st.raf = requestAnimationFrame(frame);
}
function gameText(g, w, lines, y0) {  // centred pixel-font lines over a dark band
  g.fillStyle = 'rgba(11,3,28,.72)'; g.fillRect(0, y0 - 14, w, lines.length * 14 + 14);
  g.textAlign = 'center';
  lines.forEach(([text, color, size], i) => { g.fillStyle = color; g.font = (size || 8) + 'px "Press Start 2P", monospace'; g.fillText(text, w / 2, y0 + i * 14); });
  g.textAlign = 'left';
}
const px = (g, color, x, y, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
function sprite(g, rows, x, y, pal) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) { const c = pal[r[i]]; if (c) px(g, c, x + i, y + j); } }); }
  // ---- ton code d'origine ----
/* NeoDle: the "-dle" games (guess a character of a series). One engine, each series registers itself from web/dle/<series>.js with dleRegister():
   its columns (eq: same value, set: lists that can overlap, num / ord: numbers or ordered labels with ↑ ↓ arrows), its characters and its pools.
   Modes: Classique (columns compared), Indices (hints one after the other), Emoji (when the characters have emojis), Image (the portrait, less pixelated after each wrong guess).
   A daily challenge per mode (the same for everyone) and free games, saved in games.<key> (synced). Portraits: web/dle/img/<series>/ (from the series' Fandom wiki). */

const DLES = {};
const DLE_MODES = {classic: 'Classique', hints: 'Indices', emoji: 'Emoji', image: 'Image'};
const DLE_GENDER = {F: 'Femme', M: 'Homme', V: 'Variable', N: 'Aucun', '?': 'Inconnu'};
const dleDay = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dleHash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const dleNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9぀-鿿]+/g, ' ').trim();
const dleImg = (g, c) => c.img ? (__imgs[c.img] || '') : '';

/* ---------- comparing a guess with the answer, column by column ---------- */
function dleCompare(g, guess, ans) {
  return g.cols.map(col => {
    const a = guess[col.id], b = ans[col.id], show = v => v == null || v === '' ? '?' : col.type === 'ord' ? col.labels[v] : col.map ? col.map[v] ?? v : (col.pre || '') + v + (col.unit || '');
    if (col.type === 'set') {
      const A = a || [], B = b || [], S = new Set(A), same = A.length === B.length && B.every(x => S.has(x));
      return {k: col.k, v: A.join(', ') || col.none || 'Aucun', r: same ? 'ok' : B.some(x => S.has(x)) ? 'part' : 'no'};
    }
    if (col.type === 'num' || col.type === 'ord') {
      if (a === b) return {k: col.k, v: show(a), r: 'ok'};
      if (a == null || b == null) return {k: col.k, v: show(a), r: 'no'};
      return {k: col.k, v: show(a), r: col.near && Math.abs(a - b) <= col.near ? 'part' : 'no', arrow: b > a ? '↑' : '↓'};
    }
    return {k: col.k, v: show(a), r: a === b ? 'ok' : 'no'};
  });
}

/* ---------- the save: games.<key> ---------- */
const dleSave = g => gstore(g.key, {days: {}, stats: {}, free: null, pool: 'main', mode: 'classic'});
const dlePool = (g, p) => g.chars.filter(c => c.t <= (g.pools[p] || g.pools.main).t);
const dleFits = (c, mode) => mode === 'emoji' ? !!c.em : mode === 'image' ? !!c.img : mode === 'hints' ? c.h.length > 0 : true;
function dleDaily(g, mode, day = dleDay()) {  // the same character for everyone on a given day, among the main pool
  const pool = dlePool(g, 'all').filter(c => dleFits(c, mode));
  return pool[dleHash(g.key + ':' + mode + ':' + day) % pool.length];
}
function dleState(g, mode, daily) {  // the game being played: today's challenge of this mode, or the free game
  const s = dleSave(g);
  if (!g.pools[s.pool]) s.pool = 'all';  // a pool that no longer exists (MonogatariDle's « extrême »)
  if (daily) { const day = dleDay(), d = (s.days[day] ||= {}); return d[mode] ||= {ans: dleDaily(g, mode, day).n, guesses: [], won: false}; }
  const pool = dlePool(g, s.pool).filter(c => dleFits(c, mode));
  if (!s.free || s.free.mode !== mode || s.free.pool !== s.pool || !pool.some(c => c.n === s.free.ans))
    s.free = {mode, pool: s.pool, ans: pool[Math.floor(Math.random() * pool.length)].n, guesses: [], won: false};
  return s.free;
}
function dleRecord(g, mode, daily, won, tries) {
  const st = (dleSave(g).stats[mode] ||= {played: 0, wins: 0, streak: 0, bestStreak: 0, tries: 0, lastDay: ''});
  st.played++; if (won) { st.wins++; st.tries += tries; }
  if (daily) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    st.streak = won ? (st.lastDay === dleDay(y) ? st.streak + 1 : 1) : 0; st.bestStreak = Math.max(st.bestStreak, st.streak); st.lastDay = dleDay();
  }
}

/* ---------- the portrait of the Image mode: drawn on a few big pixels, more of them after each wrong guess ---------- */
const DLE_PIX = [6, 9, 13, 18, 26, 38, 56, 90];
function dlePixel(cv, src, cells) {
  const im = new Image();
  im.onload = () => {
    const S = cv.width, side = Math.min(im.width, im.height), sx = (im.width - side) / 2, sy = im.height > im.width ? 0 : (im.height - side) / 2;  // square crop, the top of tall portraits (the face)
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = cells >= S;
    if (cells >= S) { ctx.drawImage(im, sx, sy, side, side, 0, 0, S, S); return; }
    const t = document.createElement('canvas'); t.width = t.height = cells;
    const tc = t.getContext('2d'); tc.drawImage(im, sx, sy, side, side, 0, 0, cells, cells);
    ctx.drawImage(t, 0, 0, cells, cells, 0, 0, S, S);
  };
  im.src = src;
}

/* ---------- the page of one game ---------- */
const dleChar = (g, n) => g.chars.find(c => c.n === n);
function dleRender(g) {
  if (!games) return;
  const u = g.ui, s = dleSave(g), st = dleState(g, u.mode, u.daily), ans = dleChar(g, st.ans) || g.chars[0], tries = st.guesses.length;
  for (const b of u.modes.children) b.classList.toggle('on', b.dataset.m === u.mode);
  u.dailyBtn.classList.toggle('main', u.daily); u.freeBtn.classList.toggle('main', !u.daily);
  u.pool.value = s.pool; u.pool.disabled = u.daily;
  const stats = s.stats[u.mode];
  u.info.textContent = (u.daily ? 'Défi du jour · ' : 'Partie libre · ' + g.pools[s.pool].l + ' · ') + dlePool(g, u.daily ? 'all' : s.pool).filter(c => dleFits(c, u.mode)).length + ' personnages'
    + (stats ? ' · série ' + stats.streak + ' (record ' + stats.bestStreak + ') · ' + stats.wins + ' / ' + stats.played + ' gagnées' : '');
  // what the mode shows before the guesses
  const top = u.clue; top.replaceChildren();
  if (u.mode === 'hints') {
    const shown = st.won ? ans.h.length : Math.min(ans.h.length, 1 + tries);
    top.append(el('span', 'label', 'Indices · ' + shown + ' / ' + ans.h.length), ...ans.h.slice(0, shown).map((h, i) => el('div', 'mdHint px', (i + 1) + '. ' + h)));
  } else if (u.mode === 'emoji') {
    const e = [...ans.em.matchAll(/\p{Extended_Pictographic}(‍\p{Extended_Pictographic}|️)*/gu)].map(m => m[0]), shown = st.won ? e.length : Math.min(e.length, 1 + tries);
    top.append(el('span', 'label', 'Emojis · ' + shown + ' / ' + e.length), el('div', 'mdEmoji px', e.slice(0, shown).join(' ') + ' ' + '❔'.repeat(e.length - shown)));
  } else if (u.mode === 'image') {
    const lv = st.won ? DLE_PIX.length : Math.min(tries, DLE_PIX.length), cv = el('canvas', 'mdPix');
    cv.width = cv.height = 240;
    top.append(el('span', 'label', st.won ? 'Portrait' : 'Portrait · netteté ' + (lv + 1) + ' / ' + (DLE_PIX.length + 1)), cv);
    dlePixel(cv, dleImg(g, ans), lv >= DLE_PIX.length ? 240 : DLE_PIX[lv]);
  } else {
    top.append(el('span', 'hint', 'Vert : pareil · orange : en partie' + (g.cols.some(c => c.near) ? ' ou proche' : '') + ' · rouge : différent · ' + g.arrows));
    if (!st.won && tries >= 6 && ans.va) top.append(el('div', 'mdHint px', 'Indice (6 essais) : voix japonaise ' + ans.va));
    if (!st.won && tries >= 10 && ans.h.length) top.append(el('div', 'mdHint px', 'Indice (10 essais) : ' + ans.h.at(-1)));
  }
  // the input, or the win banner
  u.form.style.display = st.won ? 'none' : '';
  u.win.style.display = st.won ? '' : 'none';
  if (st.won) {
    const next = new Date(), txt = el('div', 'mdWinTxt'); next.setHours(24, 0, 0, 0);
    txt.append(el('b', '', 'Bravo ! C\'était ' + ans.n), el('span', 'hint', [ans.jp, 'trouvé en ' + tries + ' essai' + (tries > 1 ? 's' : ''), g.tiers[ans.t], ans.va && 'voix : ' + ans.va].filter(Boolean).join(' · ')),
      el('span', 'hint', u.daily ? 'Prochain défi dans ' + Math.ceil((next - Date.now()) / 3600e3) + ' h. Une partie libre en attendant ?' : 'Clique sur « Nouvelle partie » pour recommencer.'));
    u.win.replaceChildren(...(ans.img ? [Object.assign(el('img', 'mdWinImg'), {src: dleImg(g, ans), alt: ''})] : []), txt);
  }
  u.newBtn.style.display = u.daily ? 'none' : '';
  // the guesses, the last one first
  const list = u.guesses, cols = g.cols.length, grid = {gridTemplateColumns: '1.5fr repeat(' + cols + ',1fr)', minWidth: 150 + cols * 104 + 'px'};
  list.replaceChildren();
  if (u.mode === 'classic' && tries) { const hr = el('div', 'mdRow head'); Object.assign(hr.style, grid); hr.append(el('span', 'mdH', 'Personnage'), ...g.cols.map(c => el('span', 'mdH', c.k))); list.append(hr); }
  for (const name of [...st.guesses].reverse()) {
    const c = dleChar(g, name); if (!c) continue;
    const who = el('span', 'mdCell who' + (c.n === ans.n ? ' ok' : '') + (u.mode === 'classic' ? '' : ' wide ' + (c.n === ans.n ? 'ok' : 'no')));
    if (c.img) who.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    who.append(el('span', '', c.n + (u.mode === 'classic' ? '' : c.n === ans.n ? ' ✓' : ' ✗')));
    if (u.mode === 'classic') {
      const row = el('div', 'mdRow'); Object.assign(row.style, grid); row.append(who);
      for (const r of dleCompare(g, c, ans)) { const cell = el('span', 'mdCell ' + r.r, r.v); if (r.arrow) cell.append(el('i', '', r.arrow)); cell.title = r.k; row.append(cell); }
      list.append(row);
    } else list.append(who);
  }
}
function dleGuess(g, name) {
  const u = g.ui, st = dleState(g, u.mode, u.daily), c = dleChar(g, name);
  if (!c || st.won || st.guesses.includes(c.n)) return;
  st.guesses.push(c.n);
  if (c.n === st.ans) { st.won = true; dleRecord(g, u.mode, u.daily, true, st.guesses.length); sfx('launch'); } else sfx('click');
  saveGames(); u.input.value = ''; dleSuggest(g); dleRender(g);
}
function dleSuggest(g) {
  const u = g.ui, q = dleNorm(u.input.value), st = dleState(g, u.mode, u.daily);
  const pool = dlePool(g, u.daily ? 'all' : dleSave(g).pool).filter(c => !st.guesses.includes(c.n) && dleFits(c, u.mode));
  const hits = q ? pool.filter(c => (c.key ||= dleNorm([c.n, c.n.split(' ').reverse().join(' '), c.jp, ...(c.al || [])].join(' '))).includes(q)).slice(0, 8) : [];
  u.sug.replaceChildren(...hits.map((c, i) => {
    const b = el('button', 'mdSugItem' + (i === u.sel ? ' on' : '')), name = el('span', 'n');
    if (c.img) name.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    name.append(c.n); b.append(name, el('span', 'hint', c.jp || ''));
    b.onmousedown = e => { e.preventDefault(); dleGuess(g, c.n); }; return b;
  }));
  u.sug.style.display = hits.length ? '' : 'none'; u.hits = hits;
}
function dleRegister(g) {
  console.assert(g.chars.every(c => c.n && Array.isArray(c.h) && g.tiers[c.t] && g.cols.every(col => col.type !== 'set' || Array.isArray(c[col.id] || []))) && new Set(g.chars.map(c => c.n)).size === g.chars.length, g.key + ': well-formed, unique names');
  DLES[g.key] = g;
  const modes = Object.keys(DLE_MODES).filter(m => g.chars.some(c => dleFits(c, m)));
  // the view is already in index.html (tabs reopened at launch can be created before this script runs), else it is added here
  const v = $('dle_' + g.key) || el('div', 'appView'), w = el('div', 'appWrap'), head = el('div', 'agHead'), nav = el('div', 'agNav');
  if (!v.id) { v.id = 'dle_' + g.key; $('musicApp').before(v); }
  v.append(w);
  w.classList.add('dleWrap'); w.style.setProperty('--dle', '#ffd04a');  // la couleur de la série
  const u = g.ui = {mode: 'classic', daily: true, info: el('span', 'hint'), dailyBtn: el('button', 'btn px', 'DÉFI DU JOUR'), freeBtn: el('button', 'btn px', 'PARTIE LIBRE'), pool: el('select', 'f gSel'), newBtn: el('button', 'btn px', 'NOUVELLE PARTIE'),
    modes: el('div', 'row'), clue: el('div', 'mdClue'), form: el('div', 'mdForm'), input: el('input', 'f mdInput'), sug: el('div', 'mdSug px'), win: el('div', 'sysCard px mdWin'), guesses: el('div', 'mdGuesses')};
  u.pool.title = 'Personnages possibles en partie libre';
  Object.assign(u.input, {placeholder: 'Nom d\'un personnage de ' + g.series + '…', spellcheck: false, autocomplete: 'off'});
  u.sug.style.display = 'none'; u.win.style.display = 'none';
  nav.append(u.dailyBtn, u.freeBtn, u.pool, u.newBtn); head.append(el('span', 'label', g.name), u.info, nav); u.form.append(u.input, u.sug);
  w.append(head, u.modes, u.clue, u.form, u.win, u.guesses, el('div', 'hint', g.about));
  u.input.oninput = () => { u.sel = 0; dleSuggest(g); };
  u.input.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); u.sel = Math.max(0, Math.min((u.hits?.length || 1) - 1, (u.sel || 0) + (e.key === 'ArrowDown' ? 1 : -1))); dleSuggest(g); }
    if (e.key === 'Enter' && u.hits?.length) { e.preventDefault(); dleGuess(g, u.hits[u.sel || 0].n); }
    if (e.key === 'Escape') u.sug.style.display = 'none';
  };
  u.input.onblur = () => setTimeout(() => u.sug.style.display = 'none', 100);
  u.modes.append(...modes.map(k => { const b = el('button', 'tab px', DLE_MODES[k]); b.dataset.m = k; b.onclick = () => { u.mode = k; dleSave(g).mode = k; dleRender(g); }; return b; }));
  u.pool.append(...Object.entries(g.pools).map(([k, p]) => { const o = el('option', '', p.l + ' (' + dlePool(g, k).length + ')'); o.value = k; return o; }));
  u.pool.onchange = () => { dleSave(g).pool = u.pool.value; saveGames(); dleRender(g); };
  u.dailyBtn.onclick = () => { u.daily = true; dleRender(g); };
  u.freeBtn.onclick = () => { u.daily = false; dleRender(g); };
  u.newBtn.onclick = () => { const s = dleSave(g); if (s.free && !s.free.won && s.free.guesses.length) dleRecord(g, s.free.mode, false, false, 0); s.free = null; saveGames(); dleRender(g); u.input.focus(); };
}
function dleOpen(key) { const g = DLES[key], m = games?.[key]?.mode; if (m && g.ui.modes.querySelector('[data-m="' + m + '"]')) g.ui.mode = m; dleRender(g); setTimeout(() => g.ui.input.focus(), 50); }

/* DurararaDle: the characters of Durarara!! (Ryōgo Narita), from the light novels, the anime and Durarara!! SH.
   Data from the series' wiki (durarara.fandom.com): nature, nationality, groups, job, age and first light novel volume (SH counted after the 13 volumes); portraits from the wiki. */
dleRegister({key: 'durararadle', name: 'DurararaDle', series: 'Durarara!!', dir: 'durarara',
  tiers: {1: 'Principal', 2: 'Secondaire', 3: 'Mineur'},
  pools: {main: {l: 'Personnages principaux', t: 1}, more: {l: 'Principaux et secondaires', t: 2}, all: {l: 'Tous', t: 3}},
  cols: [
    {id: 'g', k: 'Genre', type: 'eq', map: DLE_GENDER}, {id: 'e', k: 'Nature', type: 'eq'}, {id: 'na', k: 'Nationalité', type: 'eq'}, {id: 'gr', k: 'Groupe', type: 'set'},
    {id: 'p', k: 'Profession', type: 'eq'}, {id: 'a', k: 'Âge (début)', type: 'num', unit: ' ans', near: 2}, {id: 'v', k: '1er tome', type: 'num', pre: 'Tome '},
  ],
  arrows: '↑ : le personnage à trouver est plus âgé ou apparaît dans un tome plus tardif, ↓ : l\'inverse (les tomes de Durarara!! SH comptent après le tome 13).',
  about: 'Devine le personnage de Durarara!!. Classique : chaque essai compare genre, nature, nationalité, groupes (Dollars, Foulards Jaunes…), profession, âge au début (orange : à 2 ans près) et premier tome du light novel où il apparaît. Indices, Emoji et Image : un indice de plus à chaque essai raté.',
  chars: [
    {n: "Mikado Ryuugamine",t: 1,g: "M",e: "Humain",p: "Lycéen",em: "💻🏙️😊🔵",h: ["Il arrive à Ikebukuro au début de l'histoire.","Il est fasciné par l'extraordinaire.","Il a créé en secret un gang sans couleur sur Internet.","C'est le fondateur des Dollars.","Voix japonaise : Toshiyuki Toyonaga."],jp: "竜ヶ峰帝人",va: "Toshiyuki Toyonaga",na: "Japonaise",gr: ["Dollars","Carrés Bleus"],a: 16,v: 1,img: "mikado-ryuugamine.webp"},
    {n: "Masaomi Kida",t: 1,g: "M",e: "Humain",p: "Lycéen",em: "🟡😎🗣️💔",h: ["Il fait des blagues nulles et drague tout le temps.","C'est l'ami d'enfance du héros.","Il a fui son passé de chef de gang.","Il a fondé les Foulards Jaunes.","Voix japonaise : Mamoru Miyano."],jp: "紀田 正臣",va: "Mamoru Miyano",na: "Japonaise",gr: ["Foulards Jaunes"],a: 16,v: 1,img: "masaomi-kida.webp"},
    {n: "Anri Sonohara",t: 1,g: "F",e: "Humain",p: "Lycéenne",em: "👓🗡️❤️📚",h: ["Elle porte des lunettes et parle peu.","Ses parents sont morts dans des circonstances étranges.","Elle porte un sabre maudit en elle.","Elle est la reine de l'armée de Saika.","Voix japonaise : Kana Hanazawa."],jp: "園原 杏里",va: "Kana Hanazawa",na: "Japonaise",gr: ["Dollars","Armée de Saika"],a: 15,v: 1,img: "anri-sonohara.webp"},
    {n: "Celty Sturluson",t: 1,g: "F",e: "Dullahan",p: "Transporteuse",em: "🏍️🐈‍⬛🪖📱",h: ["Elle roule sur une moto noire qui hennit.","Elle porte un casque jaune avec des oreilles de chat.","Elle cherche sa tête volée.","C'est une fée irlandaise, une dullahan.","Voix japonaise : Miyuki Sawashiro."],jp: "セルティ ストゥルルソン",va: "Miyuki Sawashiro",na: "Irlandaise",gr: ["Dollars"],a: null,v: 1,al: ["Le motard noir","Black Rider"],img: "celty-sturluson.webp"},
    {n: "Izaya Orihara",t: 1,g: "M",e: "Humain",p: "Informateur",em: "🗡️♟️😈🍣",h: ["Il prétend aimer tous les humains.","Il manipule les gens pour s'amuser.","Il vit à Shinjuku.","C'est l'informateur le plus dangereux de Tokyo.","Voix japonaise : Hiroshi Kamiya."],jp: "折原 臨也",va: "Hiroshi Kamiya",na: "Japonaise",gr: ["Dollars","Amphisbaena","Candiru"],a: 23,v: 1,img: "izaya-orihara.webp"},
    {n: "Shizuo Heiwajima",t: 1,g: "M",e: "Humain",p: "Garde du corps",em: "🚬🥛🚏💢",h: ["Il lance des distributeurs automatiques.","Il porte toujours une tenue de barman.","Il déteste la violence… et l'informateur.","C'est l'homme le plus fort d'Ikebukuro.","Voix japonaise : Daisuke Ono."],jp: "平和島 静雄",va: "Daisuke Ono",na: "Japonaise",gr: [],a: 24,v: 1,img: "shizuo-heiwajima.webp"},
    {n: "Shinra Kishitani",t: 1,g: "M",e: "Humain",p: "Médecin",em: "🥼💉😍🏠",h: ["Il porte toujours une blouse blanche.","Il soigne les gens sans licence.","Il vit avec une créature sans tête.","C'est le médecin clandestin ami de Celty.","Voix japonaise : Jun Fukuyama."],jp: "岸谷 新羅",va: "Jun Fukuyama",na: "Japonaise",gr: ["Dollars"],a: 24,v: 1,img: "shinra-kishitani.webp"},
    {n: "Kyouhei Kadota",t: 1,g: "M",e: "Humain",p: "Charpentier",em: "🧢🚐🔨",h: ["Il porte toujours un bonnet.","Il roule en camionnette avec ses amis.","Il est respecté par tout le monde.","On l'appelle « Dotachin ».","Voix japonaise : Yuichi Nakamura."],jp: "門田 京平",va: "Yuichi Nakamura",na: "Japonaise",gr: ["Dollars","Bande de Kadota"],a: 23,v: 1,al: ["Dotachin"],img: "kyouhei-kadota.webp"},
    {n: "Erika Karisawa",t: 1,g: "F",e: "Humain",p: "Fabricante de bijoux",em: "📚😍🚐🎨",h: ["Elle adore les mangas et les couples de garçons.","Elle a une imagination débordante.","Elle roule en camionnette avec ses amis.","Elle fait partie de la bande de Kadota.","Voix japonaise : Ayahi Takagaki."],jp: "狩沢 絵理華",va: "Ayahi Takagaki",na: "Japonaise",gr: ["Dollars","Bande de Kadota"],a: null,v: 1,img: "erika-karisawa.webp"},
    {n: "Walker Yumasaki",t: 1,g: "M",e: "Humain",p: "Sculpteur sur glace",em: "📚😆🚐🧊",h: ["Il adore les mangas.","Il garde les yeux toujours fermés.","Il roule en camionnette avec ses amis.","Il fait partie de la bande de Kadota.","Voix japonaise : Yuki Kaji."],jp: "遊馬崎 ウォーカー",va: "Yuki Kaji",na: "Japonaise",gr: ["Dollars","Bande de Kadota"],a: null,v: 1,img: "walker-yumasaki.webp"},
    {n: "Saburo Togusa",t: 1,g: "M",e: "Humain",p: "Chauffeur",em: "🚐🎤😤",h: ["Il est fan absolu d'une chanteuse.","Il conduit une camionnette décorée.","Il ne supporte pas qu'on abîme sa voiture.","Il fait partie de la bande de Kadota.","Voix japonaise : Takuma Terashima."],jp: "渡草 三郎",va: "Takuma Terashima",na: null,gr: ["Dollars","Bande de Kadota"],a: 21,v: 1,img: "saburo-togusa.webp"},
    {n: "Namie Yagiri",t: 1,g: "F",e: "Humain",p: "Secrétaire",em: "🧪💼💘",h: ["Elle a dirigé une branche d'entreprise pharmaceutique.","Elle travaille pour l'informateur.","Elle aime son petit frère beaucoup trop.","Elle a volé une tête pour ses recherches.","Voix japonaise : Sanae Kobayashi."],jp: "矢霧 波江",va: "Sanae Kobayashi",na: "Japonaise",gr: ["Nebula","Yagiri Pharmaceutique"],a: 25,v: 1,img: "namie-yagiri.webp"},
    {n: "Seiji Yagiri",t: 1,g: "M",e: "Humain",p: "Lycéen",em: "💘🔪🙄",h: ["Il est amoureux d'une tête.","Sa grande sœur est obsédée par lui.","Il est prêt à tout pour sa bien-aimée.","Il finit en couple avec Mika.","Voix japonaise : Kazuma Horie."],jp: "矢霧 誠二",va: "Kazuma Horie",na: "Japonaise",gr: ["Dollars"],a: 15,v: 1,img: "seiji-yagiri.webp"},
    {n: "Mika Harima",t: 1,g: "F",e: "Humain",p: "Lycéenne",em: "🧣🕵️‍♀️💘",h: ["Elle est obsédée par le garçon qu'elle aime.","Elle porte une écharpe autour du cou.","Elle a changé de visage.","Elle sort avec Seiji.","Voix japonaise : Mariya Ise."],jp: "張間 美香",va: "Mariya Ise",na: "Japonaise",gr: ["Dollars"],a: 15,v: 1,img: "mika-harima.webp"},
    {n: "Simon Brezhnev",t: 1,g: "M",e: "Humain",p: "Rabatteur de sushis",em: "🍣🇷🇺🗿",h: ["Il est noir et immense.","Il distribue des prospectus pour un restaurant.","Il est le seul à pouvoir arrêter l'homme le plus fort.","Il travaille au Russia Sushi.","Voix japonaise : Takaya Kuroda."],jp: "サイモン・ブレジネフ",va: "Takaya Kuroda",na: "Russe",gr: ["Dollars","Russia Sushi"],a: null,v: 1,img: "simon-brezhnev.webp"},
    {n: "Aoba Kuronuma",t: 1,g: "M",e: "Humain",p: "Lycéen",em: "🔵😇😈",h: ["Il a l'air d'un gentil collégien.","Il manipule le héros.","Il a un grand frère violent.","Il dirige les Carrés Bleus.","Voix japonaise : Hiro Shimono."],jp: "黒沼 青葉",va: "Hiro Shimono",na: "Japonaise",gr: ["Dollars","Carrés Bleus"],a: 15,v: 4,img: "aoba-kuronuma.webp"},
    {n: "Mairu Orihara",t: 1,g: "F",e: "Humain",p: "Collégienne",em: "👯😜🥋",h: ["Elle est très bavarde.","Elle a une sœur jumelle.","Elle est amoureuse de l'homme le plus fort.","C'est la petite sœur de l'informateur.","Voix japonaise : Eri Kitamura."],jp: "折原 舞流",va: "Eri Kitamura",na: "Japonaise",gr: [],a: 14,v: 4,img: "mairu-orihara.webp"},
    {n: "Kururi Orihara",t: 1,g: "F",e: "Humain",p: "Collégienne",em: "👯🤐📿",h: ["Elle parle très peu, par mots isolés.","Elle a une sœur jumelle.","Elle fait des arts martiaux.","C'est la petite sœur de l'informateur.","Voix japonaise : Hisako Kanemoto."],jp: "折原 九瑠璃",va: "Hisako Kanemoto",na: "Japonaise",gr: [],a: 14,v: 4,img: "kururi-orihara.webp"},
    {n: "Kasuka Heiwajima",t: 2,g: "M",e: "Humain",p: "Acteur",em: "🎬😐👔",h: ["Il ne montre jamais d'émotion.","C'est un acteur célèbre.","Son nom de scène est Yuuhei Hanejima.","C'est le petit frère de Shizuo.","Voix japonaise : Daisuke Kishio."],jp: "平和島 幽",va: "Daisuke Kishio",na: "Japonaise",gr: [],a: 21,v: 4,al: ["Yuuhei Hanejima"],img: "kasuka-heiwajima.webp"},
    {n: "Tom Tanaka",t: 2,g: "M",e: "Humain",p: "Recouvreur de dettes",em: "💴🕺",h: ["Il a des dreadlocks.","Il récupère les dettes.","Il est le patron de l'homme le plus fort.","Il était au collège avec lui.","Voix japonaise : Katsuyuki Konishi."],jp: "田中 トム",va: "Katsuyuki Konishi",na: "Japonaise",gr: [],a: null,v: 2,img: "tom-tanaka.webp"},
    {n: "Vorona",t: 2,g: "F",e: "Humain",p: "Tueuse à gages",em: "🔫🇷🇺📚",h: ["Elle vient de Russie.","Elle veut connaître les limites des humains.","Elle travaille avec Shizuo et Tom.","C'est une tueuse à gages qui change de vie.","Voix japonaise : Mao Ichimichi."],jp: "ヴァローナ",va: "Mao Ichimichi",na: "Russe",gr: [],a: 20,v: 5,img: "vorona.webp"},
    {n: "Haruya Shiki",t: 2,g: "M",e: "Humain",p: "Yakuza",em: "🕴️🎨🔫",h: ["C'est un yakuza.","Il aime l'art.","Il engage souvent l'informateur.","Il fait partie de l'Awakusu-kai.","Voix japonaise : Hōchū Ōtsuka."],jp: "四木 春也",va: "Hōchū Ōtsuka",na: "Japonaise",gr: ["Awakusu-kai"],a: 30,v: 2,img: "haruya-shiki.webp"},
    {n: "Mizuki Akabayashi",t: 2,g: "M",e: "Humain",p: "Yakuza",em: "🕶️🦯👁️",h: ["Il porte des lunettes de soleil.","Il a un œil artificiel.","Il a aimé la mère d'une héroïne.","Il fait partie de l'Awakusu-kai.","Voix japonaise : Kappei Yamaguchi."],jp: "赤林 海月",va: "Kappei Yamaguchi",na: "Japonaise",gr: ["Dollars","Awakusu-kai"],a: 30,v: 6,img: "mizuki-akabayashi.webp"},
    {n: "Akane Awakusu",t: 2,g: "F",e: "Humain",p: "Écolière",em: "👧🔪🏯",h: ["C'est une petite fille.","Elle a voulu tuer l'homme le plus fort.","Elle fait de la boxe et du kenjutsu.","C'est la fille d'un chef yakuza.","Voix japonaise : Misaki Kuno."],jp: "粟楠 茜",va: "Misaki Kuno",na: "Japonaise",gr: ["Awakusu-kai"],a: 10,v: 5,img: "akane-awakusu.webp"},
    {n: "Mikiya Awakusu",t: 3,g: "M",e: "Humain",p: "Yakuza",em: "🕴️👨‍👧",h: ["C'est un yakuza.","C'est le père d'Akane.","Il est l'héritier de l'Awakusu-kai.","Voix japonaise : Yasuyuki Kase."],jp: "粟楠幹彌",va: "Yasuyuki Kase",na: "Japonaise",gr: ["Awakusu-kai"],a: null,v: 6,img: "mikiya-awakusu.webp"},
    {n: "Dougen Awakusu",t: 3,g: "M",e: "Humain",p: "Yakuza",em: "👴🏯",h: ["C'est le chef de l'Awakusu-kai.","C'est le grand-père d'Akane.","Voix japonaise : Shouzou Iizuka."],jp: "粟楠 道元",va: "Shouzou Iizuka",na: "Japonaise",gr: ["Awakusu-kai"],a: null,v: 6,img: "dougen-awakusu.webp"},
    {n: "Shu Aozaki",t: 3,g: "M",e: "Humain",p: "Yakuza",em: "👹🕴️",h: ["C'est un yakuza violent.","Il fait partie de l'Awakusu-kai.","Il est rival d'Akabayashi.","Voix japonaise : Kiyoyuki Yanada."],jp: "青崎 柊",va: "Kiyoyuki Yanada",na: "Japonaise",gr: ["Awakusu-kai"],a: null,v: 6,img: "shu-aozaki.webp"},
    {n: "Takaaki Kazamoto",t: 3,g: "M",e: "Humain",p: "Yakuza",em: "🕴️",h: ["C'est un yakuza.","Il fait partie de l'Awakusu-kai.","Voix japonaise : Kanehira Yamamoto."],jp: "風本 隆秋",va: "Kanehira Yamamoto",na: "Japonaise",gr: ["Awakusu-kai"],a: null,v: 6,img: "takaaki-kazamoto.webp"},
    {n: "Shingen Kishitani",t: 2,g: "M",e: "Humain",p: "Chercheur",em: "😷🧪",h: ["Il porte toujours un masque à gaz.","Il est chercheur.","Il a ramené la créature sans tête au Japon.","C'est le père de Shinra.","Voix japonaise : Akio Otsuka."],jp: "岸谷森厳",va: "Akio Otsuka",na: "Japonaise",gr: [],a: null,v: 3,img: "shingen-kishitani.webp"},
    {n: "Emilia Kishitani",t: 3,g: "F",e: "Humain",p: "Chercheuse",em: "😃🧪",h: ["Elle est américaine.","Elle est très enjouée.","Elle travaille pour Nebula.","C'est la belle-mère de Shinra.","Voix japonaise : Atsumi Tanezaki."],jp: "エミリア岸谷",va: "Atsumi Tanezaki",na: "Américaine",gr: ["Nebula"],a: 20,v: 3,img: "emilia-kishitani.webp"},
    {n: "Egor",t: 3,g: "M",e: "Humain",p: "Tueur à gages",em: "🎭🇷🇺",h: ["Il vient de Russie.","C'est un maître du déguisement.","Il est tueur à gages.","Voix japonaise : Toshiyuki Morikawa."],jp: "エゴール",va: "Toshiyuki Morikawa",na: "Russe",gr: ["Armée de Saika","Nebula"],a: null,v: 4,img: "egor.webp"},
    {n: "Slon",t: 3,g: "M",e: "Humain",p: "Tueur à gages",em: "🐘🇷🇺",h: ["Il vient de Russie.","Son nom veut dire « éléphant ».","Il travaille avec Vorona.","Voix japonaise : Satoshi Mikami."],jp: "スローン",va: "Satoshi Mikami",na: "Russe",gr: ["Armée de Saika"],a: null,v: null,img: "slon.webp"},
    {n: "Denis",t: 3,g: "M",e: "Humain",p: "Cuisinier",em: "🍣🔪🇷🇺",h: ["Il vient de Russie.","Il est chef de sushis.","C'est un ancien soldat.","Il tient le Russia Sushi.","Voix japonaise : Shinya Takahashi."],jp: "デニス",va: "Shinya Takahashi",na: "Russe",gr: ["Russia Sushi"],a: null,v: 2,img: "denis.webp"},
    {n: "Drakon",t: 3,g: "M",e: "Humain",p: "Marchand d'armes",em: "🐉🇷🇺",h: ["Il vient de Russie.","Son nom veut dire « dragon ».","Il vend des armes.","Voix japonaise : Kazuhiro Yamaji."],va: "Kazuhiro Yamaji",na: "Russe",gr: [],a: null,v: 5,img: "drakon.webp"},
    {n: "Chikage Rokujou",t: 2,g: "M",e: "Humain",p: "Chef de gang",em: "🏍️🐯💘",h: ["Il a beaucoup de petites amies.","Il dirige un gang de motards.","Il a affronté l'homme le plus fort.","Il dirige Toramaru.","Voix japonaise : Yuuki Ono."],jp: "六条 千景",va: "Yuuki Ono",na: "Japonaise",gr: ["Toramaru"],a: 20,v: 5,img: "chikage-rokujou.webp"},
    {n: "Saki Mikajima",t: 2,g: "F",e: "Humain",p: "Lycéenne",em: "🩹🏥💘",h: ["Elle a été blessée à cause de l'informateur.","Elle est très calme.","Elle a fait partie d'un groupe d'adoratrices.","C'est la petite amie de Masaomi.","Voix japonaise : Misato Fukuen."],jp: "三ヶ島 沙樹",va: "Misato Fukuen",na: "Japonaise",gr: [],a: 16,v: 3,img: "saki-mikajima.webp"},
    {n: "Haruna Niekawa",t: 2,g: "F",e: "Humain",p: "Lycéenne",em: "🗡️💘😈",h: ["Elle aimait un professeur.","Elle a été coupée par le sabre maudit.","Elle est une « enfant » de Saika.","Elle dirige sa propre armée de Saika.","Voix japonaise : Mai Nakahara."],jp: "贄川 春奈",va: "Mai Nakahara",na: "Japonaise",gr: ["Dollars","Armée de Saika"],a: 16,v: 2,img: "haruna-niekawa.webp"},
    {n: "Takashi Nasujima",t: 3,g: "M",e: "Humain",p: "Professeur",em: "👨‍🏫😈",h: ["C'est un professeur.","Il harcelait les élèves.","Il a été coupé par le sabre maudit.","Voix japonaise : Yuji Ueda."],jp: "那須島 隆志",va: "Yuji Ueda",na: "Japonaise",gr: ["Armée de Saika","Lycée Raira"],a: null,v: 2,img: "takashi-nasujima.webp"},
    {n: "Ruri Hijiribe",t: 2,g: "F",e: "Humain",p: "Chanteuse",em: "🎤🎭🩸",h: ["C'est une idole très célèbre.","Elle a un secret monstrueux.","Elle est en couple avec un acteur.","Elle est la petite amie de Kasuka.","Voix japonaise : Saki Fujita."],jp: "聖辺 ルリ",va: "Saki Fujita",na: "Japonaise",gr: ["Yodogiri Shining"],a: null,v: 4,img: "ruri-hijiribe.webp"},
    {n: "Kinnosuke Kuzuhara",t: 2,g: "M",e: "Humain",p: "Policier",em: "🏍️👮",h: ["C'est un policier à moto.","Il poursuit la moto noire.","Il est impossible à semer.","Sa famille est remplie de policiers.","Voix japonaise : Keiji Fujiwara."],jp: "葛原 金之助",va: "Keiji Fujiwara",na: "Japonaise",gr: [],a: null,v: 3,img: "kinnosuke-kuzuhara.webp"},
    {n: "Jinnai Yodogiri",t: 3,g: "M",e: "Humain",p: "Directeur d'agence",em: "🎭🕴️",h: ["Il dirige une agence de talents.","Il est informateur.","Son identité est un mystère.","Voix japonaise : Shunsuke Sakuya."],jp: "澱切 陣内",va: "Shunsuke Sakuya",na: "Japonaise",gr: ["Yodogiri Shining"],a: null,v: 6,img: "jinnai-yodogiri.webp"},
    {n: "Kasane Kujiragi",t: 3,g: "F",e: "Humain",p: "Informatrice",em: "🗡️🧬",h: ["Elle est liée au sabre maudit.","Elle se fait passer pour quelqu'un d'autre.","C'est la sœur de la mère d'une héroïne.","Voix japonaise : Houko Kuwashima."],jp: "鯨木 かさね",va: "Houko Kuwashima",na: null,gr: ["Armée de Saika"],a: null,v: 8,img: "kasane-kujiragi.webp"},
    {n: "Ran Izumii",t: 2,g: "M",e: "Humain",p: "Chef de gang",em: "🔵🔥🦯",h: ["Il est très violent.","Il est le grand frère de quelqu'un qu'il déteste.","Il a dirigé les Carrés Bleus.","C'est le grand frère d'Aoba.","Voix japonaise : Atsushi Imaruoka."],jp: "泉井蘭",va: "Atsushi Imaruoka",na: "Japonaise",gr: ["Dollars","Carrés Bleus"],a: null,v: null,img: "ran-izumii.webp"},
    {n: "Horada",t: 3,g: "M",e: "Humain",p: "Voyou",em: "🔵🟡",h: ["C'est un petit voyou.","Il change de camp.","Il a fait partie des Carrés Bleus et des Foulards Jaunes.","Voix japonaise : Wataru Takagi."],jp: "法螺田",va: "Wataru Takagi",na: "Japonaise",gr: ["Foulards Jaunes","Carrés Bleus"],a: 20,v: 3,img: "horada.webp"},
    {n: "Mikage Sharaku",t: 3,g: "F",e: "Humain",p: "Professeure d'arts martiaux",em: "🥋💢",h: ["Elle enseigne les arts martiaux.","Elle déteste l'informateur.","Elle enseigne aux jumelles Orihara.","Voix japonaise : Hiromi Igarashi."],jp: "写楽 美影",va: "Hiromi Igarashi",na: "Japonaise",gr: [],a: 20,v: 8,img: "mikage-sharaku.webp"},
    {n: "Eijirou Sharaku",t: 3,g: "M",e: "Humain",p: "Professeur d'arts martiaux",em: "🥋",h: ["Il enseigne les arts martiaux.","C'est le frère de Mikage.","Voix japonaise : KENN."],jp: "写楽 影次郎",va: "KENN",na: "Japonaise",gr: [],a: 20,v: 8,img: "eijirou-sharaku.webp"},
    {n: "Yahiro Mizuchi",t: 2,g: "M",e: "Humain",p: "Lycéen",em: "👊😶",h: ["Il arrive à Ikebukuro dans la suite.","Il est extrêmement fort.","Il fait partie des Snake Hands."],jp: "三頭池 八尋",na: "Japonaise",gr: ["Snake Hands"],a: 15,v: 14,img: "yahiro-mizuchi.webp"},
    {n: "Kuon Kotonami",t: 2,g: "M",e: "Humain",p: "Lycéen",em: "😏🐍",h: ["Il arrive dans la suite.","Il est malin et cynique.","Il fait partie des Snake Hands."],jp: "琴南 久音",na: "Japonaise",gr: ["Snake Hands"],a: 15,v: 14,img: "kuon-kotonami.webp"},
    {n: "Himeka Tatsugami",t: 3,g: "F",e: "Humain",p: "Lycéenne",em: "📰🐍",h: ["Elle apparaît dans la suite.","Elle fait partie des Snake Hands."],jp: "辰神 姫香",na: "Japonaise",gr: ["Snake Hands"],a: 15,v: 14,img: "himeka-tatsugami.webp"},
    {n: "Manami Mamiya",t: 3,g: "F",e: "Humain",p: "Lycéenne",em: "🚌💔",h: ["Elle a voulu se suicider.","Elle veut se venger de l'informateur.","Elle fait partie des Dollars.","Voix japonaise : Marina Tanoue."],jp: "間宮 愛美",va: "Marina Tanoue",na: "Japonaise",gr: ["Dollars"],a: null,v: 1,img: "manami-mamiya.webp"},
    {n: "Rio Kamichika",t: 3,g: "F",e: "Humain",p: "Lycéenne",em: "🏢💔",h: ["Elle a voulu se suicider au début.","Elle a rencontré l'informateur sur un toit.","Voix japonaise : Haruka Tomatsu."],jp: "神近 莉緒",va: "Haruka Tomatsu",na: "Japonaise",gr: ["Dollars"],a: 15,v: 6,img: "rio-kamichika.webp"},
    {n: "Kisuke Adabashi",t: 3,g: "M",e: "Humain",p: "Harceleur",em: "📸😈",h: ["Il a harcelé une idole.","Il a fait partie des Dollars.","Voix japonaise : Youji Ueda."],jp: "徒橋 喜助",va: "Youji Ueda",na: "Japonaise",gr: ["Dollars"],a: null,v: 8,img: "kisuke-adabashi.webp"},
    {n: "Earthworm",t: 3,g: "F",e: "Humain",p: "Tueuse à gages",em: "🪱🗡️",h: ["Son surnom veut dire « ver de terre ».","Elle fait partie d'Amphisbaena.","Voix japonaise : Kikuko Inoue."],jp: "ミミズ",va: "Kikuko Inoue",na: "Japonaise",gr: ["Armée de Saika","Amphisbaena"],a: 25,v: 9,img: "earthworm.webp"},
    {n: "Hiroto Shijima",t: 3,g: "M",e: "Humain",p: "Dealer",em: "💊😈",h: ["Il vend de la drogue.","Il fait partie des Dollars.","Voix japonaise : Taishi Murata."],jp: "四十万 博人",va: "Taishi Murata",na: "Japonaise",gr: ["Dollars","Heaven's Slave"],a: null,v: 9,img: "hiroto-shijima.webp"},
    {n: "Shuuji Niekawa",t: 3,g: "M",e: "Humain",p: "Journaliste",em: "📰🔍",h: ["C'est un journaliste.","Il enquête sur l'homme le plus fort.","C'est le père de Haruna.","Voix japonaise : Rikiya Koyama."],jp: "贄川 周二",va: "Rikiya Koyama",na: "Japonaise",gr: ["Dollars","Armée de Saika"],a: null,v: 2,img: "shuuji-niekawa.webp"},
    {n: "Seitarou Yagiri",t: 3,g: "M",e: "Humain",p: "PDG",em: "🏢💼",h: ["Il dirige une entreprise pharmaceutique.","C'est l'oncle de Namie.","Voix japonaise : Chafurin."],jp: "矢霧 清太郎",va: "Chafurin",na: "Japonaise",gr: ["Nebula","Yagiri Pharmaceutique"],a: null,v: 8,img: "seitarou-yagiri.webp"},
    {n: "Nakura",t: 3,g: "M",e: "Humain",p: "Voyou",em: "🎭",h: ["C'est un pseudonyme.","Il fait partie d'Amphisbaena.","Voix japonaise : Tomoaki Maeno."],va: "Tomoaki Maeno",na: "Japonaise",gr: ["Amphisbaena"],a: null,v: 9,img: "nakura.webp"},
    {n: "Max Sandshelt",t: 3,g: "M",e: "Humain",p: "Manager",em: "🎃🕴️",h: ["Il est américain.","Il dirige une agence de talents.","Il est le patron de Kasuka.","Voix japonaise : Masaya Onosaka."],jp: "マックス サンドシェルト",va: "Masaya Onosaka",na: "Américaine",gr: ["Jack-o'-Lantern"],a: null,v: 4,img: "max-sandshelt.webp"},
    {n: "Kaztano",t: 3,g: "M",e: "Humain",p: "Vendeur de billets",em: "🎫🇮🇹",h: ["Il est italien.","Il est sans papiers.","Il est ami avec la bande de Kadota.","Voix japonaise : Tōru Ōkawa."],jp: "カズターノ",va: "Tōru Ōkawa",na: "Italienne",gr: ["Dollars","Bande de Kadota"],a: null,v: null,img: "kaztano.webp"},
    {n: "Ginichirou Kuzuhara",t: 3,g: "M",e: "Humain",p: "Policier",em: "👮",h: ["C'est un policier.","Il est de la famille Kuzuhara.","Voix japonaise : Keiji Fujiwara."],jp: "葛原 実一郎",va: "Keiji Fujiwara",na: "Japonaise",gr: [],a: null,v: 2,img: "ginichirou-kuzuhara.webp"},
    {n: "Maju Kuzuhara",t: 3,g: "F",e: "Humain",p: "Policière",em: "👮‍♀️",h: ["C'est une policière.","Elle est de la famille Kuzuhara.","Voix japonaise : Minami Takahashi."],jp: "葛原 真珠",va: "Minami Takahashi",na: "Japonaise",gr: [],a: null,v: 10,img: "maju-kuzuhara.webp"},
    {n: "Koji Yatabe",t: 3,g: "M",e: "Humain",p: "Voyou",em: "🟡",h: ["Il fait partie des Foulards Jaunes.","Voix japonaise : Yuichi Iguchi."],jp: "谷田部 浩二",va: "Yuichi Iguchi",na: "Japonaise",gr: ["Foulards Jaunes"],a: 15,v: 8,img: "koji-yatabe.webp"},
    {n: "Asanuma",t: 3,g: "M",e: "Humain",p: "Trafiquant",em: "🚐💰",h: ["Il fait du trafic d'êtres humains.","Il travaille pour une entreprise pharmaceutique.","Voix japonaise : Kentarō Itō."],jp: "浅沼",va: "Kentarō Itō",na: "Japonaise",gr: ["Dollars","Yagiri Pharmaceutique"],a: null,v: 1,img: "asanuma.webp"},
    {n: "Kanazawa",t: 3,g: "M",e: "Humain",p: "Trafiquant",em: "🚐",h: ["Il fait du trafic d'êtres humains.","Il travaille pour une entreprise pharmaceutique.","Voix japonaise : Yūichi Iguchi."],jp: "金沢",va: "Yūichi Iguchi",na: "Japonaise",gr: ["Yagiri Pharmaceutique"],a: null,v: null,img: "kanazawa.webp"},
    {n: "Ryo Takiguchi",t: 3,g: "M",e: "Humain",p: "Lycéen",em: "😤",h: ["Il fait partie des Dollars.","Il a été attaqué.","Voix japonaise : Nobuhiko Okamoto."],jp: "滝口 亮",va: "Nobuhiko Okamoto",na: "Japonaise",gr: ["Dollars"],a: 15,v: null,img: "ryo-takiguchi.webp"},
    {n: "Higa",t: 3,g: "M",e: "Humain",p: "Voyou",em: "🔵",h: ["Il change souvent de gang."],na: "Japonaise",gr: ["Foulards Jaunes","Carrés Bleus","Armée de Saika"],a: null,v: 3,img: "higa.webp"},
    {n: "Kine",t: 3,g: "M",e: "Humain",p: "Détective",em: "🕵️",h: ["C'est un détective privé.","Il a quitté l'Awakusu-kai.","Voix japonaise : Setsuji Satō."],jp: "黄根",va: "Setsuji Satō",na: "Japonaise",gr: ["Awakusu-kai"],a: null,v: 11,img: "kine.webp"},
    {n: "Shinichi Tsukumoya",t: 3,g: "M",e: "Humain",p: "Informateur",em: "📖",h: ["C'est un informateur.","Il est aussi écrivain.","On ne le voit jamais."],jp: "九十九屋 真一",na: null,gr: ["Dollars"],a: null,v: 4,img: "shinichi-tsukumoya.webp"},
    {n: "Shizuo Nobusuma",t: 3,g: "M",e: "Humain",p: "Barman",em: "🍸",h: ["C'est un ancien barman.","Il porte le même prénom que l'homme le plus fort.","Voix japonaise : Kenjiro Tsuda."],jp: "野襖 志津夫",va: "Kenjiro Tsuda",na: "Japonaise",gr: [],a: null,v: null,img: "shizuo-nobusuma.webp"},
    {n: "Hashim",t: 3,g: "M",e: "Humain",p: "Enfant",em: "👦🇪🇬",h: ["Il est égyptien.","C'est un enfant.","Il traîne avec la bande de Kadota.","Voix japonaise : Chihiro Tagaino."],jp: "ハシム",va: "Chihiro Tagaino",na: "Égyptienne",gr: ["Dollars","Bande de Kadota"],a: null,v: null,img: "hashim.webp"},
    {n: "Shiri",t: 3,g: "F",e: "Humain",p: "Chercheuse d'objets",em: "🔍",h: ["Elle aide les gens à retrouver des objets perdus.","Elle fait partie des Dollars.","Voix japonaise : Shiori Izawa."],jp: "シュリ",va: "Shiori Izawa",na: "Russe",gr: ["Dollars"],a: null,v: null,img: "shiri.webp"},
    {n: "Shojiro Kitagoma",t: 3,g: "M",e: "Humain",p: "Professeur",em: "👨‍🏫",h: ["Il enseigne au lycée Raira.","Voix japonaise : Fumio Matsuoka."],jp: "北駒 正二郎",va: "Fumio Matsuoka",na: "Japonaise",gr: ["Lycée Raira"],a: null,v: null,img: "shojiro-kitagoma.webp"},
    {n: "Sayaka Sonohara",t: 3,g: "F",e: "Humain",p: "Mère au foyer",em: "👩🗡️",h: ["Elle est morte.","Elle portait un sabre maudit.","C'est la mère d'Anri."],jp: "園原 沙也香",na: "Japonaise",gr: ["Armée de Saika"],a: null,v: null,img: "sayaka-sonohara.webp"},
    {n: "Yuigadokusonmaru",t: 3,g: "N",e: "Animal",p: "Animal",em: "🐈",h: ["C'est un chat.","Il appartient à des jumelles."],jp: "唯我独尊丸",na: null,gr: [],a: null,v: 8,img: "yuigadokusonmaru.webp"},
  ]});  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { dleOpen('durararadle'); });
}
