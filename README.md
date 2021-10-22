# react-clip-loader

> React js clip loader component

[![NPM](https://img.shields.io/npm/v/react-clip-loader.svg)](https://www.npmjs.com/package/react-clip-loader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-clip-loader
```

## Usage

```tsx
import React, { Component } from 'react'

import { Loader } from 'react-clip-loader'
import 'react-clip-loader/dist/index.css'

class Example extends Component {
  render() {
    return <Loader small={false} />
  }
}
```

## Options

| Attributes     | Description                               | type      | Defaults    |
| -------------- | ----------------------------------------- | --------- | ----------- |
| small          | Size of the loader                        | `boolean` | `false`     |
| color          | Color of the active part of loader        | `string`  | `'#2d4059'` |
| secondaryColor | Color of the remaining part of the loader | `string`  | `'#e5e5e5'` |

## Demo

You can find demo [here](https://bm45f.csb.app/)

## License

MIT © [oreste-abizera](https://github.com/oreste-abizera)
