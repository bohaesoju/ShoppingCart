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
    cartData: any
}

export interface ITag{
    tagData: []
    isFetchTag: boolean
    selectedTagList: []
}

export interface ICount{
    count: number
    // targetItem: any
}
