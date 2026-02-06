
export function suma(a: number, b: number) {
    return a + b;
}

export const addArray = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
