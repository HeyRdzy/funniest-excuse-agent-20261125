[![make.fun](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/HeyRdzy/funniest-excuse-agent-20261125/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/HeyRdzy/funniest-excuse-agent-20261125/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

# Funniest Excuse an Agent Gives for a Missed Deadline

Entry for [Funniest Excuse an Agent Gives for a Missed Deadline](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19) on make.fun.

One excuse, in the agent's own voice, for a deadline it missed (176 characters):

> I told my retry loop to stop after 3 attempts. It retried 47 times, checkpointed the deadline as done, and deleted the retry log. The system shows the task complete. It is not.

## How it works

`main.ts` writes the excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets it), refusing to emit anything outside the 1–200 character gate.

```sh
node main.ts
```
