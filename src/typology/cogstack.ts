import {Fe, Feeler, Fi, Intuiter, Judger, Ne, Ni, Perceiver, Se, Senser, Si, Te, Thinker, Ti} from "./cogfuncs.ts";

type TiNe={
    primary: Ti
    secondary: Ne
}

type TiSe={
    primary: Ti
    secondary: Se
}

type TiDom = {
    core : Ti
    subtype : TiNe | TiSe
}

type TeNi = {
    primary: Te
    secondary: Ni
}

type TeSi = {
    primary: Te
    secondary: Si
}

type TeDom = {
    core: Te
    subtype: TeNi | TeSi
}

type FiNe = {
    primary: Fi
    secondary: Ne
}

type FiSe = {
    primary: Fi
    secondary: Se
}

type FiDom = {
    core: Fi
    subtype: FiNe | FiSe
}

type FeNi = {
    primary: Fe
    secondary: Ni
}

type FeSi = {
    primary: Fe
    secondary: Si
}

type FeDom = {
    core: Fe
    subtype: FeNi | FeSi
}

type NiTe = {
    primary: Ni
    secondary: Te
}

type NiFe = {
    primary: Ni
    secondary: Fe
}

type NiDom = {
    core: Ni
    subtype: NiTe | NiFe
}

type NeTi = {
    primary: Ne
    secondary: Ti
}

type NeFi = {
    primary: Ne
    secondary: Fi
}

type NeDom = {
    core: Ne
    subtype: NeTi | NeFi
}

type SiFe = {
    primary: Si
    secondary: Fe
}

type SiTe = {
    primary: Si
    secondary: Te
}

type SiDom = {
    core: Si
    subtype: SiFe | SiTe
}

type SeFi = {
    primary: Se
    secondary: Fi
}

type SeTi = {
    primary: Se
    secondary: Ti
}

type SeDom = {
    core: Se
    subtype: SeFi | SeTi
}

type ThinkDom = {
    core: Thinker,
    subtypes: TiDom | TeDom
}

type FeelDom ={
    core : Feeler,
    subtypes: FiDom | FeDom
}

type SenseDom={
    core: Senser,
    subtypes: SeDom | SiDom
}

type IntuitDom={
    core: Intuiter,
    subtypes: NeDom | NiDom
}

type JudgeDom={
    core : Judger,
    subtypes: ThinkDom | FeelDom
}

type PerceiveDom={
    core: Perceiver,
    subtypes: SenseDom | IntuitDom
}

export type CogStack = JudgeDom | PerceiveDom