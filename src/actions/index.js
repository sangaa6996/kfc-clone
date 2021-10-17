import * as Types from '../constants/ActionTypes'

export const HienThiSanPham = (sanphams) => {
    return{
        type : Types.LayDuLieu,
        sanphams
    }
}

export const SetUser = (user) => {
    return{
        type : Types.SetUser,
        user
    }
}


