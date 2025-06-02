import Link from "../types/Link.ts"

// Center

type CenterOptions = "head" | "heart" | "gut"

export interface Center {
    name: CenterOptions
    emotion: "shame" | "fear" | "anger"
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

export type WingedOptions = "type1w9" | "type1w2" | "type2w1" | "type2w3" | "type3w2" | "type3w4" | "type4w3" |
    "type4w5" | "type5w4" | "type5w6" | "type6w5" | "type6w7" | "type7w6" | "type7w8" | "type8w7" | "type8w9" |
    "type9w8" | "type9w1"

interface WingedType {
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
