/// <reference types="react" />
type NOT_REQUIRED = '';
type MakeRequiredKeys<R> = R extends NOT_REQUIRED ? never : R;
export type EideticComponentTypes<T, R extends keyof T | NOT_REQUIRED = NOT_REQUIRED> = React.FC<Partial<T> & Pick<T, MakeRequiredKeys<R>>>;
export type EideticComponentProps<T, R extends keyof T | NOT_REQUIRED = NOT_REQUIRED> = Partial<T> & Pick<T, MakeRequiredKeys<R>>;
export {};
