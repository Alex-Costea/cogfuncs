import {
    Bayesian,
    Classical,
    Fe, FeDom, stackFeNi, stackFeSi,
    Fi, FiDom, stackFiNe, stackFiSe,
    Inward,
    Judging, Ne, NeDom, stackNeFi, stackNeTi,
    Ni, NiDom, stackNiFe, stackNiTe,
    Outward,
    Perceiving,
    Se, SeDom, stackSeFi, stackSeTi,
    Si, SiDom, stackSiFe, stackSiTe,
    Te, TeDom, stackTeNi, stackTeSi,
    Ti, TiDom, stackTiNe, stackTiSe
} from "./data/cogfuncs.ts";
import {
    assertive,
    attachment,
    avoidant,
    compliant,
    ego,
    frustration,
    gut,
    head,
    heart,
    id,
    internal,
    metabolizing,
    reactive,
    rejection,
    superego,
    func1,
    func1w2,
    func1w9,
    func2,
    func2w1,
    func2w3,
    func3,
    func3w2,
    func3w4,
    func4, func4w3, func4w5,
    func5, func5w4, func5w6,
    func6, func6w5, func6w7,
    func7, func7w6, func7w8,
    func8, func8w7, func8w9,
    func9, func9w1, func9w8
} from "./data/psyfuncs.ts";

export const dataMap ={
    cogdata:{
        cogstack:{
            stackTiNe, stackTiSe, stackTeNi, stackTeSi,
            stackFiNe, stackFiSe, stackFeNi, stackFeSi,
            stackSiTe, stackSiFe, stackSeTi,stackSeFi,
            stackNiTe, stackNiFe, stackNeTi, stackNeFi
        },
        cogstackParents:{
            TiDom, TeDom, FiDom, FeDom, SiDom, SeDom, NiDom, NeDom,
        },
        cogfuncs:{
            Ti, Te, Fi, Fe, Si, Se, Ni, Ne,
        },
        orientation:{
            Inward, Outward,
        },
        epistemology:{
            Classical, Bayesian,
        },
        attitude:{
            Judging, Perceiving,
        },
    },
    psydata:{
        corePsyfuncs:{
            func1, func2, func3, func4, func5, func6, func7, func8, func9,
        },

        wingedPsyfuncs:{
            func1w9, func1w2,
            func2w1, func2w3,
            func3w2, func3w4,
            func4w3, func4w5,
            func5w4, func5w6,
            func6w5, func6w7,
            func7w6, func7w8,
            func8w7, func8w9,
            func9w8, func9w1,
        },
        
        centers:{
            heart, head, gut,
        },

        agents:{
            id, ego, superego,
        },

        reactions:{
            reactive, avoidant, metabolizing,
        },

        relations:{
            rejection, attachment, frustration,
        },

        socializing:{
            compliant, assertive, internal,
        },
    },
}