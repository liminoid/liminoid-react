<div align="center">

  <h1>🔵🔴 &lt;Liminoid /> 🔴🔵</h1>

<strong>Like [`react-live`](https://github.com/FormidableLabs/react-live) that can run the scientific Python stack... powered by [liminoid-js](https://github.com/liminoid/liminoid-js)</strong>

</div>

<div align="center">
  <h4>
    <a href="https://liminoid.io/reference/react/">
      Documentation
    </a>
    <span> | </span>
    <a href="https://discord.gg/s6WQ9RS">
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
    <span> | </span>
    <a href="https://liminoid.io/contributing/">
      Contributing
    </a>
  </h4>
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

For a more comprehensive guide to using the package see the [documentation](https://liminoid.io/reference/react/) or browse the [examples](examples).

<!-- prettier-ignore -->
```jsx
// easiest to use ES6 imports from the UNPKG CDN
import Liminoid from 'https://unpkg.com/liminoid-react';

const placeholder = `
from sklearn import svm
from sklearn import datasets
clf = svm.SVC()
X, y = datasets.load_iris(return_X_y=True)
clf.fit(X, y)
clf.predict(X[0:1])
`;

<Liminoid
  packages={['scikit-learn']}
  console={true}
  edit={true}
  scope={false}
  onResult={res => console.log(res)}
  code={placeholder}
/>
```

## `props`

<!-- prettier-ignore -->
|  name  | default |   values  |  description  |
| :--------: | :-----: | :------: | :---------: |
| `packages` |  `[]`   | `Array`: [package names currently avalable](https://github.com/iodide-project/pyodide/tree/master/packages) in Pyodide   |  Uses Pyodide's [`loadPackage()`](https://pyodide.readthedocs.io/en/latest/using_pyodide_from_webworker.html#loading-packages) to preload packages   |
|  `console`  | `true`  | `Boolean`: `true` or `false` | `false` disables the HTML console which displays the results. |
|   `edit`   | `true`  |  `Boolean`: `true` or `false`   |  `false` disables the `textarea` input while still allowing the embedded code to be run. |
|   `scope`   | `false`  |  `Boolean`: `true` or `false`   |  `true` creates a new `Repl()` for the component with its own Python context. `false` shares the `Repl()` context between editors globally, i.e. one editor can reference variables from another. |
|   `onResult`   | `undefined`  |  `Function`: [function expression][f_exp] or reference  |  callback function that receives the results when the code is run. `(res, err) => { ... }` |
|   `code`   | `undefined`  |  `String` or `template literal` | placeholder code that populates the editor component on initialization. |

[f_exp]: https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

## Contributing/Requests

Open an [issue](https://github.com/liminoid/liminoid-react/issues) or post a message in the [chatroom](https://discord.gg/s6WQ9RS). If you would like to contribute to the project (code, documentation, tutorials, etc.) see the [contributing guide](https://liminoid.io/contributing/) for how to get started 🙌

## Citing

While not required, when using (or extending) Liminoid for academic work, citations are appreciated 🙏

```
@software{liminoid,
  author = {Jonathan Dinu},
  title = {Liminoid: Web assembly toolkit for building local-first analytics applications},
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
