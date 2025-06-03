import {Instinct, InstinctStack} from "../types/instinctTypes.ts";
import ConceptLink from "../types/ConceptLink.ts";


export const So : Instinct = {
    name: "So"
}

export const Sx : Instinct = {
    name: "Sx"
}

export const Sp : Instinct ={
    name: "Sp"
}

export const SoSx : InstinctStack = {
    name: "So/Sx",
    primary: new ConceptLink("So"),
    secondary: new ConceptLink("Sx")
}

export const SoSp : InstinctStack = {
    name: "So/Sp",
    primary: new ConceptLink("So"),
    secondary: new ConceptLink("Sp")
}

export const SxSo : InstinctStack = {
    name: "Sx/So",
    primary: new ConceptLink("Sx"),
    secondary: new ConceptLink("So")
}

export const SxSp : InstinctStack = {
    name: "Sx/Sp",
    primary: new ConceptLink("Sx"),
    secondary: new ConceptLink("Sp")
}

export const SpSo : InstinctStack = {
    name: "Sp/So",
    primary: new ConceptLink("Sp"),
    secondary: new ConceptLink("So")
}

export const SpSx : InstinctStack = {
    name: "Sp/Sx",
    primary: new ConceptLink("Sp"),
    secondary: new ConceptLink("Sx")
}
