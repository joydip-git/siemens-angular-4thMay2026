// export const divide = (a: number, b: number): Promise<number> => {
//     const p = new Promise<number>(
//         (resolveFn, rejectFn) => {
//             const res = a / b
//             if (res === Infinity) {
//                 const error = new Error('divisor should not be zero')
//                 rejectFn(error.message)
//             }
//             resolveFn(res)
//         }
//     )
//     return p
// }

// export const add = (a: number, b: number) => a + b


export const divide = async (a: number, b: number): Promise<number> => {
    const res = a / b
    if (res === Infinity) {
        const error = new Error('divisor should not be zero')
        //return Promise.reject(error)
        throw error
    }
    //return Promise.resolve(res)
    return res
}

export const add = (a: number, b: number) => a + b