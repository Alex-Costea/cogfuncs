// center names
export type heart = {
    name : "heart",
    emotion: "shame"
}

export type head = {
    name : "head",
    emotion: "fear"
}

export type gut = {
    name : "gut",
    emotion: "anger"
}

// Freudian agents

type id = { name: "id" }
type ego = { name: "ego" }
type superego = { name: "superego" }

// Reaction style

type reactive = {name: "reactive"}
type avoidant = {name : "avoidant"}
type metabolizing = {name : "metabolizing"}


//type 1

export type type1 = {
    name: "1",
    archetype: "reformer",
    center: gut
    agent: superego
    reaction: metabolizing
}

export type type1w9 = {
    core: type1
    wing: type9
    archetype: "idealist"
}

export type type1w2 = {
    core: type1
    wing: type2
    archetype: "advocate"
}

// type 2

export type type2 = {
    name: "2",
    archetype: "helper"
    center: heart
    agent: superego
    reaction: avoidant
}

export type type2w1 = {
    core: type2
    wing: type1
    archetype: "caretaker"
}

export type type2w3 = {
    core: type2
    wing: type3
    archetype: "host"
}

//type 3

export type type3 = {
    name: "3",
    archetype: "performer"
    center: heart
    agent: ego
    reaction: metabolizing
}

export type type3w2 = {
    core: type3
    wing: type2
    archetype: "motivator"
}

export type type3w4 = {
    core: type3
    wing: type4
    archetype: "professional"
}

// type 4

export type type4 = {
    name: "4",
    archetype: "romantic"
    center: heart
    agent: id
    reaction: reactive
}

export type type4w3 = {
    core: type4
    wing: type3
    archetype: "auteur"
}

export type type4w5 = {
    core: type4
    wing: type5
    archetype: "mystic"
}

export type type5 = {
    name: "5",
    archetype: "observer"
    center: head
    agent: superego
    reaction: metabolizing
}

export type type5w4 = {
    core: type5
    wing: type4
    archetype: "philosopher"
}

export type type5w6 = {
    core: type5
    wing: type6
    archetype: "strategist"
}

// type 6

export type type6 = {
    name: "6",
    archetype: "loyalist"
    center : head
    agent: ego
    reaction: reactive
}

export type type6w5 = {
    core: type6
    wing: type5
    archetype: "skeptic"
}

export type type6w7 = {
    core: type6
    wing: type7
    archetype: "buddy"
}

// type 7

export type type7 = {
    name: "7",
    archetype: "enthusiast"
    center: head
    agent: id
    reaction: avoidant
}

export type type7w6 = {
    core: type7
    wing: type6
    archetype: "entertainer"
}

export type type7w8 = {
    core: type7
    wing: type8
    archetype: "trailblazer"
}

// type 8

export type type8 = {
    name: "8",
    archetype: "challenger"
    center: gut
    agent: id
    reaction: reactive
}

export type type8w7 = {
    core: type8
    wing: type7
    archetype: "maverick"
}

export type type8w9 = {
    core: type8
    wing: type9
    archetype: "bear"
}

// type 9

export type type9 = {
    name: "9",
    archetype: "peacemaker"
    center: gut
    agent: ego
    reaction: avoidant
}

export type type9w8 = {
    core: type9
    wing: type8
    archetype: "referee"
}

export type type9w1 = {
    core: type9
    wing: type1
    archetype: "mediator"
}