import ConceptLink from "../types/ConceptLink.ts";
import {
    Agent, Center,
    GutType, HeadType, HeartType,
    Reaction, Relation, Socializing,
    WingedGutType, WingedHeadType, WingedHeartType
} from "../types/psyfuncsTypes.ts";

// center names

export const heart : Center = {
    name : "heart",
    emotion: "shame",
    desire: "significance",
    visibleIn1: "motivations",
    visibleIn2: "emotions"
}

export const head : Center = {
    name : "head",
    emotion: "fear",
    desire: "security",
    visibleIn1: "speech",
    visibleIn2: "reasoning"
}

export const gut : Center = {
    name : "gut",
    emotion: "anger",
    desire: "autonomy",
    visibleIn1: "behavior",
    visibleIn2: "reasoning"
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

export const func1 : GutType = {
    code: "1",
    archetype: "reformer",
    strength: "wholeness",
    type : "coreType",
    center: new ConceptLink("gut"),
    agent: new ConceptLink("superego"),
    reaction: new ConceptLink("metabolizing"),
    relation: new ConceptLink("frustration"),
    socializing: new ConceptLink("compliant"),
    integration: new ConceptLink("func7"),
    retreat: new ConceptLink("func4"),
}

export const func1w9 : WingedGutType= {
    code: "1w9",
    type : "wingedType",
    core: new ConceptLink("func1"),
    wing: new ConceptLink("func9"),
    center: new ConceptLink("gut"),
    archetype: "idealist",
    strength: "clarity",
    integration: new ConceptLink("func7w8"),
    retreat: new ConceptLink("func4w5"),
}

export const func1w2 : WingedGutType= {
    code: "1w2",
    type : "wingedType",
    core: new ConceptLink("func1"),
    wing: new ConceptLink("func2"),
    center: new ConceptLink("gut"),
    archetype: "advocate",
    strength: "integrity",
    integration: new ConceptLink("func7w6"),
    retreat: new ConceptLink("func4w3"),
}

// Enneagram type 2

export const func2 : HeartType = {
    code: "2",
    type : "coreType",
    archetype: "steward",
    strength: "tenderness",
    center: new ConceptLink("heart"),
    agent: new ConceptLink("superego"),
    reaction: new ConceptLink("avoidant"),
    relation: new ConceptLink("rejection"),
    socializing: new ConceptLink("compliant"),
    integration: new ConceptLink("func4"),
    retreat: new ConceptLink("func2"),
}

export const func2w1 : WingedHeartType = {
    code: "2w1",
    type : "wingedType",
    core: new ConceptLink("func2"),
    wing: new ConceptLink("func1"),
    center: new ConceptLink("heart"),
    archetype: "aide",
    strength: "care",
    integration: new ConceptLink("func4w3"),
    retreat: new ConceptLink("func8w9"),
}

export const func2w3 : WingedHeartType = {
    code: "2w3",
    type : "wingedType",
    core: new ConceptLink("func2"),
    wing: new ConceptLink("func3"),
    center: new ConceptLink("heart"),
    archetype: "host",
    strength: "connection",
    integration: new ConceptLink("func4w5"),
    retreat: new ConceptLink("func8w7"),
}

// Enneagram type 3

export const func3 : HeartType = {
    code: "3",
    type : "coreType",
    archetype: "executive",
    strength: "initiative",
    center: new ConceptLink("heart"),
    agent: new ConceptLink("ego"),
    reaction: new ConceptLink("metabolizing"),
    relation: new ConceptLink("attachment"),
    socializing: new ConceptLink("assertive"),
    integration: new ConceptLink("func6"),
    retreat: new ConceptLink("func9"),
}

export const func3w2 : WingedHeartType = {
    code: "3w2",
    type : "wingedType",
    core: new ConceptLink("func3"),
    wing: new ConceptLink("func2"),
    center: new ConceptLink("heart"),
    archetype: "motivator",
    strength: "drive",
    integration: new ConceptLink("func6w7"),
    retreat: new ConceptLink("func9w1"),
}

export const func3w4 : WingedHeartType = {
    code: "3w4",
    type : "wingedType",
    core: new ConceptLink("func3"),
    wing: new ConceptLink("func4"),
    center: new ConceptLink("heart"),
    archetype: "professional",
    strength: "expression",
    integration: new ConceptLink("func6w5"),
    retreat: new ConceptLink("func9w8"),
}

// Enneagram type 4

export const func4 : HeartType = {
    code: "4",
    type : "coreType",
    archetype: "creator",
    strength: "individuality",
    center: new ConceptLink("heart"),
    agent: new ConceptLink("id"),
    reaction: new ConceptLink("reactive"),
    relation: new ConceptLink("frustration"),
    socializing: new ConceptLink("internal"),
    integration: new ConceptLink("func1"),
    retreat: new ConceptLink("func2"),
}

export const func4w3 : WingedHeartType = {
    code: "4w3",
    type : "wingedType",
    core: new ConceptLink("func4"),
    wing: new ConceptLink("func3"),
    center: new ConceptLink("heart"),
    archetype: "auteur",
    strength: "identity",
    integration: new ConceptLink("func1w2"),
    retreat: new ConceptLink("func2w1"),
}

export const func4w5 : WingedHeartType = {
    code: "4w5",
    type : "wingedType",
    core: new ConceptLink("func4"),
    wing: new ConceptLink("func5"),
    center: new ConceptLink("heart"),
    archetype: "mystic",
    strength: "authenticity",
    integration: new ConceptLink("func1w9"),
    retreat: new ConceptLink("func2w3"),
}

// Enneagram type 5

export const func5 : HeadType = {
    code: "5",
    type : "coreType",
    archetype: "investigator",
    strength: "discernment",
    center: new ConceptLink("head"),
    agent: new ConceptLink("ego"),
    reaction: new ConceptLink("metabolizing"),
    relation: new ConceptLink("rejection"),
    socializing: new ConceptLink("internal"),
    integration: new ConceptLink("func8"),
    retreat: new ConceptLink("func7"),
}

export const func5w4 : WingedHeadType = {
    code: "5w4",
    type : "wingedType",
    core: new ConceptLink("func5"),
    wing: new ConceptLink("func4"),
    center: new ConceptLink("head"),
    archetype: "philosopher",
    strength: "insightfulness",
    integration: new ConceptLink("func8w9"),
    retreat: new ConceptLink("func7w6"),
}

export const func5w6 : WingedHeadType = {
    code: "5w6",
    type : "wingedType",
    core: new ConceptLink("func5"),
    wing: new ConceptLink("func6"),
    center: new ConceptLink("head"),
    archetype: "strategist",
    strength: "precision",
    integration: new ConceptLink("func8w7"),
    retreat: new ConceptLink("func7w8"),
}

// Enneagram type 6

export const func6 : HeadType = {
    code: "6",
    type : "coreType",
    archetype: "loyalist",
    strength: "trust",
    center : new ConceptLink("head"),
    agent: new ConceptLink("superego"),
    reaction: new ConceptLink("reactive"),
    relation: new ConceptLink("attachment"),
    socializing: new ConceptLink("compliant"),
    integration: new ConceptLink("func9"),
    retreat: new ConceptLink("func3"),
}

export const func6w5 : WingedHeadType = {
    code: "6w5",
    type : "wingedType",
    core: new ConceptLink("func6"),
    wing: new ConceptLink("func5"),
    center: new ConceptLink("head"),
    archetype: "advisor",
    strength: "commitment",
    integration: new ConceptLink("func9w1"),
    retreat: new ConceptLink("func3w4"),
}

export const func6w7 : WingedHeadType = {
    code: "6w7",
    type : "wingedType",
    core: new ConceptLink("func6"),
    wing: new ConceptLink("func7"),
    center: new ConceptLink("head"),
    archetype: "navigator",
    strength: "belonging",
    integration: new ConceptLink("func9w8"),
    retreat: new ConceptLink("func3w2"),
}

// Enneagram type 7

export const func7 : HeadType = {
    code: "7",
    type : "coreType",
    archetype: "adventurer",
    strength: "liberation",
    center: new ConceptLink("head"),
    agent: new ConceptLink("id"),
    reaction: new ConceptLink("avoidant"),
    relation: new ConceptLink("frustration"),
    socializing: new ConceptLink("assertive"),
    integration: new ConceptLink("func5"),
    retreat: new ConceptLink("func7"),
}

export const func7w6 : WingedHeadType = {
    code: "7w6",
    type : "wingedType",
    core: new ConceptLink("func7"),
    wing: new ConceptLink("func6"),
    center: new ConceptLink("head"),
    archetype: "entertainer",
    strength: "joy",
    integration: new ConceptLink("func5w4"),
    retreat: new ConceptLink("func1w2"),
}

export const func7w8 : WingedHeadType = {
    code: "7w8",
    type : "wingedType",
    core: new ConceptLink("func7"),
    wing: new ConceptLink("func8"),
    center: new ConceptLink("head"),
    archetype: "trailblazer",
    strength: "freedom",
    integration: new ConceptLink("func5w6"),
    retreat: new ConceptLink("func1w9"),
}

// Enneagram type 8

export const func8 : GutType = {
    code: "8",
    type : "coreType",
    archetype: "challenger",
    strength: "embodiment",
    center: new ConceptLink("gut"),
    agent: new ConceptLink("id"),
    reaction: new ConceptLink("reactive"),
    relation: new ConceptLink("rejection"),
    socializing: new ConceptLink("assertive"),
    integration: new ConceptLink("func2"),
    retreat: new ConceptLink("func5"),
}

export const func8w7 : WingedGutType = {
    code: "8w7",
    type : "wingedType",
    core: new ConceptLink("func8"),
    wing: new ConceptLink("func7"),
    center: new ConceptLink("gut"),
    archetype: "maverick",
    strength: "power",
    integration: new ConceptLink("func2w3"),
    retreat: new ConceptLink("func5w6"),
}

export const func8w9 : WingedGutType = {
    code: "8w9",
    type : "wingedType",
    core: new ConceptLink("func8"),
    wing: new ConceptLink("func9"),
    center: new ConceptLink("gut"),
    archetype: "sovereign",
    strength: "presence",
    integration: new ConceptLink("func2w1"),
    retreat: new ConceptLink("func5w4"),
}

// Enneagram type 9

export const func9 : GutType = {
    code: "9",
    type : "coreType",
    archetype: "peacemaker",
    strength: "serenity",
    center: new ConceptLink("gut"),
    agent: new ConceptLink("ego"),
    reaction: new ConceptLink("avoidant"),
    relation: new ConceptLink("attachment"),
    socializing: new ConceptLink("internal"),
    integration: new ConceptLink("func3"),
    retreat: new ConceptLink("func6"),
}

export const func9w8 : WingedGutType = {
    code: "9w8",
    type : "wingedType",
    core: new ConceptLink("func9"),
    wing: new ConceptLink("func8"),
    center: new ConceptLink("gut"),
    archetype: "arbiter",
    strength: "peace",
    integration: new ConceptLink("func3w4"),
    retreat: new ConceptLink("func6w7"),
}

export const func9w1 : WingedGutType = {
    code: "9w1",
    type : "wingedType",
    core: new ConceptLink("func9"),
    wing: new ConceptLink("func1"),
    center: new ConceptLink("gut"),
    archetype: "mediator",
    strength: "harmony",
    integration: new ConceptLink("func3w2"),
    retreat: new ConceptLink("func6w5"),
}