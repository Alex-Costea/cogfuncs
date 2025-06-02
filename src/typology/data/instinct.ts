import {Instinct, InstinctStack} from "../types/instinctTypes.ts";
import Link from "../types/Link.ts";


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
    primary: new Link("So"),
    secondary: new Link("Sx")
}

export const SoSp : InstinctStack = {
    name: "So/Sp",
    primary: new Link("So"),
    secondary: new Link("Sp")
}

export const SxSo : InstinctStack = {
    name: "Sx/So",
    primary: new Link("Sx"),
    secondary: new Link("So")
}

export const SxSp : InstinctStack = {
    name: "Sx/Sp",
    primary: new Link("Sx"),
    secondary: new Link("Sp")
}

export const SpSo : InstinctStack = {
    name: "Sp/So",
    primary: new Link("Sp"),
    secondary: new Link("So")
}

export const SpSx : InstinctStack = {
    name: "Sp/Sx",
    primary: new Link("Sp"),
    secondary: new Link("Sx")
}

export const instinctDataMap = {
    // instinct
    So, Sx, Sp,
    // instinct stack
    SoSx, SoSp, SxSo, SxSp, SpSo, SpSx
}
