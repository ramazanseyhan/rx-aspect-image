# rx-aspect-image

> Using images with aspect ratio intact.

[![NPM](https://img.shields.io/npm/v/rx-aspect-image.svg)](https://www.npmjs.com/package/rx-aspect-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save rx-aspect-image
```

## Usage

```jsx
import React from 'react'

import { AspectImage } from 'rx-aspect-image'
import 'rx-aspect-image/dist/index.css'
import styles from './index.module.css'
const App = () => {
  return (
    <div className={styles.container}>
      <AspectImage
        src='https://picsum.photos/400/300'
        aspectRatio='4/3'
        alt='image-alt'
      />

      <AspectImage
        src='https://picsum.photos/800/450'
        aspectRatio='16/9'
        alt='image-alt'
      />

      <AspectImage
        src='https://picsum.photos/500'
        aspectRatio='1/1'
        alt='image-alt'
      />

      <AspectImage
        src='https://picsum.photos/1500/500'
        aspectRatio='3/1'
        alt='image-alt'
      />

      <AspectImage
        src='https://picsum.photos/600/400'
        aspectRatio='3/2'
        alt='image-alt'
      />
    </div>
  )
}

export default App

```

## License

MIT © [](https://github.com/)
