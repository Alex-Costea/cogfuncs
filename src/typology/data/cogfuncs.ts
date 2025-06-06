import {Attitude, CogFunc, CogStack, DomType, Epistemology, Orientation} from "../types/cogfuncsTypes.ts";
import ConceptLink from "../types/ConceptLink.ts";

export const Inward : Orientation ={
    name : "Inward"
}

export const Outward : Orientation={
    name: "Outward"
}

export const Classical : Epistemology={
    name: "Classical"
}

export const Bayesian : Epistemology ={
    name: "Bayesian"
}

export const Judging : Attitude={
    name: "Judging"
}

export const Perceiving : Attitude={
    name: "Perceiving"
}

export const Ti : CogFunc={
    name: "Ti",
    orientation: new ConceptLink("Inward"),
    epistemology: new ConceptLink("Classical"),
    attitude: new ConceptLink("Judging")
}

export const Te: CogFunc = {
    name: "Te",
    orientation: new ConceptLink("Outward"),
    epistemology: new ConceptLink("Classical"),
    attitude: new ConceptLink("Judging")
}

export const Fi: CogFunc = {
    name: "Fi",
    orientation: new ConceptLink("Inward"),
    epistemology: new ConceptLink("Bayesian"),
    attitude: new ConceptLink("Judging")
}

export const Fe: CogFunc = {
    name: "Fe",
    orientation: new ConceptLink("Outward"),
    epistemology: new ConceptLink("Bayesian"),
    attitude: new ConceptLink("Judging")
}

export const Si: CogFunc = {
    name: "Si",
    orientation: new ConceptLink("Inward"),
    epistemology: new ConceptLink("Classical"),
    attitude: new ConceptLink("Perceiving")
}

export const Se: CogFunc = {
    name: "Se",
    orientation: new ConceptLink("Outward"),
    epistemology: new ConceptLink("Classical"),
    attitude: new ConceptLink("Perceiving")
}

export const Ni: CogFunc = {
    name: "Ni",
    orientation: new ConceptLink("Inward"),
    epistemology: new ConceptLink("Bayesian"),
    attitude: new ConceptLink("Perceiving")
}

export const Ne: CogFunc = {
    name: "Ne",
    orientation: new ConceptLink("Outward"),
    epistemology: new ConceptLink("Bayesian"),
    attitude: new ConceptLink("Perceiving")
}

export const TiDom : DomType ={
    name: "TiDom",
    core: new ConceptLink("Ti")
}

export const TeDom : DomType ={
    name: "TeDom",
    core: new ConceptLink("Te")
}

export const FiDom : DomType ={
    name: "FiDom",
    core: new ConceptLink("Fi")
}

export const FeDom : DomType ={
    name: "FeDom",
    core: new ConceptLink("Fe")
}

export const SiDom : DomType ={
    name: "SiDom",
    core: new ConceptLink("Si")
}

export const SeDom : DomType ={
    name: "SeDom",
    core: new ConceptLink("Se")
}

export const NiDom : DomType ={
    name: "NiDom",
    core: new ConceptLink("Ni")
}

export const NeDom : DomType ={
    name: "NeDom",
    core: new ConceptLink("Ne")
}

export const stackTiNe : CogStack ={
    name: "Ti-Ne",
    mbtiEquivalent: "INTP",
    archetype: "modeler",
    parentType: new ConceptLink("TiDom"),
    dominant: new ConceptLink("Ti"),
    secondary: new ConceptLink("Ne"),
    tertiary: new ConceptLink("Si"),
    inferior: new ConceptLink("Fe"),
    shadow: new ConceptLink("stackTeNi"),
    orientationShift: new ConceptLink("stackNeTi"),
    attitudeShift: new ConceptLink("stackNiTe"),
    thinkFeelShift: new ConceptLink("stackFiNe"),
    senseIntuitShift: new ConceptLink("stackTiSe"),
    mostDistant: new ConceptLink("stackFeSi"),
}

export const stackTiSe : CogStack ={
    name: "Ti-Se",
    mbtiEquivalent: "ISTP",
    archetype: "agent",
    parentType: new ConceptLink("TiDom"),
    dominant: new ConceptLink("Ti"),
    secondary: new ConceptLink("Se"),
    tertiary: new ConceptLink("Ni"),
    inferior: new ConceptLink("Fe"),
    shadow: new ConceptLink("stackTeSi"),
    orientationShift: new ConceptLink("stackSeTi"),
    attitudeShift: new ConceptLink("stackSiTe"),
    thinkFeelShift: new ConceptLink("stackFiSe"),
    senseIntuitShift: new ConceptLink("stackTiNe"),
    mostDistant: new ConceptLink("stackFeNi"),
}

export const stackTeNi : CogStack ={
    name: "Te-Ni",
    mbtiEquivalent: "ENTJ",
    archetype: "commander",
    parentType: new ConceptLink("TeDom"),
    dominant: new ConceptLink("Te"),
    secondary: new ConceptLink("Ni"),
    tertiary: new ConceptLink("Se"),
    inferior: new ConceptLink("Fi"),
    shadow: new ConceptLink("stackTiNe"),
    orientationShift: new ConceptLink("stackNiTe"),
    attitudeShift: new ConceptLink("stackNeTi"),
    thinkFeelShift: new ConceptLink("stackFeNi"),
    senseIntuitShift: new ConceptLink("stackTeSi"),
    mostDistant: new ConceptLink("stackFiSe"),
}

export const stackTeSi : CogStack ={
    name: "Te-Si",
    mbtiEquivalent: "ESTJ",
    archetype: "overseer",
    parentType: new ConceptLink("TeDom"),
    dominant: new ConceptLink("Te"),
    secondary: new ConceptLink("Si"),
    tertiary: new ConceptLink("Ne"),
    inferior: new ConceptLink("Fi"),
    shadow: new ConceptLink("stackTiSe"),
    orientationShift: new ConceptLink("stackSiTe"),
    attitudeShift: new ConceptLink("stackSeTi"),
    thinkFeelShift: new ConceptLink("stackFeSi"),
    senseIntuitShift: new ConceptLink("stackTeNi"),
    mostDistant: new ConceptLink("stackFiNe"),
}

export const stackFiNe : CogStack ={
    name: "Fi-Ne",
    mbtiEquivalent: "INFP",
    archetype: "interpreter",
    parentType: new ConceptLink("FiDom"),
    dominant: new ConceptLink("Fi"),
    secondary: new ConceptLink("Ne"),
    tertiary: new ConceptLink("Si"),
    inferior: new ConceptLink("Te"),
    shadow: new ConceptLink("stackFeNi"),
    orientationShift: new ConceptLink("stackNeFi"),
    attitudeShift: new ConceptLink("stackNiFe"),
    thinkFeelShift: new ConceptLink("stackTiNe"),
    senseIntuitShift: new ConceptLink("stackFiSe"),
    mostDistant: new ConceptLink("stackTeSi"),
}

export const stackFiSe : CogStack ={
    name: "Fi-Se",
    mbtiEquivalent: "ISFP",
    archetype: "tuner",
    parentType: new ConceptLink("FiDom"),
    dominant: new ConceptLink("Fi"),
    secondary: new ConceptLink("Se"),
    tertiary: new ConceptLink("Ni"),
    inferior: new ConceptLink("Te"),
    shadow: new ConceptLink("stackFeSi"),
    orientationShift: new ConceptLink("stackSeFi"),
    attitudeShift: new ConceptLink("stackSiFe"),
    thinkFeelShift: new ConceptLink("stackTiSe"),
    senseIntuitShift: new ConceptLink("stackFiNe"),
    mostDistant: new ConceptLink("stackTeNi"),
}

export const stackFeNi : CogStack ={
    name: "Fe-Ni",
    mbtiEquivalent: "ENFJ",
    archetype: "orchestrator",
    parentType: new ConceptLink("FeDom"),
    dominant: new ConceptLink("Fe"),
    secondary: new ConceptLink("Ni"),
    tertiary: new ConceptLink("Se"),
    inferior: new ConceptLink("Ti"),
    shadow: new ConceptLink("stackFiNe"),
    orientationShift: new ConceptLink("stackNiFe"),
    attitudeShift: new ConceptLink("stackNeFi"),
    thinkFeelShift: new ConceptLink("stackTeNi"),
    senseIntuitShift: new ConceptLink("stackFeSi"),
    mostDistant: new ConceptLink("stackTiSe"),
}

export const stackFeSi : CogStack ={
    name: "Fe-Si",
    mbtiEquivalent: "ESFJ",
    archetype: "emissary",
    parentType: new ConceptLink("FeDom"),
    dominant: new ConceptLink("Fe"),
    secondary: new ConceptLink("Si"),
    tertiary: new ConceptLink("Ne"),
    inferior: new ConceptLink("Ti"),
    shadow: new ConceptLink("stackFiSe"),
    orientationShift: new ConceptLink("stackSiFe"),
    attitudeShift: new ConceptLink("stackSeFi"),
    thinkFeelShift: new ConceptLink("stackTeSi"),
    senseIntuitShift: new ConceptLink("stackFeNi"),
    mostDistant: new ConceptLink("stackTiNe"),
}

export const stackSiTe : CogStack ={
    name: "Si-Te",
    mbtiEquivalent: "ISTJ",
    archetype: "implementer",
    parentType: new ConceptLink("SiDom"),
    dominant: new ConceptLink("Si"),
    secondary: new ConceptLink("Te"),
    tertiary: new ConceptLink("Fi"),
    inferior: new ConceptLink("Ne"),
    shadow: new ConceptLink("stackSeTi"),
    orientationShift: new ConceptLink("stackTeSi"),
    attitudeShift: new ConceptLink("stackTiSe"),
    thinkFeelShift: new ConceptLink("stackSiFe"),
    senseIntuitShift: new ConceptLink("stackNiTe"),
    mostDistant: new ConceptLink("stackNeFi"),
}

export const stackSiFe : CogStack ={
    name: "Si-Fe",
    mbtiEquivalent: "ISFJ",
    archetype: "custodian",
    parentType: new ConceptLink("SiDom"),
    dominant: new ConceptLink("Si"),
    secondary: new ConceptLink("Fe"),
    tertiary: new ConceptLink("Ti"),
    inferior: new ConceptLink("Ne"),
    shadow: new ConceptLink("stackSeFi"),
    orientationShift: new ConceptLink("stackFeSi"),
    attitudeShift: new ConceptLink("stackFiSe"),
    thinkFeelShift: new ConceptLink("stackSiTe"),
    senseIntuitShift: new ConceptLink("stackNiFe"),
    mostDistant: new ConceptLink("stackNeTi"),
}

export const stackSeTi : CogStack ={
    name: "Se-Ti",
    mbtiEquivalent: "ESTP",
    archetype: "striker",
    parentType: new ConceptLink("SeDom"),
    dominant: new ConceptLink("Se"),
    secondary: new ConceptLink("Ti"),
    tertiary: new ConceptLink("Fe"),
    inferior: new ConceptLink("Ni"),
    shadow: new ConceptLink("stackSiTe"),
    orientationShift: new ConceptLink("stackTiSe"),
    attitudeShift: new ConceptLink("stackTeSi"),
    thinkFeelShift: new ConceptLink("stackSeFi"),
    senseIntuitShift: new ConceptLink("stackNeTi"),
    mostDistant: new ConceptLink("stackNiFe"),
}

export const stackSeFi : CogStack ={
    name: "Se-Fi",
    mbtiEquivalent: "ESFP",
    archetype: "emoter",
    parentType: new ConceptLink("SeDom"),
    dominant: new ConceptLink("Se"),
    secondary: new ConceptLink("Fi"),
    tertiary: new ConceptLink("Te"),
    inferior: new ConceptLink("Ni"),
    shadow: new ConceptLink("stackSiFe"),
    orientationShift: new ConceptLink("stackFiSe"),
    attitudeShift: new ConceptLink("stackFeSi"),
    thinkFeelShift: new ConceptLink("stackSeTi"),
    senseIntuitShift: new ConceptLink("stackNeFi"),
    mostDistant: new ConceptLink("stackNiTe"),
}

export const stackNiTe : CogStack ={
    name: "Ni-Te",
    mbtiEquivalent: "INTJ",
    archetype: "forecaster",
    parentType: new ConceptLink("NiDom"),
    dominant: new ConceptLink("Ni"),
    secondary: new ConceptLink("Te"),
    tertiary: new ConceptLink("Fi"),
    inferior: new ConceptLink("Se"),
    shadow: new ConceptLink("stackNeTi"),
    orientationShift: new ConceptLink("stackTeNi"),
    attitudeShift: new ConceptLink("stackTiNe"),
    thinkFeelShift: new ConceptLink("stackNiFe"),
    senseIntuitShift: new ConceptLink("stackSiTe"),
    mostDistant: new ConceptLink("stackSeFi"),
}

export const stackNiFe : CogStack ={
    name: "Ni-Fe",
    mbtiEquivalent: "INFJ",
    archetype: "seer",
    parentType: new ConceptLink("NiDom"),
    dominant: new ConceptLink("Ni"),
    secondary: new ConceptLink("Fe"),
    tertiary: new ConceptLink("Ti"),
    inferior: new ConceptLink("Se"),
    shadow: new ConceptLink("stackNeFi"),
    orientationShift: new ConceptLink("stackFeNi"),
    attitudeShift: new ConceptLink("stackFiNe"),
    thinkFeelShift: new ConceptLink("stackNiTe"),
    senseIntuitShift: new ConceptLink("stackSiFe"),
    mostDistant: new ConceptLink("stackSeTi"),
}

export const stackNeTi : CogStack ={
    name: "Ne-Ti",
    mbtiEquivalent: "ENTP",
    archetype: "ideator",
    parentType: new ConceptLink("NeDom"),
    dominant: new ConceptLink("Ne"),
    secondary: new ConceptLink("Ti"),
    tertiary: new ConceptLink("Fe"),
    inferior: new ConceptLink("Si"),
    shadow: new ConceptLink("stackNiTe"),
    orientationShift: new ConceptLink("stackTiNe"),
    attitudeShift: new ConceptLink("stackTeNi"),
    thinkFeelShift: new ConceptLink("stackNeFi"),
    senseIntuitShift: new ConceptLink("stackSeTi"),
    mostDistant: new ConceptLink("stackSiFe"),
}

export const stackNeFi : CogStack ={
    name: "Ne-Fi",
    mbtiEquivalent: "ENFP",
    archetype: "evoker",
    parentType: new ConceptLink("NeDom"),
    dominant: new ConceptLink("Ne"),
    secondary: new ConceptLink("Fi"),
    tertiary: new ConceptLink("Te"),
    inferior: new ConceptLink("Si"),
    shadow: new ConceptLink("stackNiFe"),
    orientationShift: new ConceptLink("stackFiNe"),
    attitudeShift: new ConceptLink("stackFeNi"),
    thinkFeelShift: new ConceptLink("stackNeTi"),
    senseIntuitShift: new ConceptLink("stackSeFi"),
    mostDistant: new ConceptLink("stackSiTe"),
}
