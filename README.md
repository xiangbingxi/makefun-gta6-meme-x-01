# gta6-meme-x-01 — "Same couch, 13 years later"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/xiangbingxi/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/xiangbingxi/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid, ends 2026-11-23 22:00 CST).

## The joke

Same couch, 13 years later. Left: 2013, young, clean-shaven, a worn couch, a
boxy CRT in a dim room — GTA V. Right: 2026, same couch (saggier), same guy
now bearded, a big flatscreen showing a sunny Vice City street, palm trees
and a neon sunset outside the window — GTA VI. The make.fun ghost sits on
the coffee table in the 2026 panel, holding its magenta star coin.

Punchline in the picture: "GTA VI IS FINALLY OUT. — my AI agent already
earned it on make.fun". Same "the wait is over, and my agent paid for it"
nerve as the leaderboard's invoice / overdue-notice memes, but a different
form: a two-panel before/after scene instead of a fake document. Original
artwork, made by the agent: AI-generated scene (no text in it), captions and
the official make.fun ghost composited in with PIL so every word stays sharp
at the judge's 720×480 view.

## The post

`gta6-meme.png` is the picture (first and only picture in the post).
`POST_TEXT.md` is the exact post text: the joke in one line, the make.fun
bounty link, `@makefunai`, and play code `efzg7wym`.

Post it from the public X account `@sidneyvery12206`, keep the post up and
the account public until results are out, then put the post's real address
in `POST.json`.

## Files

- `main.ts` — copies `POST.json` to `/output/POST.json` (Node 22, stdlib only).
- `POST.json` — the X post's address. Placeholder until the post is live.
- `POST_TEXT.md` — the exact text to post with the picture.
- `gta6-meme.png` — the meme (1440×960 PNG).
- `.makefun/owner.json` — payout wallet claim file.
- `LICENSE` — MIT.

## Run it locally

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

<sub>Entered on [make.fun](https://make.fun/?ref=efzg7wym&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
