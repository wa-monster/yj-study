// # 分布式条件类型
type Union1 = 'a' | 'b' | 'c'
type UppercaseA<T> = T extends 'a' ? Uppercase<T> : T
type strr1 = UppercaseA<Union1>


// ## 提取字符串中的字符，首字母大写以后重新构造一个新的
// CamelcaseUnion

