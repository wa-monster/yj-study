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

// 能提取参数类型，同样也可以提取返回值类型
// GetReturnType
type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer returnType ? returnType : never
type returnType = GetReturnType<(a: string,b: number) => void>

// 定义this 的类型
class Yang {
  name: string;
  constructor() {
    this.name = 'yang'
  }
  hello(this: Yang) {
    return 'hello I\'m ' + this.name;
  }
}
const yang = new Yang();
console.log(yang.hello());
// console.log(yang.hello.call({ xxx: 1 }));

// 获取this的类型
// GetThisParameterType
type GetThisParameterType<T> = T extends (this: infer ThisType,...args: any[]) => any ? ThisType : unknown
type b = GetThisParameterType<typeof yang.hello>

// 提取构造器类型
// GetInstanceType
interface Person {
  name: string;
}
interface PersonConstructor {
  new(name: string): Person;
}
type GetInstanceType<Y extends new (...args: any) => any> = Y extends new (...args: any) => infer InstanceType ? InstanceType : any;
type bb = GetInstanceType<PersonConstructor>


// 提取构造器的参数类型
// GetConstructorParameters
type GetConstructorParameters<Y extends new (...args: any) => any> = Y extends new (...args: infer argsType) => any ? argsType : never;
type cc = GetConstructorParameters<PersonConstructor>




// ## 索引类型
// 模式匹配 提取 ref 的值的类型
// GetRefProps
type GetRefProps<Props> = 'ref' extends keyof Props ? Props extends { ref?: infer Value | undefined } ? Value : never : never
type oo = GetRefProps<{ ref?: undefined,name: 'yang' }>