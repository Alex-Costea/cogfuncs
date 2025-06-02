import Link from "../types/Link.ts"

// Center

type CenterOptions = "head" | "heart" | "gut"

export interface Center {
    name: CenterOptions
    emotion: "shame" | "fear" | "anger"
    desire: "significance" | "security" | "autonomy"
}

// Agent

type AgentOptions = "id" | "ego" | "superego"

export interface Agent {
    name: AgentOptions
}

// Reaction

type ReactionOptions = "reactive" | "avoidant" | "metabolizing"

export interface Reaction {
    name: ReactionOptions
}

//Relation styles

type RelationOptions = "rejection" | "attachment" | "frustration"

export interface Relation{
    name : RelationOptions
}

// Core types

type HeartNumbers = "2" | "3" | "4"
type HeartTypeOptions = `type${HeartNumbers}`
type HeadNumbers = "5" | "6" | "7"
type HeadTypeOptions = `type${HeadNumbers}`
type GutNumbers = "8" | "9" | "1"
type GutTypeOptions = `type${GutNumbers}`

type EnneagramNumber = HeartNumbers | HeadNumbers | GutNumbers
type TypeOptions = `type${EnneagramNumber}`


interface CoreType{
    name : EnneagramNumber
    archetype: string
    center: Link<CenterOptions>
    agent: Link<AgentOptions>
    reaction: Link<ReactionOptions>
    relation: Link<RelationOptions>
    integration: Link<TypeOptions>
}

export type HeartType = CoreType & {name : HeartNumbers}
export type HeadType = CoreType & {name : HeadNumbers}
export type GutType = CoreType & {name : GutNumbers}

// winged types

export type WingedNumbers = "1w9" | "1w2" | "2w1" | "2w3" | "3w2" | "3w4" | "4w3" | "4w5" | "5w4" | "5w6" | "6w5" |
    "6w7" | "7w6" | "7w8" | "8w7" | "8w9" | "9w8" | "9w1"

export type WingedOptions = `type${WingedNumbers}`

interface WingedType {
    name : WingedNumbers
    core: Link<TypeOptions>
    wing: Link<TypeOptions>
    archetype: string
    strength : string
    integration: Link<WingedOptions>
}

export type WingedHeartType = WingedType & {core : Link<HeartTypeOptions>}
export type WingedHeadType = WingedType & {core : Link<HeadTypeOptions>}
export type WingedGutType = WingedType & {core : Link<GutTypeOptions>}

// tri fixes
type TriFix = {
    heart : WingedHeartType
    head : WingedHeadType
    gut : WingedGutType
}

// enneagram

export type Psyche = {
    core: TriFix
    center: Center
}
