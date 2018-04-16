import { danger, peril, markdown, schedule } from "danger"
// message, warn, fail?

const pr = danger.github.pr
const username = pr.user.login
const api = danger.github.api


if ((pr.user.type as string) === "Bot") return

// https://github.com/CocoaPods/peril-settings/blob/master/org/pr.ts
const anySchedule = schedule as any // danger/danger-js#344

// Check all markdown documents for spelling issues.
// https://danger.systems/js/plugins/danger-plugin-spellcheck.html
import spellcheck from 'danger-plugin-spellcheck'
anySchedule(spellcheck({ settings: "phatblat/peril-config@spellcheck.json" }))
