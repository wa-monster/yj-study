// js实现query参数转换为对象
function parseQueryString<Str extends string>(queryStr:Str):QueryParamsType<Str>
function parseQueryString(queryStr:string):Record<string,any> {
  if (!queryStr || !queryStr.length) {
      return {};
  }
  const queryObj:Record<string,any> = {};
  const items = queryStr.split('&');
  items.forEach((item:string) => {
      const [key, value] = item.split('=');
      if (queryObj[key]) {
          if(Array.isArray(queryObj[key])) {
              queryObj[key].push(value);
          } else {
              queryObj[key] = [queryObj[key], value]
          }
      } else {
          queryObj[key] = value;
      }
  });
  return queryObj;
}
const a1 = parseQueryString('a=1&b=2&c=3') 

//  Promise.all
interface PromiseConstructor {
  all<T extends readonly unknown[] | []>
      (values: T): Promise<{
          -readonly [P in keyof T]: Awaited<T[P]>
      }>;

  race<T extends readonly unknown[] | []>
      (values: T): Promise<Awaited<T[number]>>;
}