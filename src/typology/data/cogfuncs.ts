import {Attitude, CogFunc, CogStack, DomType, Epistemology, Orientation} from "../types/cogfuncsTypes.ts";
import Link from "../types/Link.ts";

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
    orientation: new Link("Inward"),
    epistemology: new Link("Classical"),
    attitude: new Link("Judging")
}

export const Te: CogFunc = {
    name: "Te",
    orientation: new Link("Outward"),
    epistemology: new Link("Classical"),
    attitude: new Link("Judging")
}

export const Fi: CogFunc = {
    name: "Fi",
    orientation: new Link("Inward"),
    epistemology: new Link("Bayesian"),
    attitude: new Link("Judging")
}

export const Fe: CogFunc = {
    name: "Fe",
    orientation: new Link("Outward"),
    epistemology: new Link("Bayesian"),
    attitude: new Link("Judging")
}

export const Si: CogFunc = {
    name: "Si",
    orientation: new Link("Inward"),
    epistemology: new Link("Classical"),
    attitude: new Link("Perceiving")
}

export const Se: CogFunc = {
    name: "Se",
    orientation: new Link("Outward"),
    epistemology: new Link("Classical"),
    attitude: new Link("Perceiving")
}

export const Ni: CogFunc = {
    name: "Ni",
    orientation: new Link("Inward"),
    epistemology: new Link("Bayesian"),
    attitude: new Link("Perceiving")
}

export const Ne: CogFunc = {
    name: "Ne",
    orientation: new Link("Outward"),
    epistemology: new Link("Bayesian"),
    attitude: new Link("Perceiving")
}

export const TiDom : DomType ={
    name: "TiDom",
    dominant: new Link("Ti")
}

export const TeDom : DomType ={
    name: "TeDom",
    dominant: new Link("Te")
}

export const FiDom : DomType ={
    name: "FiDom",
    dominant: new Link("Fi")
}

export const FeDom : DomType ={
    name: "FeDom",
    dominant: new Link("Fe")
}

export const SiDom : DomType ={
    name: "SiDom",
    dominant: new Link("Si")
}

export const SeDom : DomType ={
    name: "SeDom",
    dominant: new Link("Se")
}

export const NiDom : DomType ={
    name: "NiDom",
    dominant: new Link("Ni")
}

export const NeDom : DomType ={
    name: "NeDom",
    dominant: new Link("Ne")
}

export const TiNe : CogStack ={
    name: "TiNe",
    mbtiEquivalent: "INTP",
    core: new Link("TiDom"),
    secondary: new Link("Ne"),
    tertiary: new Link("Si"),
    inferior: new Link("Fe"),
    shadow: new Link("TeNi"),
    orientationShift: new Link("NeTi"),
    attitudeShift: new Link("NiTe"),
    thinkFeelShift: new Link("FiNe"),
    senseIntuitShift: new Link("TiSe"),
    mostDistant: new Link("FeSi"),
}

export const TiSe : CogStack ={
    name: "TiSe",
    mbtiEquivalent: "ISTP",
    core: new Link("TiDom"),
    secondary: new Link("Se"),
    tertiary: new Link("Ni"),
    inferior: new Link("Fe"),
    shadow: new Link("TeSi"),
    orientationShift: new Link("SeTi"),
    attitudeShift: new Link("SiTe"),
    thinkFeelShift: new Link("FiSe"),
    senseIntuitShift: new Link("TiNe"),
    mostDistant: new Link("FeNi"),

}

export const TeNi : CogStack ={
    name: "TeNi",
    mbtiEquivalent: "ENTJ",
    core: new Link("TeDom"),
    secondary: new Link("Ni"),
    tertiary: new Link("Se"),
    inferior: new Link("Fi"),
    shadow: new Link("TiNe"),
    orientationShift: new Link("NiTe"),
    attitudeShift: new Link("NeTi"),
    thinkFeelShift: new Link("FeNi"),
    senseIntuitShift: new Link("TeSi"),
    mostDistant: new Link("FiSe"),
}

export const TeSi : CogStack ={
    name: "TeSi",
    mbtiEquivalent: "ESTJ",
    core: new Link("TeDom"),
    secondary: new Link("Si"),
    tertiary: new Link("Ne"),
    inferior: new Link("Fi"),
    shadow: new Link("TiSe"),
    orientationShift: new Link("SiTe"),
    attitudeShift: new Link("SeTi"),
    thinkFeelShift: new Link("FeSi"),
    senseIntuitShift: new Link("TeNi"),
    mostDistant: new Link("FiNe"),
}

export const FiNe : CogStack ={
    name: "FiNe",
    mbtiEquivalent: "INFP",
    core: new Link("FiDom"),
    secondary: new Link("Ne"),
    tertiary: new Link("Si"),
    inferior: new Link("Te"),
    shadow: new Link("FeNi"),
    orientationShift: new Link("NeFi"),
    attitudeShift: new Link("NiFe"),
    thinkFeelShift: new Link("TiNe"),
    senseIntuitShift: new Link("FiSe"),
    mostDistant: new Link("TeSi"),
}

export const FiSe : CogStack ={
    name: "FiSe",
    mbtiEquivalent: "ISFP",
    core: new Link("FiDom"),
    secondary: new Link("Se"),
    tertiary: new Link("Ni"),
    inferior: new Link("Te"),
    shadow: new Link("FeSi"),
    orientationShift: new Link("SeFi"),
    attitudeShift: new Link("SiFe"),
    thinkFeelShift: new Link("TiSe"),
    senseIntuitShift: new Link("FiNe"),
    mostDistant: new Link("TeNi"),
}

export const FeNi : CogStack ={
    name: "FeNi",
    mbtiEquivalent: "ENFJ",
    core: new Link("FeDom"),
    secondary: new Link("Ni"),
    tertiary: new Link("Se"),
    inferior: new Link("Ti"),
    shadow: new Link("FiNe"),
    orientationShift: new Link("NiFe"),
    attitudeShift: new Link("NeFi"),
    thinkFeelShift: new Link("TeNi"),
    senseIntuitShift: new Link("FeSi"),
    mostDistant: new Link("TiSe"),
}

export const FeSi : CogStack ={
    name: "FeSi",
    mbtiEquivalent: "ESFJ",
    core: new Link("FeDom"),
    secondary: new Link("Si"),
    tertiary: new Link("Ne"),
    inferior: new Link("Ti"),
    shadow: new Link("FiSe"),
    orientationShift: new Link("SiFe"),
    attitudeShift: new Link("SeFi"),
    thinkFeelShift: new Link("TeSi"),
    senseIntuitShift: new Link("FeNi"),
    mostDistant: new Link("TiNe"),
}

export const SiTe : CogStack ={
    name: "SiTe",
    mbtiEquivalent: "ISTJ",
    core: new Link("SiDom"),
    secondary: new Link("Te"),
    tertiary: new Link("Fi"),
    inferior: new Link("Ne"),
    shadow: new Link("SeTi"),
    orientationShift: new Link("TeSi"),
    attitudeShift: new Link("TiSe"),
    thinkFeelShift: new Link("SiFe"),
    senseIntuitShift: new Link("NiTe"),
    mostDistant: new Link("NeFi"),
}

export const SiFe : CogStack ={
    name: "SiFe",
    mbtiEquivalent: "ISFJ",
    core: new Link("SiDom"),
    secondary: new Link("Fe"),
    tertiary: new Link("Ti"),
    inferior: new Link("Ne"),
    shadow: new Link("SeFi"),
    orientationShift: new Link("FeSi"),
    attitudeShift: new Link("FiSe"),
    thinkFeelShift: new Link("SiTe"),
    senseIntuitShift: new Link("NiFe"),
    mostDistant: new Link("NeTi"),
}

export const SeTi : CogStack ={
    name: "SeTi",
    mbtiEquivalent: "ESTP",
    core: new Link("SeDom"),
    secondary: new Link("Ti"),
    tertiary: new Link("Fe"),
    inferior: new Link("Ni"),
    shadow: new Link("SiTe"),
    orientationShift: new Link("TiSe"),
    attitudeShift: new Link("TeSi"),
    thinkFeelShift: new Link("SeFi"),
    senseIntuitShift: new Link("NeTi"),
    mostDistant: new Link("NiFe"),
}

export const SeFi : CogStack ={
    name: "SeFi",
    mbtiEquivalent: "ESFP",
    core: new Link("SeDom"),
    secondary: new Link("Fi"),
    tertiary: new Link("Te"),
    inferior: new Link("Ni"),
    shadow: new Link("SiFe"),
    orientationShift: new Link("FiSe"),
    attitudeShift: new Link("FeSi"),
    thinkFeelShift: new Link("SeTi"),
    senseIntuitShift: new Link("NeFi"),
    mostDistant: new Link("NiTe"),
}

export const NiTe : CogStack ={
    name: "NiTe",
    mbtiEquivalent: "INTJ",
    core: new Link("NiDom"),
    secondary: new Link("Te"),
    tertiary: new Link("Fi"),
    inferior: new Link("Se"),
    shadow: new Link("NeTi"),
    orientationShift: new Link("TeNi"),
    attitudeShift: new Link("TiNe"),
    thinkFeelShift: new Link("NiFe"),
    senseIntuitShift: new Link("SiTe"),
    mostDistant: new Link("SeFi"),
}

export const NiFe : CogStack ={
    name: "NiFe",
    mbtiEquivalent: "INFJ",
    core: new Link("NiDom"),
    secondary: new Link("Fe"),
    tertiary: new Link("Ti"),
    inferior: new Link("Se"),
    shadow: new Link("NeFi"),
    orientationShift: new Link("FeNi"),
    attitudeShift: new Link("FiNe"),
    thinkFeelShift: new Link("NiTe"),
    senseIntuitShift: new Link("SiFe"),
    mostDistant: new Link("SeTi"),
}

export const NeTi : CogStack ={
    name: "NeTi",
    mbtiEquivalent: "ENTP",
    core: new Link("NeDom"),
    secondary: new Link("Ti"),
    tertiary: new Link("Fe"),
    inferior: new Link("Si"),
    shadow: new Link("NiTe"),
    orientationShift: new Link("TiNe"),
    attitudeShift: new Link("TeNi"),
    thinkFeelShift: new Link("NeFi"),
    senseIntuitShift: new Link("SeTi"),
    mostDistant: new Link("SiFe"),
}

export const NeFi : CogStack ={
    name: "NeFi",
    mbtiEquivalent: "ENFP",
    core: new Link("NeDom"),
    secondary: new Link("Fi"),
    tertiary: new Link("Te"),
    inferior: new Link("Si"),
    shadow: new Link("NiFe"),
    orientationShift: new Link("FiNe"),
    attitudeShift: new Link("FeNi"),
    thinkFeelShift: new Link("NeTi"),
    senseIntuitShift: new Link("SeFi"),
    mostDistant: new Link("SiTe"),
}

export const cogfuncDataMap = {
    //Orientation
    Inward, Outward,
    //Epistemology
    Classical, Bayesian,
    //Attitude
    Judging, Perceiving,
    //CogFunc
    Ti, Te, Fi, Fe, Si, Se, Ni, Ne,
    //CogStack
    TiNe, TiSe, TeNi, TeSi,
    FiNe, FiSe, FeNi, FeSi,
    SiTe, SiFe, SeTi, SeFi,
    NiTe, NiFe, NeTi, NeFi
}