'use client'

interface GlobalErrorProps {
  error: Error
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang='en'>
      <head>
        <title>My App</title>
      </head>
      <body>
        <h1>Something went wrong!</h1>
        <p>The following error occured: {error.message}</p>
        <button onClick={() => reset()}>Recover</button>
      </body>
    </html>
  )
}
