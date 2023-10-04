type Draft<T> = {
    -readonly [P in keyof T]: Draft<T[P]>;
};
export declare function produce<T>(base: T, recipe: (draft: Draft<T>) => void): T;
export {};
