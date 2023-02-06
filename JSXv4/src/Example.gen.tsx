/* TypeScript file generated from Example.res by genType. */
/* eslint-disable import/first */


const $$toRE3555235: { [key: string]: any } = {"Foo": 0};

// @ts-ignore: Implicit any on import
import * as ExampleBS__Es6Import from './Example.bs';
const ExampleBS: any = ExampleBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type publicAction = "Foo" | { readonly hello: string };

export const use: () => (_1:publicAction) => string = function () {
  const result = ExampleBS.use();
  return function (Arg1: any) {
      const result1 = result(typeof(Arg1) === 'object'
        ? Object.assign({TAG: 0}, Arg1)
        : $$toRE3555235[Arg1]);
      return result1
    }
};
