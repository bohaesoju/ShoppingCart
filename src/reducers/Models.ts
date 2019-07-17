export interface IStationery{
    data: {
        id: number,
        name: string,
        image: string,
        price: number,
        stock: number
    }
    isFetchStationery: boolean
}

export interface ITag{
    tagData: {
        key: string,
        name: string,
    }
    isFetchTag: boolean
}
