type iSo = "so"
type iSp = "sp"
type iSx = "sx"

type SoSp = {
    primary: iSo
    secondary : iSp
}

type SoSx = {
    primary : iSo
    secondary : iSx
}

type SpSo = {
    primary: iSp
    secondary : iSo
}

type SpSx = {
    primary : iSp
    secondary : iSx
}

type SxSp = {
    primary: iSx
    secondary : iSp
}

type SxSo = {
    primary : iSx
    secondary : iSo
}

export type Instinct = SoSp | SoSx | SpSo | SpSx | SxSp | SxSo