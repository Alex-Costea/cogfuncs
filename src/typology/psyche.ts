// base types
import {Instinct} from "./instinct.ts";
import {
    gut,
    head,
    heart,
    type1, type1w2, type1w9,
    type2, type2w1, type2w3,
    type3, type3w2, type3w4,
    type4, type4w3, type4w5,
    type5, type5w4, type5w6,
    type6, type6w5, type6w7,
    type7, type7w6, type7w8,
    type8, type8w7, type8w9,
    type9, type9w1, type9w8
} from "./enneagrams.ts";

type e1 = {
    coreType: type1
    subtype: type1w9 | type1w2
}

type e2 = {
    coreType: type2
    subtype: type2w1 | type2w3
}

type e3 = {
    coreType: type3
    subtype: type3w2 | type3w4
}

type e4 = {
    coreType: type4
    subtype: type4w3 | type4w5
}

type e5 = {
    coreType: type5
    subtype: type5w4 | type5w6
}

type e6 = {
    coreType: type6
    subtype: type6w5 | type6w7
}

type e7 = {
    coreType: type7
    subtype: type7w6 | type7w8
}

type e8 = {
    coreType: type8
    subtype: type8w7 | type8w9
}

type e9 = {
    coreType: type9
    subtype: type9w8 | type9w1
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

