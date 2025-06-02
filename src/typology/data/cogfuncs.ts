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
}

export const TiSe : CogStack ={
    name: "TiSe",
    mbtiEquivalent: "ISTP",
    core: new Link("TiDom"),
    secondary: new Link("Se"),
    tertiary: new Link("Ni"),
    inferior: new Link("Fe"),
    shadow: new Link("TeSi"),
}

export const TeNi : CogStack ={
    name: "TeNi",
    mbtiEquivalent: "ENTJ",
    core: new Link("TeDom"),
    secondary: new Link("Ni"),
    tertiary: new Link("Se"),
    inferior: new Link("Fi"),
    shadow: new Link("TiNe")
}

export const TeSi : CogStack ={
    name: "TeSi",
    mbtiEquivalent: "ESTJ",
    core: new Link("TeDom"),
    secondary: new Link("Si"),
    tertiary: new Link("Ne"),
    inferior: new Link("Fi"),
    shadow: new Link("TiSe")
}

export const FiNe : CogStack ={
    name: "FiNe",
    mbtiEquivalent: "INFP",
    core: new Link("FiDom"),
    secondary: new Link("Ne"),
    tertiary: new Link("Si"),
    inferior: new Link("Te"),
    shadow: new Link("FeNi")
}

export const FiSe : CogStack ={
    name: "FiSe",
    mbtiEquivalent: "ISFP",
    core: new Link("FiDom"),
    secondary: new Link("Se"),
    tertiary: new Link("Ni"),
    inferior: new Link("Te"),
    shadow: new Link("FeSi")
}

export const FeNi : CogStack ={
    name: "FeNi",
    mbtiEquivalent: "ENFJ",
    core: new Link("FeDom"),
    secondary: new Link("Ni"),
    tertiary: new Link("Se"),
    inferior: new Link("Ti"),
    shadow: new Link("FiNe")
}

export const FeSi : CogStack ={
    name: "FeSi",
    mbtiEquivalent: "ESFJ",
    core: new Link("FeDom"),
    secondary: new Link("Si"),
    tertiary: new Link("Ne"),
    inferior: new Link("Ti"),
    shadow: new Link("FiSe")
}

export const SiTe : CogStack ={
    name: "SiTe",
    mbtiEquivalent: "ISTJ",
    core: new Link("SiDom"),
    secondary: new Link("Te"),
    tertiary: new Link("Fi"),
    inferior: new Link("Ne"),
    shadow: new Link("SeTi")
}

export const SiFe : CogStack ={
    name: "SiFe",
    mbtiEquivalent: "ISFJ",
    core: new Link("SiDom"),
    secondary: new Link("Fe"),
    tertiary: new Link("Ti"),
    inferior: new Link("Ne"),
    shadow: new Link("SeFi")
}

export const SeTi : CogStack ={
    name: "SeTi",
    mbtiEquivalent: "ESTP",
    core: new Link("SeDom"),
    secondary: new Link("Ti"),
    tertiary: new Link("Fe"),
    inferior: new Link("Ni"),
    shadow: new Link("SiTe")
}

export const SeFi : CogStack ={
    name: "SeFi",
    mbtiEquivalent: "ESFP",
    core: new Link("SeDom"),
    secondary: new Link("Fi"),
    tertiary: new Link("Te"),
    inferior: new Link("Ni"),
    shadow: new Link("SiFe")
}

export const NiTe : CogStack ={
    name: "NiTe",
    mbtiEquivalent: "INTJ",
    core: new Link("NiDom"),
    secondary: new Link("Te"),
    tertiary: new Link("Fi"),
    inferior: new Link("Se"),
    shadow: new Link("NeTi"),
}

export const NiFe : CogStack ={
    name: "NiFe",
    mbtiEquivalent: "INFJ",
    core: new Link("NiDom"),
    secondary: new Link("Fe"),
    tertiary: new Link("Ti"),
    inferior: new Link("Se"),
    shadow: new Link("NeFi"),
}

export const NeTi : CogStack ={
    name: "NeTi",
    mbtiEquivalent: "ENTP",
    core: new Link("NeDom"),
    secondary: new Link("Ti"),
    tertiary: new Link("Fe"),
    inferior: new Link("Si"),
    shadow: new Link("NiTe")
}

export const NeFi : CogStack ={
    name: "NeFi",
    mbtiEquivalent: "ENFP",
    core: new Link("NeDom"),
    secondary: new Link("Fi"),
    tertiary: new Link("Te"),
    inferior: new Link("Si"),
    shadow: new Link("NiFe"),
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