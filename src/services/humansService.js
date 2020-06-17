const HUMANS = [
    {
        id: 1,
        name: 'Mike',
        point: 1230,
        level: 8,
        star: 3,
    },
    {
        id: 2,
        name: 'Alex',
        point: 45,
        level: 5,
        star: 3,
    },
    {
        id: 3,
        name: 'Christopher',
        point: 0,
        level: 2,
        star: 3,
    },
    {
        id: 4,
        name: 'John',
        point: -60,
        level: 0,
        star: 0,
    },
    {
        id: 5,
        name: 'Andy',
        point: 1230,
        level: 6,
        star: 3,
    },
    {
        id: 6,
        name: 'Duong',
        point: 2222,
        level: 9,
        star: 5,
    }
]
export const getHumans = () => {
    return Promise.resolve({
        status: 1,
        data: HUMANS
    })
}