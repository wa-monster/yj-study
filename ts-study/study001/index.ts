// # 模式匹配做提取

// ## 简单介绍 模式匹配例子

// 获取Promise的value值
// 使用一下模式匹配
//  ''  extends '' ? '' : ''
type p = Promise<'guang'>

type GetValueType<T> = T extends Promise<infer U> ? U : never

type value = GetValueType<p>

// ## 对数组进行一些模式匹配
// 数组提取第一个元素
// First
type arr = [1,2]
type First<T extends unknown[]> = T extends [infer First,...infer R] ? First : never
type first = First<arr>

// 数组提取最后一个元素
// Last
type arr2 = [1,2,3]
type Last<T extends unknown[]> = T extends [...infer R,infer Last] ? Last : never
type last = Last<arr2>

// 数组删除最后一个元素
// PopArr
type arr3 = [1,2,3]
type PopArr<T extends unknown[]> = T extends [] ? [] : T extends [...infer Rest,unknown] ? Rest : never
type rest = PopArr<arr3>

// 数组删除第一个元素
// ShiftArr
type arr4 = [1,2,3]
type ShiftArr<T extends unknown[]> = T extends [] ? [] : T extends [unknown,...infer Rest] ? Rest : never
type rest2 = ShiftArr<arr4>

// ## 对字符串进行一些模式匹配
// 判断字符串是否以某个前缀开头
// StartsWith
type str = 'yj is handsome'
type StartsWith<S extends string,Prefix extends string> = S extends `${Prefix}${string}` ? true : false
type isOk = StartsWith<str,'yj'>
type isOk2 = StartsWith<str,'yj2'>

// 字符串替换
// Replace
type str2 = 'yj is handsome'
type Replace<str extends string,T extends string,U extends string> = str extends `${infer Prefix}${T}${infer Subffix}` ? `${Prefix}${U}${Subffix}` : str
type replace2Str = Replace<str2,'handsome','ugly'>

// 去掉空白字符
// Trim
type str3 = 'yj is handsome  '
type TrimLeft<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer Rest}`
  ? TrimLeft<Rest> : Str
type TrimRight<Str extends string> =
  Str extends `${infer Rest}${' ' | '\n' | '\t'}`
  ? TrimRight<Rest> : Str
type Trim<Str extends string> = TrimRight<TrimLeft<Str>>
type trimStr = Trim<str3>

// ## 函数同样也可以做类型匹配
//  函数类型可以通过模式匹配来提取参数的类型
// GetParameters
type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown ? Args : never
type args = GetParameters<(a: string,b: number) => void>

