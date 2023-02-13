// # 数组长度做计数




// ## 数组长度实现加减乘除
// 根据数据创建一个数组
type BuildArrayByMe<Length extends number,Ele = unknown,Arr extends unknown[] = []> = Arr['length'] extends Length ? Arr : BuildArrayByMe<Length,Ele,[...Arr,unknown]>

//  加法
//  Add
type Add<T extends number,U extends number> = [...BuildArrayByMe<T>,...BuildArrayByMe<U>]['length']
type len = Add<44,4>

// 减法
// Subtract
type Subtract<T extends number,U extends number> =
  BuildArrayByMe<T> extends [...arr1: BuildArrayByMe<U>,...arr2: infer Rest1] ? Rest1['length'] : never
type len2 = Subtract<21,100>

// 乘法
// Multiply
type Multiply<Num1 extends number,Num2 extends number,ResultArr extends unknown[] = []> =
  Num2 extends 0 ?
  ResultArr['length']
  : Multiply<Num1,Subtract<Num2,1>,[...ResultArr,...BuildArrayByMe<Num1>]>
type len3 = Multiply<100,99>

// 除法
// Divide
type Divide<Num1 extends number,Num2 extends number,ResultArr extends unknown[] = []> =
  Num2 extends 0
  ?
  never
  :
  Num1 extends 0 ? ResultArr['length'] : Divide<Subtract<Num1,Num2>,Num2,[...ResultArr,unknown]>
type len4 = Divide<17,0>


// ## 字符串取长度
type StrLen<Str extends string,ResultArr extends unknown[] = []> = Str extends `${infer First}${infer Rest}` ? StrLen<Rest,[unknown,...ResultArr]> : ResultArr['length']
type len5 = StrLen<'yangjie'>

// 两个数值比较,返回大的数值
// GreaterThan

type GreaterThan<Num1 extends number,Num2 extends number,ResultArr extends unknown[] = []> =
  ResultArr['length'] extends Num1
  ? Num2
  : ResultArr['length'] extends Num2 ? Num1 : GreaterThan<Num1,Num2,[...ResultArr,unknown]>
type big = GreaterThan<13,22>

// 斐波那契数列
// Fibonacci
type FibonacciLoop<
  PreArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[] = [],
  Num extends number = 1
> = Num extends 0 ?
  0 :
  IndexArr['length'] extends Num ?
  CurrentArr['length'] :
  FibonacciLoop<CurrentArr,[...PreArr,...CurrentArr],[...IndexArr,unknown],Num>
type Fibonacci<Index extends number> = FibonacciLoop<[1],[],[],Index>
type valueww = Fibonacci<3>



















