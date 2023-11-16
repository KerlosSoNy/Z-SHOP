import { atom} from "recoil";

export const ProductAtom = atom({
    key:"Product-Atom",
    default:[]
})

export const CartAtom = atom({
    key:"Cart-Atom",
    default:[]
})

export const PaymentAtom = atom({
    key:"Payment-Atom",
    default:0
})

export const TotalProductsAtom = atom({
    key:"TotalProducts-Atom",
    default:0
})

