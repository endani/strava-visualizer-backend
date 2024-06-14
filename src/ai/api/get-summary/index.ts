import { SummaryTypes } from '../../../types/ai'
import { cleanText } from '../../../utils/completion'
import { openai } from '../config'

export const getSummary = async ({
  model,
  prefix,
  prompt,
  maxTokens,
}: SummaryTypes): Promise<string> => {

  const messages = [{"role": "user", "content": "What's the weather like in Boston today?"}];
  const tools = [
      {
        "type": "function",
        "function": {
          "name": "get_current_weather",
          "description": "Get the current weather in a given location",
          "parameters": {
            "type": "object",
            "properties": {
              "location": {
                "type": "string",
                "description": "The city and state, e.g. San Francisco, CA",
              },
              "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
            },
            "required": ["location"],
          },
        }
      }
  ];

  const result = await openai.chat.completions.create({
    model: model,
    // prompt: `${prefix} ${prompt}\n{}`,
    // temperature: 0.7,
    // max_tokens: maxTokens,
    // top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 1,
    // stop: [';', '.', '{}'],

    messages: messages,
    tools: tools,
    tool_choice: "auto",
  })

  return cleanText(result.data.choices[0].text)
}
