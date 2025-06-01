type inward = "inward"
type outward = "outward"

type classical = "classical"
type bayesian = "bayesian"

type judging = "judging"
type perceiving = "perceiving"

export type Judger ={
    action : judging
}

export type Perceiver ={
    action : perceiving
}

export type Thinker={
    core: Judger
    epistemology: classical
}

export type Feeler={
    core: Judger
    epistemology: bayesian
}

export type Senser={
    core: Perceiver
    epistemology: classical
}

export type Intuiter={
    core: Perceiver
    epistemology: bayesian
}

export type Ti ={
    core: Thinker
    orientation : inward
}

export type Te = {
    core: Thinker
    orientation: outward
}


export type Fi = {
    core: Feeler
    orientation: inward
}

export type Fe = {
    core: Feeler
    orientation: outward
}

export type Ni = {
    core: Intuiter
    orientation: inward
}

export type Ne = {
    core: Intuiter
    orientation: outward
}

export type Si = {
    core: Senser
    orientation: inward
}

export type Se = {
    core: Senser
    orientation: outward
}