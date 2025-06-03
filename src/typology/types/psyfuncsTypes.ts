import ConceptLink from "./ConceptLink.ts"

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

// Socializing styles

type SocializingOptions = "compliant" | "assertive" | "internal"

export interface Socializing{
    name : SocializingOptions
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


export type CoreType = {
    code : EnneagramNumber
    type : "coreType"
    archetype: string
    strength : string
    center: ConceptLink<CenterOptions>
    agent: ConceptLink<AgentOptions>
    reaction: ConceptLink<ReactionOptions>
    relation: ConceptLink<RelationOptions>
    socializing: ConceptLink<SocializingOptions>
    integration: ConceptLink<TypeOptions>
    retreat: ConceptLink<TypeOptions>
}

export type HeartType = CoreType & {code : HeartNumbers}
export type HeadType = CoreType & {code : HeadNumbers}
export type GutType = CoreType & {code : GutNumbers}

// Winged types

export type WingedNumbers = "1w9" | "1w2" | "2w1" | "2w3" | "3w2" | "3w4" | "4w3" | "4w5" | "5w4" | "5w6" | "6w5" |
    "6w7" | "7w6" | "7w8" | "8w7" | "8w9" | "9w8" | "9w1"

export type WingedOptions = `type${WingedNumbers}`

export type WingedType = {
    code : WingedNumbers
    type : "wingedType"
    core: ConceptLink<TypeOptions>
    wing: ConceptLink<TypeOptions>
    center: ConceptLink<CenterOptions>
    archetype: string
    strength : string
    integration: ConceptLink<WingedOptions>
    retreat: ConceptLink<WingedOptions>
}

export type WingedHeartType = WingedType & {core : ConceptLink<HeartTypeOptions>}
export type WingedHeadType = WingedType & {core : ConceptLink<HeadTypeOptions>}
export type WingedGutType = WingedType & {core : ConceptLink<GutTypeOptions>}

// Tri fixes

type TriFix = {
    heart : WingedHeartType
    head : WingedHeadType
    gut : WingedGutType
}

// Psyche

export type Psyche = {
    core: TriFix
    center: Center
}

type InstinctOptions = "So" | "Sx" | "Sp"

export interface Instinct {
    name: InstinctOptions
}

type InstinctStackOption = "So/Sx" | "So/Sp" | "Sx/So" | "Sx/Sp" | "Sp/So" | "Sp/Sx"

export interface InstinctStack{
    name: InstinctStackOption
    primary: ConceptLink<InstinctOptions>
    secondary: ConceptLink<InstinctOptions>
}