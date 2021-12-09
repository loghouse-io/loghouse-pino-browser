# loghouse-pino-browser

This package provides a transport for [pino][pino] that forwards browser logs to the [Loghouse][loghouse].

## Installation

```bash
$ npm install @loghouse/pino-browser
```

## Configuration

Example:

```js
const { writeBrowserLog } = require('@loghouse/pino-browser')

const logger = require('pino')({
  browser: {
    write: writeBrowserLog({
      accessToken: "${ACCESS_TOKEN}",
      bucketId: "${BUCKET_ID}",
      enabledConsoleOutput: true | false
    })
  }
})

logger.info('test log')
```

#### accessToken

Type: `String` _(required)_

Access token, found on your team's Loghouse page.

#### bucketId

Type: `String` _(required)_

Bucket id, located on your team's Loghouse page, opposite the bucket name.

#### enabledConsoleOutput

Type: `Boolean`

This parameter is responsible for outputting logs to the browser console.

[pino]: https://www.npmjs.com/package/pino
[loghouse]: https://loghouse.io/