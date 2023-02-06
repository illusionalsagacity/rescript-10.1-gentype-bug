/* TypeScript file generated from Example.res by genType. */
/* eslint-disable import/first */


// @ts-ignore: Implicit any on import
import * as ExampleBS__Es6Import from './Example.bs';
const ExampleBS: any = ExampleBS__Es6Import;

import type {React_callback as ReactV3_React_callback} from '@rescript/react/src/v3/ReactV3.gen';

// tslint:disable-next-line:interface-over-type-literal
export type publicAction = "Foo" | { readonly hello: string };

export const use: () => ReactV3_React_callback<publicAction,string> = ExampleBS.use;
