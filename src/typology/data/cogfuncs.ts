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
    dominant: new ConceptLink("Ti")
}

export const TeDom : DomType ={
    name: "TeDom",
    dominant: new ConceptLink("Te")
}

export const FiDom : DomType ={
    name: "FiDom",
    dominant: new ConceptLink("Fi")
}

export const FeDom : DomType ={
    name: "FeDom",
    dominant: new ConceptLink("Fe")
}

export const SiDom : DomType ={
    name: "SiDom",
    dominant: new ConceptLink("Si")
}

export const SeDom : DomType ={
    name: "SeDom",
    dominant: new ConceptLink("Se")
}

export const NiDom : DomType ={
    name: "NiDom",
    dominant: new ConceptLink("Ni")
}

export const NeDom : DomType ={
    name: "NeDom",
    dominant: new ConceptLink("Ne")
}

export const TiNe : CogStack ={
    name: "TiNe",
    mbtiEquivalent: "INTP",
    core: new ConceptLink("TiDom"),
    secondary: new ConceptLink("Ne"),
    tertiary: new ConceptLink("Si"),
    inferior: new ConceptLink("Fe"),
    shadow: new ConceptLink("TeNi"),
    orientationShift: new ConceptLink("NeTi"),
    attitudeShift: new ConceptLink("NiTe"),
    thinkFeelShift: new ConceptLink("FiNe"),
    senseIntuitShift: new ConceptLink("TiSe"),
    mostDistant: new ConceptLink("FeSi"),
}

export const TiSe : CogStack ={
    name: "TiSe",
    mbtiEquivalent: "ISTP",
    core: new ConceptLink("TiDom"),
    secondary: new ConceptLink("Se"),
    tertiary: new ConceptLink("Ni"),
    inferior: new ConceptLink("Fe"),
    shadow: new ConceptLink("TeSi"),
    orientationShift: new ConceptLink("SeTi"),
    attitudeShift: new ConceptLink("SiTe"),
    thinkFeelShift: new ConceptLink("FiSe"),
    senseIntuitShift: new ConceptLink("TiNe"),
    mostDistant: new ConceptLink("FeNi"),

}

export const TeNi : CogStack ={
    name: "TeNi",
    mbtiEquivalent: "ENTJ",
    core: new ConceptLink("TeDom"),
    secondary: new ConceptLink("Ni"),
    tertiary: new ConceptLink("Se"),
    inferior: new ConceptLink("Fi"),
    shadow: new ConceptLink("TiNe"),
    orientationShift: new ConceptLink("NiTe"),
    attitudeShift: new ConceptLink("NeTi"),
    thinkFeelShift: new ConceptLink("FeNi"),
    senseIntuitShift: new ConceptLink("TeSi"),
    mostDistant: new ConceptLink("FiSe"),
}

export const TeSi : CogStack ={
    name: "TeSi",
    mbtiEquivalent: "ESTJ",
    core: new ConceptLink("TeDom"),
    secondary: new ConceptLink("Si"),
    tertiary: new ConceptLink("Ne"),
    inferior: new ConceptLink("Fi"),
    shadow: new ConceptLink("TiSe"),
    orientationShift: new ConceptLink("SiTe"),
    attitudeShift: new ConceptLink("SeTi"),
    thinkFeelShift: new ConceptLink("FeSi"),
    senseIntuitShift: new ConceptLink("TeNi"),
    mostDistant: new ConceptLink("FiNe"),
}

export const FiNe : CogStack ={
    name: "FiNe",
    mbtiEquivalent: "INFP",
    core: new ConceptLink("FiDom"),
    secondary: new ConceptLink("Ne"),
    tertiary: new ConceptLink("Si"),
    inferior: new ConceptLink("Te"),
    shadow: new ConceptLink("FeNi"),
    orientationShift: new ConceptLink("NeFi"),
    attitudeShift: new ConceptLink("NiFe"),
    thinkFeelShift: new ConceptLink("TiNe"),
    senseIntuitShift: new ConceptLink("FiSe"),
    mostDistant: new ConceptLink("TeSi"),
}

export const FiSe : CogStack ={
    name: "FiSe",
    mbtiEquivalent: "ISFP",
    core: new ConceptLink("FiDom"),
    secondary: new ConceptLink("Se"),
    tertiary: new ConceptLink("Ni"),
    inferior: new ConceptLink("Te"),
    shadow: new ConceptLink("FeSi"),
    orientationShift: new ConceptLink("SeFi"),
    attitudeShift: new ConceptLink("SiFe"),
    thinkFeelShift: new ConceptLink("TiSe"),
    senseIntuitShift: new ConceptLink("FiNe"),
    mostDistant: new ConceptLink("TeNi"),
}

export const FeNi : CogStack ={
    name: "FeNi",
    mbtiEquivalent: "ENFJ",
    core: new ConceptLink("FeDom"),
    secondary: new ConceptLink("Ni"),
    tertiary: new ConceptLink("Se"),
    inferior: new ConceptLink("Ti"),
    shadow: new ConceptLink("FiNe"),
    orientationShift: new ConceptLink("NiFe"),
    attitudeShift: new ConceptLink("NeFi"),
    thinkFeelShift: new ConceptLink("TeNi"),
    senseIntuitShift: new ConceptLink("FeSi"),
    mostDistant: new ConceptLink("TiSe"),
}

export const FeSi : CogStack ={
    name: "FeSi",
    mbtiEquivalent: "ESFJ",
    core: new ConceptLink("FeDom"),
    secondary: new ConceptLink("Si"),
    tertiary: new ConceptLink("Ne"),
    inferior: new ConceptLink("Ti"),
    shadow: new ConceptLink("FiSe"),
    orientationShift: new ConceptLink("SiFe"),
    attitudeShift: new ConceptLink("SeFi"),
    thinkFeelShift: new ConceptLink("TeSi"),
    senseIntuitShift: new ConceptLink("FeNi"),
    mostDistant: new ConceptLink("TiNe"),
}

export const SiTe : CogStack ={
    name: "SiTe",
    mbtiEquivalent: "ISTJ",
    core: new ConceptLink("SiDom"),
    secondary: new ConceptLink("Te"),
    tertiary: new ConceptLink("Fi"),
    inferior: new ConceptLink("Ne"),
    shadow: new ConceptLink("SeTi"),
    orientationShift: new ConceptLink("TeSi"),
    attitudeShift: new ConceptLink("TiSe"),
    thinkFeelShift: new ConceptLink("SiFe"),
    senseIntuitShift: new ConceptLink("NiTe"),
    mostDistant: new ConceptLink("NeFi"),
}

export const SiFe : CogStack ={
    name: "SiFe",
    mbtiEquivalent: "ISFJ",
    core: new ConceptLink("SiDom"),
    secondary: new ConceptLink("Fe"),
    tertiary: new ConceptLink("Ti"),
    inferior: new ConceptLink("Ne"),
    shadow: new ConceptLink("SeFi"),
    orientationShift: new ConceptLink("FeSi"),
    attitudeShift: new ConceptLink("FiSe"),
    thinkFeelShift: new ConceptLink("SiTe"),
    senseIntuitShift: new ConceptLink("NiFe"),
    mostDistant: new ConceptLink("NeTi"),
}

export const SeTi : CogStack ={
    name: "SeTi",
    mbtiEquivalent: "ESTP",
    core: new ConceptLink("SeDom"),
    secondary: new ConceptLink("Ti"),
    tertiary: new ConceptLink("Fe"),
    inferior: new ConceptLink("Ni"),
    shadow: new ConceptLink("SiTe"),
    orientationShift: new ConceptLink("TiSe"),
    attitudeShift: new ConceptLink("TeSi"),
    thinkFeelShift: new ConceptLink("SeFi"),
    senseIntuitShift: new ConceptLink("NeTi"),
    mostDistant: new ConceptLink("NiFe"),
}

export const SeFi : CogStack ={
    name: "SeFi",
    mbtiEquivalent: "ESFP",
    core: new ConceptLink("SeDom"),
    secondary: new ConceptLink("Fi"),
    tertiary: new ConceptLink("Te"),
    inferior: new ConceptLink("Ni"),
    shadow: new ConceptLink("SiFe"),
    orientationShift: new ConceptLink("FiSe"),
    attitudeShift: new ConceptLink("FeSi"),
    thinkFeelShift: new ConceptLink("SeTi"),
    senseIntuitShift: new ConceptLink("NeFi"),
    mostDistant: new ConceptLink("NiTe"),
}

export const NiTe : CogStack ={
    name: "NiTe",
    mbtiEquivalent: "INTJ",
    core: new ConceptLink("NiDom"),
    secondary: new ConceptLink("Te"),
    tertiary: new ConceptLink("Fi"),
    inferior: new ConceptLink("Se"),
    shadow: new ConceptLink("NeTi"),
    orientationShift: new ConceptLink("TeNi"),
    attitudeShift: new ConceptLink("TiNe"),
    thinkFeelShift: new ConceptLink("NiFe"),
    senseIntuitShift: new ConceptLink("SiTe"),
    mostDistant: new ConceptLink("SeFi"),
}

export const NiFe : CogStack ={
    name: "NiFe",
    mbtiEquivalent: "INFJ",
    core: new ConceptLink("NiDom"),
    secondary: new ConceptLink("Fe"),
    tertiary: new ConceptLink("Ti"),
    inferior: new ConceptLink("Se"),
    shadow: new ConceptLink("NeFi"),
    orientationShift: new ConceptLink("FeNi"),
    attitudeShift: new ConceptLink("FiNe"),
    thinkFeelShift: new ConceptLink("NiTe"),
    senseIntuitShift: new ConceptLink("SiFe"),
    mostDistant: new ConceptLink("SeTi"),
}

export const NeTi : CogStack ={
    name: "NeTi",
    mbtiEquivalent: "ENTP",
    core: new ConceptLink("NeDom"),
    secondary: new ConceptLink("Ti"),
    tertiary: new ConceptLink("Fe"),
    inferior: new ConceptLink("Si"),
    shadow: new ConceptLink("NiTe"),
    orientationShift: new ConceptLink("TiNe"),
    attitudeShift: new ConceptLink("TeNi"),
    thinkFeelShift: new ConceptLink("NeFi"),
    senseIntuitShift: new ConceptLink("SeTi"),
    mostDistant: new ConceptLink("SiFe"),
}

export const NeFi : CogStack ={
    name: "NeFi",
    mbtiEquivalent: "ENFP",
    core: new ConceptLink("NeDom"),
    secondary: new ConceptLink("Fi"),
    tertiary: new ConceptLink("Te"),
    inferior: new ConceptLink("Si"),
    shadow: new ConceptLink("NiFe"),
    orientationShift: new ConceptLink("FiNe"),
    attitudeShift: new ConceptLink("FeNi"),
    thinkFeelShift: new ConceptLink("NeTi"),
    senseIntuitShift: new ConceptLink("SeFi"),
    mostDistant: new ConceptLink("SiTe"),
}