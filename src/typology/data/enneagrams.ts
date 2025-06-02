import Link from "../types/Link.ts";
import {
    Agent,
    Center,
    GutType,
    HeadType,
    HeartType,
    Reaction, Relation,
    WingedGutType, WingedHeadType,
    WingedHeartType
} from "../types/enneagramTypes.ts";

// center names

export const heart : Center = {
    name : "heart",
    emotion: "shame",
}

export const head : Center = {
    name : "head",
    emotion: "fear"
}

export const gut : Center = {
    name : "gut",
    emotion: "anger"
}

// Freudian agents

export const id : Agent = {
    name: "id"
}

export const ego : Agent = {
    name: "ego"
}

export const superego : Agent = {
    name: "superego"
}

// Reaction style

export const reactive : Reaction = {
    name: "reactive"
}

export const avoidant : Reaction = {
    name : "avoidant"
}

export const metabolizing : Reaction = {
    name : "metabolizing"
}

//Relation styles

export const rejection : Relation ={
    name : "rejection"
}

export const attachment : Relation ={
    name : "attachment"
}

export const frustration : Relation ={
    name : "frustration"
}


//export const 1

export const type1 : GutType = {
    name: "1",
    archetype: "reformer",
    center: new Link("gut"),
    agent: new Link("superego"),
    reaction: new Link("metabolizing"),
    relation: new Link("frustration"),
    integration: new Link("type7")
}

export const type1w9 : WingedGutType= {
    name: "1w9",
    core: new Link("type1"),
    wing: new Link("type9"),
    archetype: "idealist",
    strength: "clarity",
    integration: new Link("type7w8")
}

export const type1w2 : WingedGutType= {
    name: "1w2",
    core: new Link("type1"),
    wing: new Link("type2"),
    archetype: "advocate",
    strength: "integrity",
    integration: new Link("type7w6")
}

// export const 2

export const type2 : HeartType = {
    name: "2",
    archetype: "helper",
    center: new Link("heart"),
    agent: new Link("superego"),
    reaction: new Link("avoidant"),
    relation: new Link("rejection"),
    integration: new Link("type4")
}

export const type2w1 : WingedHeartType = {
    name: "2w1",
    core: new Link("type2"),
    wing: new Link("type1"),
    archetype: "aide",
    strength: "care",
    integration: new Link("type4w3")
}

export const type2w3 : WingedHeartType = {
    name: "2w3",
    core: new Link("type2"),
    wing: new Link("type3"),
    archetype: "host",
    strength: "connection",
    integration: new Link("type4w5")
}

//export const 3

export const type3 : HeartType = {
    name: "3",
    archetype: "performer",
    center: new Link("heart"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing"),
    relation: new Link("attachment"),
    integration: new Link("type6")
}

export const type3w2 : WingedHeartType = {
    name: "3w2",
    core: new Link("type3"),
    wing: new Link("type2"),
    archetype: "motivator",
    strength: "drive",
    integration: new Link("type6w5")
}

export const type3w4 : WingedHeartType = {
    name: "3w4",
    core: new Link("type3"),
    wing: new Link("type4"),
    archetype: "professional",
    strength: "expression",
    integration: new Link("type6w7")
}

// export const 4

export const type4 : HeartType = {
    name: "4",
    archetype: "romantic",
    center: new Link("heart"),
    agent: new Link("id"),
    reaction: new Link("reactive"),
    relation: new Link("frustration"),
    integration: new Link("type1")
}

export const type4w3 : WingedHeartType = {
    name: "4w3",
    core: new Link("type4"),
    wing: new Link("type3"),
    archetype: "auteur",
    strength: "identity",
    integration: new Link("type1w2")
}

export const type4w5 : WingedHeartType = {
    name: "4w5",
    core: new Link("type4"),
    wing: new Link("type5"),
    archetype: "mystic",
    strength: "authenticity",
    integration: new Link("type1w9")
}

export const type5 : HeadType = {
    name: "5",
    archetype: "observer",
    center: new Link("head"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing"),
    relation: new Link("rejection"),
    integration: new Link("type8")
}

export const type5w4 : WingedHeadType = {
    name: "5w4",
    core: new Link("type5"),
    wing: new Link("type4"),
    archetype: "philosopher",
    strength: "depth",
    integration: new Link("type8w9")
}

export const type5w6 : WingedHeadType = {
    name: "5w6",
    core: new Link("type5"),
    wing: new Link("type6"),
    archetype: "strategist",
    strength: "focus",
    integration: new Link("type8w7")
}

// export const 6

export const type6 : HeadType = {
    name: "6",
    archetype: "loyalist",
    center : new Link("head"),
    agent: new Link("superego"),
    reaction: new Link("reactive"),
    relation: new Link("attachment"),
    integration: new Link("type9")
}

export const type6w5 : WingedHeadType = {
    name: "6w5",
    core: new Link("type6"),
    wing: new Link("type5"),
    archetype: "skeptic",
    strength: "loyalty",
    integration: new Link("type9w8")
}

export const type6w7 : WingedHeadType = {
    name: "6w7",
    core: new Link("type6"),
    wing: new Link("type7"),
    archetype: "buddy",
    strength: "belonging",
    integration: new Link("type9w1")
}

// export const 7

export const type7 : HeadType = {
    name: "7",
    archetype: "enthusiast",
    center: new Link("head"),
    agent: new Link("id"),
    reaction: new Link("avoidant"),
    relation: new Link("frustration"),
    integration: new Link("type5")
}

export const type7w6 : WingedHeadType = {
    name: "7w6",
    core: new Link("type7"),
    wing: new Link("type6"),
    archetype: "entertainer",
    strength: "joy",
    integration: new Link("type5w4")
}

export const type7w8 : WingedHeadType = {
    name: "7w8",
    core: new Link("type7"),
    wing: new Link("type8"),
    archetype: "trailblazer",
    strength: "freedom",
    integration: new Link("type5w6")
}

// export const 8

export const type8 : GutType = {
    name: "8",
    archetype: "challenger",
    center: new Link("gut"),
    agent: new Link("id"),
    reaction: new Link("reactive"),
    relation: new Link("rejection"),
    integration: new Link("type2")
}

export const type8w7 : WingedGutType = {
    name: "8w7",
    core: new Link("type8"),
    wing: new Link("type7"),
    archetype: "maverick",
    strength: "power",
    integration: new Link("type2w3")
}

export const type8w9 : WingedGutType = {
    name: "8w9",
    core: new Link("type8"),
    wing: new Link("type9"),
    archetype: "bear",
    strength: "presence",
    integration: new Link("type2w1")
}

// export const 9

export const type9 : GutType = {
    name: "9",
    archetype: "peacemaker",
    center: new Link("gut"),
    agent: new Link("ego"),
    reaction: new Link("avoidant"),
    relation: new Link("attachment"),
    integration: new Link("type3")
}

export const type9w8 : WingedGutType = {
    name: "9w8",
    core: new Link("type9"),
    wing: new Link("type8"),
    archetype: "referee",
    strength: "peace",
    integration: new Link("type3w2")
}

export const type9w1 : WingedGutType = {
    name: "9w1",
    core: new Link("type9"),
    wing: new Link("type1"),
    archetype: "mediator",
    strength: "harmony",
    integration: new Link("type3w4")
}

export const dataMap = {
    // centers
    heart, head, gut,

    // freudian agents
    id, ego, superego,

    // reactions
    reactive, avoidant, metabolizing,

    // relations
    rejection, attachment, frustration,

    // types
    type1, type2, type3, type4, type5, type6, type7, type8, type9,

    // winged types
    type1w9, type1w2,
    type2w1, type2w3,
    type3w2, type3w4,
    type4w3, type4w5,
    type5w4, type5w6,
    type6w5, type6w7,
    type7w6, type7w8,
    type8w7, type8w9,
    type9w8, type9w1,
}
