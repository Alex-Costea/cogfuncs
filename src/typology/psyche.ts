// base types
import {Instinct} from "./instinct.ts";
import {gut, head, heart, type1, type2, type3, type4, type5, type6, type7, type8, type9} from "./enneagrams.ts";

// type 1

type e1w9 = {
    core: type1
    wing: type9
}
type e1w2 = {
    core: type1
    wing: type2
}
type e1 = {
    coreType: type1
    subtype: e1w9 | e1w2
}

// type 2
type e2w1 = {
    core: type2
    wing: type1
}
type e2w3 = {
    core: type2
    wing: type3
}
type e2 = {
    coreType: type2
    subtype: e2w1 | e2w3
}

// type 3
type e3w2 = {
    core: type3
    wing: type2
}
type e3w4 = {
    core: type3
    wing: type4
}
type e3 = {
    coreType: type3
    subtype: e3w2 | e3w4
}

// type 4
type e4w3 = {
    core: type4
    wing: type3
}
type e4w5 = {
    core: type4
    wing: type5
}
type e4 = {
    coreType: type4
    subtype: e4w3 | e4w5
}

// type 5
type e5w4 = {
    core: type5
    wing: type4
}
type e5w6 = {
    core: type5
    wing: type6
}
type e5 = {
    coreType: type5
    subtype: e5w4 | e5w6
}

// type 6
type e6w5 = {
    core: type6
    wing: type5
}
type e6w7 = {
    core: type6
    wing: type7
}
type e6 = {
    coreType: type6
    subtype: e6w5 | e6w7
}

// type 7
type e7w6 = {
    core: type7
    wing: type6
}
type e7w8 = {
    core: type7
    wing: type8
}
type e7 = {
    coreType: type7
    subtype: e7w6 | e7w8
}

// type 8
type e8w7 = {
    core: type8
    wing: type7
}
type e8w9 = {
    core: type8
    wing: type9
}
type e8 = {
    coreType: type8
    subtype: e8w7 | e8w9
}

// type 9
type e9w8 = {
    core: type9
    wing: type8
}
type e9w1 = {
    core: type9
    wing: type1
}
type e9 = {
    coreType: type9
    subtype: e9w8 | e9w1
}

// fixes

type eHeart = {
    coreType: heart
    subtype: e2 | e3 | e4
}

type eHead = {
    coreType: head
    subtype: e5 | e6 | e7
}

type eGut = {
    coreType: gut
    subtype: e8 | e9 | e1
}

// tri fixes
type triFix ={
    head : eHead
    heart: eHeart
    gut : eGut
}

// dominant types

type HeartDom = {
    leading: heart
    triFix: triFix
}

type HeadDom = {
    leading: head
    triFix: triFix
}

type GutDom = {
    leading: gut
    triFix: triFix
}

// enneagram

export type Psyche = {
    core: HeartDom | HeadDom | GutDom
    instinct : Instinct
}

