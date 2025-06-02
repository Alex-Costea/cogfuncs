import Link from "../types/Link.ts"

// Center

type CenterOptions = "head" | "heart" | "gut"

export interface Center {
    name: CenterOptions
    emotion: "shame" | "fear" | "anger"
}

type CenterLink = Link<CenterOptions>

// Agent

type AgentOptions = "id" | "ego" | "superego"

export interface Agent {
    name: AgentOptions
}

type AgentLink = Link<AgentOptions>

// Reaction

type ReactionOptions = "reactive" | "avoidant" | "metabolizing"

export interface Reaction {
    name: ReactionOptions
}

type ReactionLink = Link<ReactionOptions>

interface CoreType{
    name : "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    archetype: string
    center: CenterLink
    agent: AgentLink
    reaction: ReactionLink
}

export type HeartType = CoreType & {name : "2" | "3" | "4"}
export type HeadType = CoreType & {name : "5" | "6" | "7"}
export type GutType = CoreType & {name : "8" | "9" | "1"}

type TypeOptions = "type1" | "type2" | "type3" | "type4" | "type5" | "type6" | "type7" | "type8" | "type9"

export interface WingedType {
    core: Link<TypeOptions>
    wing: Link<TypeOptions>
    archetype: string
}
