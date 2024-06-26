const sendDiscordMessage = async (name, email, msg) => {
  const body = new FormData()
  !!name && body.append('username', name)

  const content = `
**Name:** ${name}
**Email:** ${email}
**Message:** ${msg}
`

  body.append('content', content)

  try {
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      body,
    })
    if (!response.ok) return null
    return response
  } catch (err) {
    console.error('There was a problem with the fetch operation:', err)
    return null
  }
}

export default sendDiscordMessage
