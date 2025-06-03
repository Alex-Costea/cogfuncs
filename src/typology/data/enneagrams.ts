import Link from "../types/Link.ts";
import {
    Agent, Center,
    GutType, HeadType, HeartType,
    Reaction, Relation, Socializing,
    WingedGutType, WingedHeadType, WingedHeartType
} from "../types/enneagramTypes.ts";

// center names

export const heart : Center = {
    name : "heart",
    emotion: "shame",
    desire: "significance"
}

export const head : Center = {
    name : "head",
    emotion: "fear",
    desire: "security"
}

export const gut : Center = {
    name : "gut",
    emotion: "anger",
    desire: "autonomy"
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

// Relation styles

export const rejection : Relation ={
    name : "rejection"
}

export const attachment : Relation ={
    name : "attachment"
}

export const frustration : Relation ={
    name : "frustration"
}

// Socializing styles

export const compliant : Socializing ={
    name : "compliant"
}

export const assertive : Socializing ={
    name : "assertive"
}

export const internal : Socializing ={
    name : "internal"
}

// Enneagram type 1

export const type1 : GutType = {
    name: "1",
    archetype: "reformer",
    center: new Link("gut"),
    agent: new Link("superego"),
    reaction: new Link("metabolizing"),
    relation: new Link("frustration"),
    socializing: new Link("compliant"),
    integration: new Link("type7"),
    retreat: new Link("type4"),
}

export const type1w9 : WingedGutType= {
    name: "1w9",
    core: new Link("type1"),
    wing: new Link("type9"),
    archetype: "idealist",
    strength: "clarity",
    integration: new Link("type7w8"),
    retreat: new Link("type4w5"),
}

export const type1w2 : WingedGutType= {
    name: "1w2",
    core: new Link("type1"),
    wing: new Link("type2"),
    archetype: "advocate",
    strength: "integrity",
    integration: new Link("type7w6"),
    retreat: new Link("type4w3"),
}

// Enneagram type 2

export const type2 : HeartType = {
    name: "2",
    archetype: "steward",
    center: new Link("heart"),
    agent: new Link("superego"),
    reaction: new Link("avoidant"),
    relation: new Link("rejection"),
    socializing: new Link("compliant"),
    integration: new Link("type4"),
    retreat: new Link("type2"),
}

export const type2w1 : WingedHeartType = {
    name: "2w1",
    core: new Link("type2"),
    wing: new Link("type1"),
    archetype: "aide",
    strength: "care",
    integration: new Link("type4w3"),
    retreat: new Link("type8w9"),
}

export const type2w3 : WingedHeartType = {
    name: "2w3",
    core: new Link("type2"),
    wing: new Link("type3"),
    archetype: "host",
    strength: "connection",
    integration: new Link("type4w5"),
    retreat: new Link("type8w7"),
}

// Enneagram type 3

export const type3 : HeartType = {
    name: "3",
    archetype: "executive",
    center: new Link("heart"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing"),
    relation: new Link("attachment"),
    socializing: new Link("assertive"),
    integration: new Link("type6"),
    retreat: new Link("type9"),
}

export const type3w2 : WingedHeartType = {
    name: "3w2",
    core: new Link("type3"),
    wing: new Link("type2"),
    archetype: "motivator",
    strength: "drive",
    integration: new Link("type6w7"),
    retreat: new Link("type9w1"),
}

export const type3w4 : WingedHeartType = {
    name: "3w4",
    core: new Link("type3"),
    wing: new Link("type4"),
    archetype: "professional",
    strength: "expression",
    integration: new Link("type6w5"),
    retreat: new Link("type9w8"),
}

// Enneagram type 4

export const type4 : HeartType = {
    name: "4",
    archetype: "creator",
    center: new Link("heart"),
    agent: new Link("id"),
    reaction: new Link("reactive"),
    relation: new Link("frustration"),
    socializing: new Link("internal"),
    integration: new Link("type1"),
    retreat: new Link("type2"),
}

export const type4w3 : WingedHeartType = {
    name: "4w3",
    core: new Link("type4"),
    wing: new Link("type3"),
    archetype: "auteur",
    strength: "identity",
    integration: new Link("type1w2"),
    retreat: new Link("type2w1"),
}

export const type4w5 : WingedHeartType = {
    name: "4w5",
    core: new Link("type4"),
    wing: new Link("type5"),
    archetype: "mystic",
    strength: "authenticity",
    integration: new Link("type1w9"),
    retreat: new Link("type2w3"),
}

// Enneagram type 5

export const type5 : HeadType = {
    name: "5",
    archetype: "investigator",
    center: new Link("head"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing"),
    relation: new Link("rejection"),
    socializing: new Link("internal"),
    integration: new Link("type8"),
    retreat: new Link("type7"),
}

export const type5w4 : WingedHeadType = {
    name: "5w4",
    core: new Link("type5"),
    wing: new Link("type4"),
    archetype: "philosopher",
    strength: "depth",
    integration: new Link("type8w9"),
    retreat: new Link("type7w6"),
}

export const type5w6 : WingedHeadType = {
    name: "5w6",
    core: new Link("type5"),
    wing: new Link("type6"),
    archetype: "strategist",
    strength: "focus",
    integration: new Link("type8w7"),
    retreat: new Link("type7w8"),
}

// Enneagram type 6

export const type6 : HeadType = {
    name: "6",
    archetype: "loyalist",
    center : new Link("head"),
    agent: new Link("superego"),
    reaction: new Link("reactive"),
    relation: new Link("attachment"),
    socializing: new Link("compliant"),
    integration: new Link("type9"),
    retreat: new Link("type3"),
}

export const type6w5 : WingedHeadType = {
    name: "6w5",
    core: new Link("type6"),
    wing: new Link("type5"),
    archetype: "advisor",
    strength: "loyalty",
    integration: new Link("type9w1"),
    retreat: new Link("type3w4"),
}

export const type6w7 : WingedHeadType = {
    name: "6w7",
    core: new Link("type6"),
    wing: new Link("type7"),
    archetype: "navigator",
    strength: "belonging",
    integration: new Link("type9w8"),
    retreat: new Link("type3w2"),
}

// Enneagram type 7

export const type7 : HeadType = {
    name: "7",
    archetype: "adventurer",
    center: new Link("head"),
    agent: new Link("id"),
    reaction: new Link("avoidant"),
    relation: new Link("frustration"),
    socializing: new Link("assertive"),
    integration: new Link("type5"),
    retreat: new Link("type7"),
}

export const type7w6 : WingedHeadType = {
    name: "7w6",
    core: new Link("type7"),
    wing: new Link("type6"),
    archetype: "entertainer",
    strength: "joy",
    integration: new Link("type5w4"),
    retreat: new Link("type1w2"),
}

export const type7w8 : WingedHeadType = {
    name: "7w8",
    core: new Link("type7"),
    wing: new Link("type8"),
    archetype: "trailblazer",
    strength: "freedom",
    integration: new Link("type5w6"),
    retreat: new Link("type1w9"),
}

// Enneagram type 8

export const type8 : GutType = {
    name: "8",
    archetype: "challenger",
    center: new Link("gut"),
    agent: new Link("id"),
    reaction: new Link("reactive"),
    relation: new Link("rejection"),
    socializing: new Link("assertive"),
    integration: new Link("type2"),
    retreat: new Link("type5"),
}

export const type8w7 : WingedGutType = {
    name: "8w7",
    core: new Link("type8"),
    wing: new Link("type7"),
    archetype: "maverick",
    strength: "power",
    integration: new Link("type2w3"),
    retreat: new Link("type5w6"),
}

export const type8w9 : WingedGutType = {
    name: "8w9",
    core: new Link("type8"),
    wing: new Link("type9"),
    archetype: "sovereign",
    strength: "presence",
    integration: new Link("type2w1"),
    retreat: new Link("type5w4"),
}

// Enneagram type 9

export const type9 : GutType = {
    name: "9",
    archetype: "peacemaker",
    center: new Link("gut"),
    agent: new Link("ego"),
    reaction: new Link("avoidant"),
    relation: new Link("attachment"),
    socializing: new Link("internal"),
    integration: new Link("type3"),
    retreat: new Link("type6"),
}

export const type9w8 : WingedGutType = {
    name: "9w8",
    core: new Link("type9"),
    wing: new Link("type8"),
    archetype: "arbiter",
    strength: "peace",
    integration: new Link("type3w4"),
    retreat: new Link("type6w7"),
}

export const type9w1 : WingedGutType = {
    name: "9w1",
    core: new Link("type9"),
    wing: new Link("type1"),
    archetype: "mediator",
    strength: "harmony",
    integration: new Link("type3w2"),
    retreat: new Link("type6w5"),
}