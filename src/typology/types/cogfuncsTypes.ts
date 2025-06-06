import ConceptLink from "./ConceptLink.ts";

type OrientationOptions = "Inward" | "Outward"

export interface Orientation{
    name : OrientationOptions
}

type EpistemologyOptions = "Classical" | "Bayesian"

export interface Epistemology{
    name : EpistemologyOptions
}

type AttitudeOptions = "Judging" | "Perceiving"

export interface Attitude{
    name : AttitudeOptions
}

type CogFuncOptions = "Ti" | "Te" | "Fi" | "Fe" | "Si" | "Se" | "Ni" | "Ne"

export interface CogFunc{
    name : CogFuncOptions
    orientation : ConceptLink<OrientationOptions>
    epistemology : ConceptLink<EpistemologyOptions>
    attitude : ConceptLink<AttitudeOptions>
}

type CogFuncDomOptions = `${CogFuncOptions}Dom`

export interface DomType{
    name : CogFuncDomOptions
    core: ConceptLink<CogFuncOptions>
}

type CogStackOptions = "TiNe" | "TiSe" | "TeNi" | "TeSi" |
    "FiNe" | "FiSe" | "FeNi" | "FeSi" |
    "SiTe" | "SiFe" | "SeTi" | "SeFi" |
    "NiTe" | "NiFe" | "NeTi" | "NeFi"

type mbtiOptions = "INTP" | "ISTP" | "ENTJ" | "ESTJ" |
    "INFP" | "ISFP" | "ENFJ" | "ESFJ" |
    "ISTJ" | "ISFJ" | "ESTP" | "ESFP" |
    "INTJ" | "INFJ" | "ENTP" | "ENFP"


export interface CogStack{
    name: CogStackOptions
    mbtiEquivalent : mbtiOptions
    archetype : string
    parentType: ConceptLink<CogFuncDomOptions>
    dominant: ConceptLink<CogFuncOptions>
    secondary: ConceptLink<CogFuncOptions>
    tertiary: ConceptLink<CogFuncOptions>
    inferior: ConceptLink<CogFuncOptions>
    shadow: ConceptLink<CogStackOptions>
    orientationShift: ConceptLink<CogStackOptions>
    attitudeShift: ConceptLink<CogStackOptions>
    thinkFeelShift: ConceptLink<CogStackOptions>
    senseIntuitShift: ConceptLink<CogStackOptions>
    mostDistant: ConceptLink<CogStackOptions>
}