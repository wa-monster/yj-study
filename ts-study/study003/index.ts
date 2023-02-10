// # 递归复用做循环

// ## Promise 的递归复用
// DeepPromiseValueType
type ttt = Promise<
  Promise<
    Promise<
      Promise<
        Record<string,string>
      >
    >
  >
>
type DeepPromiseValueType<T extends Promise<unknown>> = T extends Promise<infer U> ?
  U extends Promise<unknown> ? DeepPromiseValueType<U> : U
  :
  never
type res = DeepPromiseValueType<ttt>
// 简化
type DeepPromiseValueType2<T> = T extends Promise<infer U> ? DeepPromiseValueType2<U> : T





// ## 数组类型的递归
type tupleArr = [1,2,3,4]
// 数组翻转
// ReverseArr
type ReverseArr<Arr extends unknown[]> = Arr extends [...infer Rest,infer Last] ? [Last,...ReverseArr<Rest>] : Arr
type res2 = ReverseArr<tupleArr>

// 查找元素
// Includes
type Includes<Arr extends unknown[],Value> = Arr extends [infer First,...infer Rest] ? IsEqual<Value,First> extends true ? true : Includes<Rest,Value> : false
type res3 = Includes<[1,2,3,4,5,6,12],5>
type res4 = Includes<[1,2,3,4,5,6,12],15>
type IsEqual<A,B> = (A extends B ? true : false) & (B extends A ? true : false);
// 删除元素
// RemoveItem
type RemoveItem<Arr extends unknown[],Value,Result extends unknown[] = []> =
  Arr extends [infer First,...infer Rest]
  ?
  IsEqual<Value,First> extends true ? RemoveItem<Rest,Value,Result> : RemoveItem<Rest,Value,[...Result,First]>
  :
  Result
type res5 = RemoveItem<[1,2,3,4,5,6,12,6,6,6,6,6,6,6,],6>

// 传入 5 和元素类型，构造一个长度为 5 的该元素类型构成的数组
// BuildArray
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends Length
  ? Arr
  : BuildArray<Length,Ele,[...Arr,Ele]>
type res6 = BuildArray<6,10>


// ## 字符串类型的递归
// 字符串替换
// ReplaceAll
type ReplaceAll<Str extends string,From extends string,To extends string> = Str extends `${infer prefix}${From}${infer suffix}` ? ReplaceAll<`${prefix}${To}${suffix}`,From,To> : Str
type res7 = ReplaceAll<'qweqweqwe','qw','bb'>


// 把字符串字面量类型的每个字符都提取出来组成联合类型，也就是把 'dong' 转为 'd' | 'o' | 'n' | 'g'。
// StringToUnion
type StringToUnion<Str extends string> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never
type res8 = StringToUnion<'yang'>

// 字符串类型的反转
// ReverseStr
type ReverseStr<Str extends string> = Str extends `${infer First}${infer Rest}` ? `${ReverseStr<Rest>}${First}` : Str
type res9 = ReverseStr<'abcdefg'>





// ## 对象类型的递归

// 对象类型的递归，也可以叫做索引类型的递归。
// DeepReadonly
type DeepReadonly<Obj extends Record<string,any>> =
  Obj extends any ?
  {
    readonly [Key in keyof Obj]:
    Obj[Key] extends object
    ? Obj[Key] extends Function
    ? Obj[Key]
    : DeepReadonly<Obj[Key]>
    : Obj[Key]
  }
  :
  never

type res10 = DeepReadonly<{
  a: {
    b: {
      c: {
        f: () => 'dong',
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}>





