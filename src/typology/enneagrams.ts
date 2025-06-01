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

// base types

export type type1 = {
    name: "1",
    archetype: "reformer",
    center: gut
    agent: superego
}

export type type2 = {
    name: "2",
    archetype: "helper"
    center: heart
    agent: superego
}

export type type3 = {
    name: "3",
    archetype: "performer"
    center: heart
    agent: ego
}

export type type4 = {
    name: "4",
    archetype: "romantic"
    center: heart
    agent: id
}

export type type5 = {
    name: "5",
    archetype: "observer"
    center: head
    agent: superego
}

export type type6 = {
    name: "6",
    archetype: "loyalist"
    center : head
    agent: ego
}

export type type7 = {
    name: "7",
    archetype: "enthusiast"
    center: head
    agent: id
}

export type type8 = {
    name: "8",
    archetype: "challenger"
    center: gut
    agent: id
}

export type type9 = {
    name: "9",
    archetype: "peacemaker"
    center: gut
    agent: ego
}