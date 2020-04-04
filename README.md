<div align="center">

  <h1>🔵🔴 <code>&lt;Liminoid /></code> 🔴🔵</h1>

<strong>Like [`react-live`](https://github.com/FormidableLabs/react-live) that can run the scientific Python stack... powered by [liminoid-js](https://github.com/liminoid/liminoid-js)</strong>

</div>

<div align="center">
  <h3>
    <a href="https://liminoid.io/guides/react/">
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

For a more comprehensive guide to using the package see the [documentation](https://liminoid.io/guides/react/) or browse the [examples](examples).

<!-- prettier-ignore -->
```jsx
// easiest to use ES6 imports from UNPKG CDN
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
|   `scope`   | `false`  |  `Boolean`: `true` or `false`   |  `false` creates a new `Repl()` for the component with its own Python context. `true` shares the `Repl()` context between editors globally, i.e. one editor can reference variables from another. |
|   `onResult`   | `undefined`  |  `Function`: [function expression][f_exp] or reference  |  `false` disables the `textarea` input while still allowing the embedded code to be run. |

[f_exp]: https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

See the [kitchen sink]() for a demo of the effects of different `prop` options and configuration.

## Contributing/Requests

Open an [issue](https://github.com/liminoid/liminoid-react/issues) or post a message in the [chatroom](https://discord.gg/s6WQ9RS).

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
