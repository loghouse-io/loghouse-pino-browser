import {LoghouseClient} from "@loghouse/http-transport"

interface ILogEntry {
  message: string
  timestamp: number
  metadata?: Object
}

interface ILogEvent {
  time: number
  level: number
  msg?: string
  [key: string]: any
}

interface ILoghousePinoOptions {
  accessToken: string
  bucketId: string
  enabledConsoleOutput: boolean
}

export function writeBrowserLog(options: ILoghousePinoOptions) {
  const client = new LoghouseClient({ ...options})

  return (logEvent: ILogEvent) => {
    if (options.enabledConsoleOutput) {
      console.log(logEvent)
    }

    client.log(logEventFormatter(logEvent))
  }
}

function logEventFormatter(logEvent: ILogEvent): ILogEntry {
  let metadata = (({msg, time, level, ...o}) => o)(logEvent)
  metadata.level = logEvent.level

  let message: string

  if (logEvent.msg) {
    if (typeof logEvent.msg === 'object') {
      message = JSON.stringify(logEvent.msg)
    } else {
      message = logEvent.msg
    }
  } else {
    message = 'N/A'
  }

  return {
    message,
    timestamp: logEvent.time,
    metadata
  }
}