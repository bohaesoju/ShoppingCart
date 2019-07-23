export interface IStationery{
    data: {
        id: number
        name: string
        image: string
        tags: {
            key: string
            name: string
        }
        price: number
        stock: number
    }[]
    isFetchStationery: boolean
    isAddCartList: boolean
    cartList: {
        id: number
        name: string
        image: string
        tags: {
            key: string
            name: string
        }
        price: number
        stock: number
    }[]
}

export interface ITag{
    tagData: {
        key: string
        name: string
    }
    isFetchTag: boolean
}

export interface ICount{
    count: number
}
