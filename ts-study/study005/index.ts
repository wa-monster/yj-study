// # 分布式条件类型
type Union1 = 'a' | 'b' | 'c'
type UppercaseA<T> = T extends 'a' ? Uppercase<T> : T
type strr1 = UppercaseA<Union1>


// ## 提取字符串中的字符，首字母大写以后重新构造一个新的
// CamelcaseUnion
type CamelcaseUnion<T extends string> = T extends `${infer Left}_${infer Right}${infer Rest}` ? `${Left}_${Uppercase<Right>}${CamelcaseUnion<Rest>}` : T
type s1 = CamelcaseUnion<'a_a_b_c'|'b_b_b_b'>

// 判断是否是联合类型
type IsUnion<A, B = A> =
    A extends A
        ? [B] extends [A]
            ? false
            : true
        : never
type s2 = IsUnion<'a'>


// 用 block__element--modifier 
type BEM<Block extends string,Element extends string[],Modifier extends string[]> = `${Block}_${Element[number]}--${Modifier[number]}`
type bemResult = BEM<'guang', ['aaa', 'bbb'], ['warning', 'success']>;


// AllCombinations
type Combination<A extends string, B extends string> =
    | A
    | B
    | `${A}${B}`
    | `${B}${A}`;
type s3 = Combination<'a','b'>
type AllCombinations<A extends string, B extends string = A> =  A extends A ? Combination<A, AllCombinations<Exclude<B, A>>> : never