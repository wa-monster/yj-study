// 实战1
/**
 * 把 字面量类型 'a=1&b=2' 转化为 {
 *  a:1,
 *  b:2
 * }
 * */ 
type MergeValues<One, Other> = 
    One extends Other 
        ? One
        : Other extends unknown[]
            ? [One, ...Other]
            : [One, Other];
type HeB<A,B> = {
  [K in keyof A | keyof B ]: K extends keyof A ? 
  K extends keyof B ?  MergeValues<A[K],B[K]> : A[K] 
  : 
  K extends keyof B ? B[K] : never
}
type Qie<T> = T extends `${infer K}=${infer V}` ? {
  [Key in K]:V
} : Record<string,any>
type QueryParamsType<S, B=S> = S extends `${infer R}&${infer REST}` ? HeB<QueryParamsType<REST,R>,Qie<R> > : Qie<S> 

type Ob = QueryParamsType<'a=1&b=2'>


