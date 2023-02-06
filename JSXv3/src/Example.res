@genType
type publicAction = Foo | Bar({hello: string})

@genType
let use = () => {
  React.useCallback0(
  action =>
  switch action {
  | Foo => "Foo"
  | Bar({hello}) => hello
  })
}
