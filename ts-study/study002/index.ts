// # 重新构造做变换

// ## 数组类型的重新构造

// 给元祖增加类型
// Push
type tuple = [1,2,3];
type Push<Arr extends unknown[],T> = [...Arr,T]
type tuple4 = Push<tuple,4>

// Unshift
type Unshift<Arr extends unknown[],T> = [T,...Arr]
type bula = Unshift<[1,2,3],4>

// 把两个元祖拼凑出一个混合元祖
// Zip
type tuple1 = [1,2,3];
type tuple2 = ['a','b','c'];
type Zip<T extends unknown[],U extends unknown[]> =
  T extends [infer TFirst,... infer TRest] ?
  U extends [infer UFirst,...infer URest] ? [[TFirst,UFirst],...Zip<TRest,URest>] : []
  :
  []
type zip1 = Zip<tuple1,tuple2>





// ## 字符串重新构造
// 字符串首字母大写
// CapitalizeStr
type CapitalizeStr<T extends string> = T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T
type YangStr = CapitalizeStr<'yang'>

// yang_yang_yang 变成 yang_Yang_Yang
// CamelCase
type CamelCase<T extends string> = T extends `${infer Left}_${infer Right}${infer Rest}` ? `${Left}_${Uppercase<Right>}${CamelCase<Rest>}` : T
type abc = CamelCase<'yang_yang_yang'>

// 删除字符串中的某个子串
// DropSubStr
type DropSubStr<Str extends string,SubStr extends string> = Str extends `${infer Prefix}${SubStr}${infer Suffix}` ? DropSubStr<`${Prefix}${Suffix}`,SubStr> : Str
type abc2 = DropSubStr<'aaaaaaabbbc','b'>





// ## 函数类型的重新构造
// 构造一个新的类型
// AppendArgument
type AppendArgument<Func extends Function,Arg> = Func extends (...args: infer Args) => infer ReturnType ? (...args: [...Args,Arg]) => ReturnType : never
type func1 = AppendArgument<(a: number,b: string) => number,number>





// ## 索引类型的重新构造
// 索引类型是聚合多个元素的类型，class、对象等都是索引类型，比如这就是一个索引类型：
type obj = {
  name: string;
  age: number;
  gender: boolean
}

// 对value 做修改 
// Mapping
type Mapping<Obj extends object> = {
  [key in keyof Obj]: [Obj[key],Obj[key],Obj[key]]
}
type wwa = Mapping<{ name: string }>

// 对 Key 做修改
// UppercaseKey
type UppercaseKey<Obj extends object> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key]
}
type wwa2 = UppercaseKey<{ name: string }>

// 创建索引类型
// Record
// type Record<K extends string | number | symbol,T> = { [P in K]: T }

// 给索引类型添加 readonly 修饰的高级类型
// ToReadonly
type ToReadonly<T> = {
  readonly [key in keyof T]: T[key]
}
type awa3 = ToReadonly<{ a: string }>
// 添加可选修饰符
// ToPartial
type ToPartial<T> = {
  [key in keyof T]?: T[key]
}
type awa4 = ToPartial<{ a: string }>
// 去掉 readonly 修饰
// ToMutable
type ToMutable<T> = {
  - readonly [key in keyof T]: T[key]
}
type awa5 = ToMutable<{ readonly a: string }>
// 去掉 可选修饰符
// ToRequired
type ToRequired<T> = {
  [key in keyof T]-?: T[key]
}
type awa6 = ToRequired<{ a?: string }>

// 构造新索引类型的时候根据值的类型做下过滤
// FilterByValueType
type FilterByValueType<Obj extends Record<string,any>,valueType> = {
  [Key in keyof Obj as Obj[Key] extends valueType ? Key : never]: Obj[Key]
}
type awa7 = FilterByValueType<{ 'a': 10,'b': 20 },10>