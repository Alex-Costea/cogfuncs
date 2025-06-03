import {
    Bayesian,
    Classical,
    Fe, FeDom, FeNi, FeSi,
    Fi, FiDom, FiNe, FiSe,
    Inward,
    Judging, Ne, NeDom, NeFi, NeTi,
    Ni, NiDom, NiFe, NiTe,
    Outward,
    Perceiving,
    Se, SeDom, SeFi, SeTi,
    Si, SiDom, SiFe, SiTe,
    Te, TeDom, TeNi, TeSi,
    Ti, TiDom, TiNe, TiSe
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
    rejection, So, SoSp, SoSx, Sp, SpSo, SpSx,
    superego, Sx, SxSo, SxSp,
    type1,
    type1w2,
    type1w9,
    type2,
    type2w1,
    type2w3,
    type3,
    type3w2,
    type3w4,
    type4, type4w3, type4w5,
    type5, type5w4, type5w6,
    type6, type6w5, type6w7,
    type7, type7w6, type7w8,
    type8, type8w7, type8w9,
    type9, type9w1, type9w8
} from "./data/psyfuncs.ts";

export const dataMap ={
    cogdata:{
        cogstack:{
            TiNe, TiSe, TeNi, TeSi,
            FiNe, FiSe, FeNi, FeSi,
            SiTe, SiFe, SeTi, SeFi,
            NiTe, NiFe, NeTi, NeFi
        },
        dominantTypes:{
            TiDom, TeDom, FiDom, FeDom, SiDom, SeDom, NiDom, NeDom,
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
        cogfuncs:{
            Ti, Te, Fi, Fe, Si, Se, Ni, Ne,
        },
    },
    psydata:{
        corePsyfuncs:{
            type1, type2, type3, type4, type5, type6, type7, type8, type9,
        },

        wingedPsyfuncs:{
            type1w9, type1w2,
            type2w1, type2w3,
            type3w2, type3w4,
            type4w3, type4w5,
            type5w4, type5w6,
            type6w5, type6w7,
            type7w6, type7w8,
            type8w7, type8w9,
            type9w8, type9w1,
        },
        
        centers:{
            heart, head, gut,
        },

        insstack:{
            SoSx, SoSp, SxSo, SxSp, SpSo, SpSx
        },
        insfuncs:{
            So, Sx, Sp,
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