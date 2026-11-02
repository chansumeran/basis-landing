// Static data and helpers for the landing page, ported from the design's logic script.

// The exchanges basis imports from, in the order the copy names them. Every list of them on the
// page ("MEXC and OKX") comes from here, so adding one is a one-line change. Per-exchange facts
// (key permissions, history limits) and the phone mockups' sample trades still name them directly.
export const exchanges = ['MEXC', 'OKX']

// "A and B", "A, B and C"
function listOf(items: string[], word: 'and' | 'or') {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} ${word} ${items.at(-1)}`
}
export const exchangesAnd = listOf(exchanges, 'and')
export const exchangesOr = listOf(exchanges, 'or')

// The search-result and social-preview description. Starts with the phrase people search for.
export const description = `A private crypto trading journal for iOS. Imports your ${exchangesAnd} trades read-only and keeps them encrypted on your phone. No account, no cloud.`

export interface MarkBar { x: number, y: number, w: number, cls: string, dl: string }

const FG = 'fill-fg'
const AC = 'fill-acc'

// The basis mark: [x, y, width, fill class, row]. The row index staggers the wave animation.
const MARK_BARS: [number, number, number, string, number][] = [
  [25, 18.5, 15, FG, 0], [25, 26.75, 15, FG, 1], [25, 35, 15, FG, 2], [25, 43.25, 38.5, FG, 3],
  [25, 51.5, 15, FG, 4], [54.5, 51.5, 15, FG, 4], [25, 59.75, 15, AC, 5], [56, 59.75, 18.5, AC, 5],
  [25, 68, 15, FG, 6], [55, 68, 14, FG, 6], [25, 76.25, 36.5, FG, 7],
]

function markOf(period: number): MarkBar[] {
  return MARK_BARS.map(b => ({ x: b[0], y: b[1], w: b[2], cls: b[3], dl: (-(1 - b[4] / 9) * period).toFixed(2) + 's' }))
}

export const mark = markOf(1.3)
export const markSlow = markOf(3.2)

// Number formatting used across the mock app screens.
function grp(v: string) { return v.replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
export function signed(v: number) {
  const [int, dec] = Math.abs(v).toFixed(2).split('.')
  return (v > 0 ? '+' : v < 0 ? '−' : '') + grp(int!) + '.' + dec
}
export function glyph(v: number) { return (v > 0 ? '▲ ' : v < 0 ? '▼ ' : '') + signed(v) }
function f1(v: number) { return Math.round(v * 10) / 10 }

// Hero: volume-profile rows stepping in from both edges into a V, the point of control in accent.
const VL = [4, 6, 8, 10, 12, 14, 16, 19, 23, 27, 30, 33, 36, 38, 40, 42]
const VR = [3, 7, 7, 11, 11, 15, 17, 18, 24, 26, 31, 32, 37, 39, 39, 43]
export const vrows = VL.map((l, i) => ({
  y: 32 + i * 44,
  l: l + '%',
  r: VR[i] + '%',
  cls: i === 13 ? 'bg-acc/85' : 'bg-s1',
  dl: (0.1 + i * 0.04).toFixed(2) + 's',
}))

// The app's tab bar, with the active tab in accent.
const TABS: [string, string][] = [
  ['Journal', 'M6.5 3.5h11.5v16.5H7.5a2 2 0 0 1-2-2V4.5a1 1 0 0 1 1-1zM5.5 18a2 2 0 0 1 2-2H18M9 7.5h6'],
  ['Calendar', 'M4.5 6h15v14h-15zM4.5 10h15M8.5 3.5v4M15.5 3.5v4'],
  ['Analysis', 'M4 4v16h16M7.5 15l3.5-4 3 2.5 5-6'],
  ['Playbook', 'M9 3.5h6v3H9zM7 5H5.5v15.5h13V5H17M9 11h6M9 14.5h6M9 18h3'],
  ['Settings', 'M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1M15 5v4M9 10v4M17 15v4'],
]
export function tabs(active: number) {
  return TABS.map(([l, d], k) => ({ l, d, cls: k === active ? 'text-acc' : 'text-f3' }))
}

// Journal rows: today's trades from the app's sample data.
const TODAY: [string, string, string, number, string, boolean][] = [
  ['SOLUSDT', 'LONG 10×', '13:44 · MEXC', 113.72, '+18.6%', true],
  ['BTCUSDT', 'SHORT 20×', '11:20 · MEXC', -96.35, '−56.8%', true],
  ['SUIUSDT', 'SHORT 10×', '09:45 · OKX Perps', 72.14, '+18.1%', false],
  ['LINKUSDT', 'LONG 5×', '08:10 · MEXC', -41.80, '−7.3%', false],
]
export const today = TODAY.map((t, k) => ({
  sym: t[0], badge: t[1], sub: t[2], pnl: glyph(t[3]), ret: t[4],
  cls: t[3] >= 0 ? 'text-up' : 'text-dn',
  // Unjournaled trades get a pulsing accent dot.
  dot: t[5] ? 'bg-acc dotp' : 'bg-transparent',
  dl: (1.1 + k * 0.12).toFixed(2) + 's',
}))

// Trade chart: the close line, entry, stop, target and fills (326 × 150, no axes).
export const CHART_W = 326
export const CHART_H = 150
const CLOSES = [152.90, 153.12, 152.84, 153.05, 153.30, 153.22, 154.18, 154.02, 153.31, 152.86, 152.41, 152.70, 153.36, 153.90, 154.62, 154.48, 155.40, 156.32, 156.95, 156.40, 155.92, 156.10, 155.50, 155.28, 155.64, 155.90, 156.40, 156.88, 157.12, 157.62, 157.95, 158.71]
const top = 8, bot = 8, lo = 150.4, hi = 159.1, step = CHART_W / CLOSES.length
const py = (p: number) => f1(top + (hi - p) / (hi - lo) * (CHART_H - top - bot))
const xc = (k: number) => f1(step * k + step / 2)
const xt = (k: number, m: number) => f1(step * (k + m / 15))

export const ch = {
  line: 'M0 ' + py(152.70) + CLOSES.map((c, k) => 'L' + xc(k) + ' ' + py(c)).join(''),
  entry: 'M0 ' + py(152.84) + 'H' + CHART_W,
  stop: 'M0 ' + py(150.90) + 'H' + CHART_W,
  target: 'M0 ' + py(158.60) + 'H' + CHART_W,
  fills: [
    { x: xt(8, 2), y: py(153.20), cls: 'fill-up d1' },
    { x: xt(10, 1), y: py(152.48), cls: 'fill-up d2' },
    { x: xt(17, 3), y: py(156.10), cls: 'fill-amber d3' },
    { x: xt(22, 14), y: py(155.42), cls: 'fill-amber d4' },
  ],
}

export const facts = [
  { l: 'Entry → Exit', v: '152.84 → 155.73' },
  { l: 'Size', v: '40 SOL · 6,113.60' },
  { l: 'Margin', v: '611.36' },
  { l: 'Gross', v: '+115.72' },
  { l: 'Fees · Funding', v: '−2.00 · 0.00' },
]

// At a glance strip under the hero.
export const strip = [
  { t: exchangesAnd, s: 'Read-only API keys', d: 'M4 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0M4 12h16M12 4c2.5 2.2 3.5 5 3.5 8s-1 5.8-3.5 8c-2.5-2.2-3.5-5-3.5-8s1-5.8 3.5-8z' },
  { t: 'Perps and spot', s: 'Several accounts each', d: 'M5 19V11M10 19V5M15 19v-6M20 19V8' },
  { t: 'No account', s: 'No cloud, no tracking', d: 'M12 12a3.5 3.5 0 1 0 0-7a3.5 3.5 0 1 0 0 7zM5 20c.8-3.4 3.6-5.5 7-5.5s6.2 2.1 7 5.5M4 4l16 16' },
  { t: 'Encrypted on device', s: 'Locked with Face ID', d: 'M6.5 10.5h11v9h-11zM8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5M12 14v2' },
]

export const steps = [
  { n: '01', t: 'Connect a read-only key', b: `Add a ${exchangesOr} account as Perps or Spot and paste a key with Read access only. It stays in the iOS Keychain.` },
  { n: '02', t: 'Pull to sync', b: 'basis reads closed positions, fills, funding and balances, and shows each step as it finishes. Background sync keeps it current.' },
  { n: '03', t: 'Write the part only you know', b: 'Pick the strategy, tick the rules you kept, tag mistakes and emotions, set the planned stop, add a screenshot. basis turns it into R and patterns.' },
]

// Sync screen: each account's steps appear in turn. `n` picks the row's stagger classes (lr/lc/ls 1–6).
const SYNC = [
  { t: 'MEXC PERPS', cls: 'lr1', rows: [{ t: 'Closed positions', d: '2 positions read', n: 1 }, { t: 'Funding payments', d: '1 payment read', n: 2 }, { t: 'Price history', d: '2 trades measured', n: 3 }] },
  { t: 'OKX PERPS', cls: 'lr4', rows: [{ t: 'Closed positions', d: '1 position read', n: 4 }, { t: 'Price history', d: '1 trade measured', n: 5 }] },
  { t: 'MEXC SPOT', cls: 'lr6', rows: [{ t: 'Spot trades', d: '3 symbols checked', n: 6 }] },
]
export const sync = SYNC.map(g => ({
  t: g.t,
  cls: g.cls,
  rows: g.rows.map((r, k) => ({
    t: r.t, d: r.d,
    cls: 'lr' + r.n + (k < g.rows.length - 1 ? ' border-b-[.5px] border-hair' : ''),
    ck: 'lc' + r.n,
    sp: 'ls' + r.n,
  })),
}))

// Calendar: October 2026, Sunday first, today Oct 23. Daily net P&L in USDT.
const DAY_PNL: Record<number, number> = { 1: 84.20, 2: -42.10, 5: 126.50, 6: 38.90, 7: -120.40, 8: -388.90, 9: 201.30, 13: 152.80, 14: 612.40, 15: -74.60, 16: 98.30, 19: 240.10, 20: -58.70, 21: 79.65, 22: 10.65, 23: 47.71 }
// Trades per day where more than one closed. The month adds up to 23 trades.
const DAY_TRADES: Record<number, number> = { 19: 2, 20: 2, 21: 2, 22: 2, 23: 4 }
const UNJOURNALED = new Set([21, 22, 23])
const TODAY_DATE = 23
const FIRST_WEEKDAY = 4 // Oct 1, 2026 is a Thursday

const dayValues = Object.values(DAY_PNL)
const largest = Math.max(...dayValues.map(Math.abs))
const monthNet = dayValues.reduce((a, b) => a + b, 0)

const monthTrades = Object.keys(DAY_PNL).reduce((n, d) => n + (DAY_TRADES[+d] ?? 1), 0)

export const cal = { net: glyph(monthNet), days: dayValues.length, trades: monthTrades }
export const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export interface CalendarCell { n: string, amt: string, tint: string, cls: string, dot: boolean }

// Leading blanks, then one cell per day. Trading days are tinted green or red, stronger for bigger days.
export const cells: CalendarCell[] = [
  ...Array.from({ length: FIRST_WEEKDAY }, () => ({ n: '', amt: '', tint: '', cls: '', dot: false })),
  ...Array.from({ length: 31 }, (_, i) => {
    const d = i + 1
    const v = DAY_PNL[d]
    const wd = (FIRST_WEEKDAY + i) % 7
    const quiet = d > TODAY_DATE || wd === 0 || wd === 6
    const strength = v === undefined ? 0 : Math.round((0.18 + 0.42 * Math.min(1, Math.abs(v) / largest)) * 100)
    return {
      n: String(d),
      amt: v === undefined ? '' : signed(v),
      tint: v === undefined ? '' : `color-mix(in oklab, var(--color-${v >= 0 ? 'up' : 'dn'}) ${strength}%, transparent)`,
      cls: [
        v !== undefined ? 'font-bold text-fg' : `font-medium ${quiet ? 'text-f3' : 'text-f2'}`,
        d === TODAY_DATE ? 'inset-ring-2 inset-ring-fg' : '',
      ].join(' '),
      dot: UNJOURNALED.has(d),
    }
  }),
]

const WEEKS: [string, number, number][] = [['Sep 27 – Oct 3', -3, 3], ['Oct 4 – 10', 4, 10], ['Oct 11 – 17', 11, 17], ['Oct 18 – 24', 18, 24], ['Oct 25 – 31', 25, 31]]
export const weeks = WEEKS.map(([l, from, to]) => {
  let total = 0, count = 0
  for (let d = from; d <= to; d++) {
    if (DAY_PNL[d] === undefined) continue
    total += DAY_PNL[d]
    count += DAY_TRADES[d] ?? 1
  }
  return {
    l,
    now: from <= TODAY_DATE && TODAY_DATE <= to,
    t: count ? `${count} trade${count === 1 ? '' : 's'}` : 'No trades',
    amt: count ? glyph(total) : '–',
    cls: count ? (total >= 0 ? 'text-up' : 'text-dn') : 'text-f3',
  }
})

export const calFeats = [
  { t: 'All, Spot or Perps, any account', b: 'The same filter everywhere, plus chips for each exchange account once you use more than one.', d: 'M4.5 7h15M7.5 12h9M10.5 17h3' },
  { t: 'Your time zone, your week', b: 'Days split at your local midnight, so a late session lands on the right day.', d: 'M12 20a8 8 0 1 0 0-16a8 8 0 1 0 0 16zM12 8v4l2.5 2.5' },
  { t: 'Share cards and replays', b: 'Share a trade, a month or a range as a card, or a trade as a 6-second replay video. Returns by default; dollar amounts only if you turn them on.', d: 'M12 3.5v11M8 7.5l4-4 4 4M7 11H5.5v9.5h13V11H17' },
]

// Analysis: the sections on the phone's tab row and in the list beside it.
export const ANALYSIS_TABS = ['Overview', 'Strategy', 'Mistakes', 'Execution', 'Breakdowns', 'Journal'] as const
export type AnalysisTab = typeof ANALYSIS_TABS[number]

export const anaFeats: { t: AnalysisTab, b: string }[] = [
  { t: 'Overview', b: 'Net with its running curve and deepest drawdown, win rate, profit factor, expectancy, streaks, fees and funding.' },
  { t: 'Strategy', b: 'How each setup does with every rule kept versus any rule broken, and your costliest broken rule.' },
  { t: 'Mistakes', b: 'How often each one happens, what it costs, and your net without it, week by week.' },
  { t: 'Execution', b: 'MAE and MFE from real candles, how much of each move you kept, and your R distribution.' },
  { t: 'Breakdowns', b: 'By symbol, side, weekday, hour, holding time, leverage, rating, emotion and tag.' },
  { t: 'Journal', b: 'Journaled versus unjournaled results, and the backlog one tap away.' },
]

// Equity curve for October to date (326 × 150), with the deepest drawdown shaded.
function equityCurve() {
  const pts: [number, number][] = [[0, 0]]
  let cum = 0
  for (let d = 1; d <= TODAY_DATE; d++) {
    if (DAY_PNL[d] === undefined) continue
    cum += DAY_PNL[d]
    pts.push([d, cum])
  }
  let minV = Math.min(0, ...pts.map(p => p[1]))
  let maxV = Math.max(0, ...pts.map(p => p[1]))
  const pad = (maxV - minV) * 0.08
  minV -= pad
  maxV += pad
  const ex = (d: number) => f1(d / TODAY_DATE * CHART_W)
  const ey = (v: number) => f1(6 + (maxV - v) / (maxV - minV) * (CHART_H - 12))

  // Deepest peak-to-trough fall.
  let peak = 0, peakI = 0, best = { dd: 0, pi: 0, ti: 0 }
  pts.forEach(([, v], i) => {
    if (v > peak) { peak = v; peakI = i }
    if (peak - v > best.dd) best = { dd: peak - v, pi: peakI, ti: i }
  })
  const [pd, pv] = pts[best.pi]!
  const [td, tv] = pts[best.ti]!
  let dd = `M${ex(pd)} ${ey(pv)}`
  for (let i = best.pi + 1; i <= best.ti; i++) dd += `L${ex(pts[i]![0])} ${ey(pts[i]![1])}`
  dd += `L${ex(td)} ${ey(pv)}Z`

  return {
    line: pts.map(([d, v], i) => (i ? 'L' : 'M') + ex(d) + ' ' + ey(v)).join(''),
    zero: `M0 ${ey(0)}H${CHART_W}`,
    dd,
    rule: `M${ex(td)} 4V${CHART_H - 4}`,
    lx: f1(ex(td) + 6),
    ly: f1(ey(tv) + 4),
    label: 'DD ' + signed(-best.dd),
  }
}
export const eq = equityCurve()

// Every trade is tagged with a strategy, so these add up to the month: 23 trades, 14 wins, +1,007.81.
const STRATEGIES: [string, string, string, number, string][] = [
  ['Breakout Retest', '#8C9BFF', 'Perp · 15m · 4 rules', 586.20, '50% · 8'],
  ['VWAP Reclaim', '#6FB7C9', 'Perp · 5m · 3 rules', 391.45, '71% · 7'],
  ['Range Scalp', '#C9A86A', 'Perp · 1m · 3 rules', 133.61, '60% · 5'],
  ['News Fade', '#C98B73', 'Perp · 15m · 2 rules', -103.45, '67% · 3'],
]
const BEST_STRATEGY = Math.max(...STRATEGIES.map(s => Math.abs(s[3])))
export const strats = STRATEGIES.map(([n, col, m, v, wr]) => ({
  n,
  m,
  initials: n.split(' ').map(w => w[0]).join('').toUpperCase(),
  // The strategy's own colour, with an 18% tint behind its initials.
  col,
  bg: col + '2E',
  pnl: glyph(v),
  cls: v >= 0 ? 'text-up' : 'text-dn',
  wr,
  // Bar length relative to the best strategy.
  w: Math.round(Math.abs(v) / BEST_STRATEGY * 100) + '%',
}))

const SEVERITY = { High: 'text-dn bg-dn/16', Med: 'text-amber bg-amber/16', Low: 'text-f2 bg-s2' }
const MISTAKES: [string, keyof typeof SEVERITY, number, number][] = [['Early exit', 'Med', 7, -212.40], ['Moved stop', 'High', 5, -184.20], ['Revenge trade', 'High', 2, -148.90], ['Chased', 'Low', 4, -61.35]]
export const mist = MISTAKES.map(([n, s, k, c]) => ({ n, s, sevCls: SEVERITY[s], k: k + '×', c: glyph(c) }))

// R-multiple histogram: [label, trades, bar colour].
const R_DIST: [string, number, string][] = [['≤−1R', 3, 'bg-dn'], ['−1–0', 6, 'bg-dn/55'], ['0–1', 5, 'bg-up/55'], ['1–2', 6, 'bg-up'], ['≥2R', 3, 'bg-up']]
export const rdist = R_DIST.map(([l, n, cls]) => ({ l, n, cls, h: Math.round(n / 6 * 64) + 'px' }))

// The weekday with the most trades, from the calendar.
function busiestWeekday(): [string, number, number] {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const byDay = names.map(() => ({ trades: 0, net: 0 }))
  for (const [d, v] of Object.entries(DAY_PNL)) {
    const w = byDay[(FIRST_WEEKDAY + +d - 1) % 7]!
    w.trades += DAY_TRADES[+d] ?? 1
    w.net += v
  }
  const i = byDay.reduce((best, w, k) => (w.trades > byDay[best]!.trades ? k : best), 0)
  return [names[i]!, byDay[i]!.trades, byDay[i]!.net]
}

const BREAKDOWNS: [string, string, number, number][] = [['Symbol', 'SOLUSDT', 7, 412.30], ['Side', 'Long', 14, 688.15], ['Weekday', ...busiestWeekday()], ['Hour', '13:00 – 14:00', 4, 286.40], ['Holding time', '1 – 4 hours', 9, 502.10], ['Leverage', '10×', 11, 620.75], ['Emotion', 'Calm', 10, 540.60]]
export const bd = BREAKDOWNS.map(([d, g, t, n]) => ({ d, g, t: t + ' trades', n: glyph(n) }))

const JOURNAL_WEEKS: [string, number, number][] = [['Oct 18 – 24', 7, 12], ['Oct 11 – 17', 4, 4], ['Oct 4 – 10', 5, 5], ['Sep 27 – Oct 3', 2, 2]]
export const jweeks = JOURNAL_WEEKS.map(([l, done, all]) => ({ l, t: `${done} of ${all} journaled`, w: Math.round(done / all * 100) + '%' }))

// Share cards: the running P&L of the SOLUSDT trade from entry to exit (300 × 100, stretched to fit).
function shareCurve() {
  const pnl = [0, ...CLOSES.slice(8, 23).map(c => (c - 152.84) * 40), 113.72]
  const lo = Math.min(...pnl), hi = Math.max(...pnl), pad = (hi - lo) * 0.1
  const sy = (v: number) => f1(4 + (hi + pad - v) / (hi - lo + 2 * pad) * 92)
  const sx = (i: number) => f1(i / (pnl.length - 1) * 300)
  const line = pnl.map((v, i) => (i ? 'L' : 'M') + sx(i) + ' ' + sy(v)).join('')
  return { line, zero: `M0 ${sy(0)}H300`, area: `${line}L300 ${sy(0)}L0 ${sy(0)}Z` }
}
export const sc = shareCurve()

export const more = [
  { t: 'Journal reminders', b: 'A nudge after a trade closes, or every evening. Notifications name the trade, never the amount.', d: 'M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15zM10 20.5h4' },
  { t: 'Drafts and screenshots', b: 'Half-written journals are kept as drafts. Attach chart screenshots, stored encrypted.', d: 'M4.5 6.5h15v12h-15zM8 13.5l2.5-2.5 3 3 2-2 3 3M15.5 9.5h.01' },
  { t: 'Landscape chart', b: 'Turn the phone sideways for a full-screen chart with a crosshair and running P&L.', d: 'M3.5 7.5h17v9h-17zM6.5 13.5l3-3 2.5 2 3.5-3.5 2 2' },
  { t: 'Background sync', b: 'basis syncs on its own, so short exchange history windows never cost you trades.', d: 'M5 9a7 7 0 0 1 12.5-3M19 5v4h-4M19 15a7 7 0 0 1-12.5 3M5 19v-4h4' },
]

export const priv = [
  { t: 'Encrypted database', b: 'Trades and journals sit in a SQLCipher database. Its random 256-bit key lives in the iOS Keychain.', d: 'M5 6.5c0-1.4 3.1-2.5 7-2.5s7 1.1 7 2.5-3.1 2.5-7 2.5-7-1.1-7-2.5zM5 6.5v11c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-11M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5' },
  { t: 'Face ID and auto-lock', b: 'Lock the app behind Face ID or a passcode. A privacy cover hides your trades in the app switcher.', d: 'M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16M9 9.5v1M15 9.5v1M12 9.5v3.5h-1M9.5 15.5c1.4 1 3.6 1 5 0' },
  { t: 'Read-only by design', b: 'basis only reads. OKX keys that can trade or withdraw are refused. MEXC can’t report a key’s permissions, so create it with Read only.', d: 'M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12zM12 15a3 3 0 1 0 0-6a3 3 0 1 0 0 6z' },
  { t: 'Encrypted backups', b: 'Export a .basis file sealed with AES-256-GCM and your passphrase. API keys are never included.', d: 'M6 3.5h8l4 4v13H6zM14 3.5v4h4M9.5 14.5h5M12 12v5' },
]

export const onPhone = ['Encrypted database (SQLCipher)', 'API keys in the iOS Keychain', 'Face ID or passcode lock', 'Backups sealed with your passphrase']

export const faq = [
  { q: 'Which exchanges does basis support?', a: `${exchangesAnd}, for both perpetual futures and spot (for OKX, the global site). Each account you add imports Perps or Spot, and you can add several per exchange with their own names.` },
  { q: 'Can basis place trades or move my funds?', a: 'No. basis only reads. Create your API key with Read access only and leave Trade and Withdraw off. OKX keys with trade or withdraw permission are refused; MEXC doesn’t tell an app what a key can do, so it’s up to you to create it read-only.' },
  { q: 'Where is my data stored?', a: 'Only on your phone, in an encrypted database. There is no basis account and no basis server. The app only connects to your exchanges to sync (looking their addresses up over Cloudflare’s encrypted DNS), and to nothing else. Widgets read a small summary the app leaves them and never contact an exchange.' },
  { q: 'How far back does it import?', a: 'As far as each exchange’s API allows. OKX returns about three months of history. MEXC returns spot fills for the last 30 days only, so basis keeps syncing in the background to build your history from there.' },
  { q: 'What happens if I lose or change my phone?', a: 'Export an encrypted .basis backup from Settings and import it on the new phone with your passphrase. Without the passphrase, nobody can open it, including us.' },
  // {price} is filled in per visitor; see usePrice.
  { q: 'What does it cost?', a: 'basis is {price}, a one-time purchase on the App Store. There’s no subscription.' },
]

// Keep these in step with the App Store Connect price for each storefront.
export const prices = {
  ph: '₱99',
  default: '$4.99',
}

// Outbound links. Until the app is approved these go to our own "under review" pages; swap in
// the App Store URL and the real policy and support pages at launch.
export const links = {
  appStore: '/download',
  privacyPolicy: '/privacy',
  support: '/support',
}
