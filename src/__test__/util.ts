

export const sum = (arry: Array<number>) => {
    return arry.reduce( (prev, cur, _i)=> {
        return prev+cur;
    }, 0)
}
