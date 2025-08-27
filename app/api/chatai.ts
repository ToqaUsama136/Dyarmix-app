import { GoogleGenAI } from '@google/genai';
import { Dispatch, SetStateAction } from 'react';

export const ai = new GoogleGenAI({
  apiKey: 'AIzaSyD1QYF3G9kIJDMQY4HOFj2yWjVvVsBIfFU',
});

export const handlSubmit = async (
  e: React.FormEvent,
  question: string,
  setAnswer: Dispatch<SetStateAction<string>>,
) => {
  e.preventDefault();
  setAnswer('');

  for await (const chunk of await streamContent(question)) {
    setAnswer(
      (prev) =>
        prev + chunk?.candidates?.at(0)?.content?.parts?.at(0)?.text || '',
    );
  }
};

export async function streamContent(question: string) {
  const stream = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash',
    contents: [{ text: question }],
  });
  return stream;
}
