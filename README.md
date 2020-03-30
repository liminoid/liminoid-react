<div align="center">

  <h1>🔵🔴 `<Liminoid />` 🔴🔵</h1>

<strong>In-browser code editor component powered by `liminoid-js`</strong>

</div>

<div align="center">
  <h3>
    <a href="https://liminoid.io/guides/react/">
      Documentation
    </a>
    <span> | </span>
    <a href="https://matrix.to/#/!CPoHZRWLrkbgPuzGpU:matrix.org/$cw1qJZO_Ykr4rPF5_Of3OXGg_4j8E4LkqdkFqGFGA_U?via=matrix.org">
      Chatroom
    </a>
    <span> | </span>
    <a href="https://twitter.com/liminoid_io">
      Twitter
    </a>
    <span> | </span>
    <a href="https://stackoverflow.com/questions/tagged/liminoid">
      Stack Overflow
    </a>
  </h3>
</div>

## Installation

```sh
$ yarn add liminoid-react
```

or

```sh
$ npm install --save liminoid-react
```

## Usage

<!-- prettier-ignore -->
```jsx
import { Liminoid } from 'liminoid-react';

<Liminoid
  packages={['scikit-learn']}
  console={false}
  edit={true}
  scope={false}
  onResult={res => console.log(res)}
>
from sklearn import svm
from sklearn import datasets
clf = svm.SVC()
X, y = datasets.load_iris(return_X_y=True)
clf.fit(X, y)
clf.predict(X[0:1])
</Liminoid>
```

## `props`

<!-- prettier-ignore -->
|  name  | default |   options  |  description  |
| :--------: | :-----: | :------: | :---------: |
| `packages` |  `[]`   | `Array`: [package names currently avalable](https://github.com/iodide-project/pyodide/tree/master/packages) in Pyodide   |  Uses Pyodide's [`loadPackage()`](https://pyodide.readthedocs.io/en/latest/using_pyodide_from_webworker.html#loading-packages) to preload packages   |
|  `console`  | `true`  | `Boolean`: `true` or `false` | things |
|   `edit`   | `true`  |  `Boolean`: `true` or `false`   |  `false` disables the `textarea` input while still allowing the embedded code to be run. |
|   `onResult`   | `undefined`  |  `Function`: [function expression][f_exp] or reference  |  `false` disables the `textarea` input while still allowing the embedded code to be run. |

[f_exp]: https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

See the [kitchen sink]() for a demo of the effects of different `prop` options and configuration.

## Contributing/Requests

Open an issue or post a message in the [chatroom](https://matrix.to/#/!CPoHZRWLrkbgPuzGpU:matrix.org/$cw1qJZO_Ykr4rPF5_Of3OXGg_4j8E4LkqdkFqGFGA_U?via=matrix.org).

## Citing

While not required, when using (or extending) Liminoid for academic work, citations are appreciated 🙏

```
@software{liminoid,
  author = {Jonathan Dinu},
  title = {Liminoid: Liminoid: Web assembly toolkit for building local-first analytics applications},
  url = {https://github.com/liminoid},
  version = {0.0.1},
  month = {March},
  year = {2020}
}
```

## License

All original work licensed under either of:

- [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- [MIT license](http://opensource.org/licenses/MIT)

at your option.

> Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
