import Link from "../types/Link.ts";
import {Agent, Center, GutType, HeadType, HeartType, Reaction, WingedType} from "../types/enneagramTypes.ts";

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

export const id : Agent = { name: "id" }
export const ego : Agent = { name: "ego" }
export const superego : Agent = { name: "superego" }

// Reaction style

export const reactive : Reaction = {name: "reactive"}
export const avoidant : Reaction = {name : "avoidant"}
export const metabolizing : Reaction = {name : "metabolizing"}


//export const 1

export const type1 : GutType = {
    name: "1",
    archetype: "reformer",
    center: new Link("gut"),
    agent: new Link("superego"),
    reaction: new Link("metabolizing")
}

export const type1w9 : WingedType= {
    core: new Link("type1"),
    wing: new Link("type9"),
    archetype: "idealist"
}

export const type1w2 : WingedType= {
    core: new Link("type1"),
    wing: new Link("type2"),
    archetype: "advocate"
}

// export const 2

export const type2 : HeartType = {
    name: "2",
    archetype: "helper",
    center: new Link("heart"),
    agent: new Link("superego"),
    reaction: new Link("avoidant")
}

export const type2w1 : WingedType = {
    core: new Link("type2"),
    wing: new Link("type1"),
    archetype: "caretaker"
}

export const type2w3 : WingedType = {
    core: new Link("type2"),
    wing: new Link("type3"),
    archetype: "host"
}

//export const 3

export const type3 : HeartType = {
    name: "3",
    archetype: "performer",
    center: new Link("heart"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing")
}

export const type3w2 : WingedType = {
    core: new Link("type3"),
    wing: new Link("type2"),
    archetype: "motivator"
}

export const type3w4 : WingedType = {
    core: new Link("type3"),
    wing: new Link("type4"),
    archetype: "professional"
}

// export const 4

export const type4 : HeartType = {
    name: "4",
    archetype: "romantic",
    center: new Link("heart"),
    agent: new Link("id"),
    reaction: new Link("reactive")
}

export const type4w3 : WingedType = {
    core: new Link("type4"),
    wing: new Link("type3"),
    archetype: "auteur"
}

export const type4w5 : WingedType = {
    core: new Link("type4"),
    wing: new Link("type5"),
    archetype: "mystic"
}

export const type5 : HeadType = {
    name: "5",
    archetype: "observer",
    center: new Link("head"),
    agent: new Link("ego"),
    reaction: new Link("metabolizing")
}

export const type5w4 : WingedType = {
    core: new Link("type5"),
    wing: new Link("type4"),
    archetype: "philosopher"
}

export const type5w6 : WingedType = {
    core: new Link("type5"),
    wing: new Link("type6"),
    archetype: "strategist"
}

// export const 6

export const type6 : HeadType = {
    name: "6",
    archetype: "loyalist",
    center : new Link("head"),
    agent: new Link("superego"),
    reaction: new Link("reactive"),
}

export const type6w5 : WingedType = {
    core: new Link("type6"),
    wing: new Link("type5"),
    archetype: "skeptic"
}

export const type6w7 : WingedType = {
    core: new Link("type6"),
    wing: new Link("type7"),
    archetype: "buddy"
}

// export const 7

export const type7 : HeadType = {
    name: "7",
    archetype: "enthusiast",
    center: new Link("head"),
    agent: new Link("id"),
    reaction: new Link("avoidant")
}

export const type7w6 : WingedType = {
    core: new Link("type7"),
    wing: new Link("type6"),
    archetype: "entertainer"
}

export const type7w8 : WingedType = {
    core: new Link("type7"),
    wing: new Link("type8"),
    archetype: "trailblazer"
}

// export const 8

export const type8 : GutType = {
    name: "8",
    archetype: "challenger",
    center: new Link("gut"),
    agent: new Link("id"),
    reaction: new Link("reactive")
}

export const type8w7 : WingedType = {
    core: new Link("type8"),
    wing: new Link("type7"),
    archetype: "maverick"
}

export const type8w9 : WingedType = {
    core: new Link("type8"),
    wing: new Link("type9"),
    archetype: "bear"
}

// export const 9

export const type9 : GutType = {
    name: "9",
    archetype: "peacemaker",
    center: new Link("gut"),
    agent: new Link("ego"),
    reaction: new Link("avoidant")
}

export const type9w8 : WingedType = {
    core: new Link("type9"),
    wing: new Link("type8"),
    archetype: "referee"
}

export const type9w1 : WingedType = {
    core: new Link("type9"),
    wing: new Link("type1"),
    archetype: "mediator"
}

export const dataMap = {
    // centers
    heart,
    head,
    gut,

    // freudian agents
    id,
    ego,
    superego,

    // reactions
    reactive,
    avoidant,
    metabolizing,

    // types
    type1,
    type2,
    type3,
    type4,
    type5,
    type6,
    type7,
    type8,
    type9,

    // winged types
    type1w9,
    type1w2,
    type2w1,
    type2w3,
    type3w2,
    type3w4,
    type4w3,
    type4w5,
    type5w4,
    type5w6,
    type6w5,
    type6w7,
    type7w6,
    type7w8,
    type8w7,
    type8w9,
    type9w8,
    type9w1,
}
