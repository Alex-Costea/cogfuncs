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
}

export type HeartType = CoreType & {name : HeartNumbers}
export type HeadType = CoreType & {name : HeadNumbers}
export type GutType = CoreType & {name : GutNumbers}

// winged types

interface WingedType {
    core: Link<TypeOptions>
    wing: Link<TypeOptions>
    archetype: string
    strength : string
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
