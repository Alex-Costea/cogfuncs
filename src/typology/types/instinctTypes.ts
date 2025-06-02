import Link from "./Link.ts";

type InstinctOptions = "So" | "Sx" | "Sp"

export interface Instinct {
    name: InstinctOptions
}

type InstinctStackOption = "So/Sx" | "So/Sp" | "Sx/So" | "Sx/Sp" | "Sp/So" | "Sp/Sx"

export interface InstinctStack{
    name: InstinctStackOption
    primary: Link<InstinctOptions>
    secondary: Link<InstinctOptions>
}