
export const addProduct = (product) => {
    return {
        type : 'ADDITEM',
        payLoad : product
    }
}

export const delProduct = (product) => {
    return {
        type : 'DELITEM',
        payLoad : product
    }
}