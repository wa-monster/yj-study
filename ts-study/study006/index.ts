type IsAny<T> =  'dong' extends 'guang'&T ? true : false
type v1 = IsAny<'false'>

// IsEqual
type IsEqual1<A,B> =  (<T>()=>T extends A ? 1 : 2) extends (<T>()=>T extends B ? 1 : 2)? true : false
type v2 = IsEqual1<'st',any>

// IsUnion
type IsUnion2<A,B=A> = A extends A ?
[B] extends [A] ? false : true 
:
never
type v3 = IsUnion2<1>

// IsNever
type IsNever<T> = [T] extends [never] ? true : false
type va1  = IsNever<never>
type va2  = IsNever<1>

// IsTuple
type NotEqual<A,B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? false : true;
type IsTuple<T> = T extends any[] ? NotEqual<T['length'],number> : false
type va3 = IsTuple<['1']>

// 联合转交叉
type UnionToIntersection<U> = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
? R
: never

// GetOptional


// GetRequired


// RemoveIndexSignature



// ClassPublicProps



// as const
// TypeScript 默认推导出来的类型并不是字面量类型。
const obj = {
    a:1,
    b:2
}
type objType = typeof obj


//  使用as const 
const obj2 = {
    a:1,
    b:2
} as const
type objType2 = typeof obj2

/**
 * 但是加上 as const 之后推导出来的类型是带有 readonly 修饰的，所以再通过模式匹配提取类型的时候也要加上 readonly 的修饰才行。

const 是常量的意思，也就是说这个变量首先是一个字面量值，而且还不可修改，有字面量和 readonly 两重含义。所以加上 as const 会推导出 readonly 的字面量类型。

比如反转那个三个元素的元组类型，不加上 readonly 再匹配是匹配不出来的：
 * */ 
