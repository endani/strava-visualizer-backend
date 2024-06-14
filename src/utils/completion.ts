export const cleanText = (text: string) => {
  const REGEX = /^[\\n]*[''"]*([a-zA-Z]]*.*?)[''"]*[\\n]*$/gm

  const match = REGEX.exec(text)

  return match?.[1] || text
}

