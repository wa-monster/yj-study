// 实战一

// KebabCaseToCamelCase
// 短横线转为驼峰写法
type KebabCaseToCamelCase<S extends string> = 
  S extends `${infer R}_${infer Rest}` 
  ? `${R}${KebabCaseToCamelCase<Capitalize<Rest>>}`
  : S
type a = KebabCaseToCamelCase<'a_bb_cc'>

// CamelCaseToKebabCase
// 驼峰转为短横线写法
type CamelCaseToKebabCase<S extends string> = 
  S extends `${infer F}${infer Rest}` 
  ? F extends Uppercase<F> 
    ? `-${Lowercase<F>}${CamelCaseToKebabCase<Rest>}` 
    : `${F}${CamelCaseToKebabCase<Rest>}`
  : S
type b1 = CamelCaseToKebabCase<'aaBbCc'>