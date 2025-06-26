/**
 * Promise, or maybe not
 */
export type Awaitable<T> = T | PromiseLike<T>

/**
 * Null or whatever
 */
export type Nullable<T> = T | null | undefined

/**
 * Function
 */
export type Fn<T = void> = () => T

/**
 * Array, or not yet
 */
export type Arrayable<T> = T | Array<T>
