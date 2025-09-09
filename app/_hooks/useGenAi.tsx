'useClint';
import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';
export const ai = new GoogleGenAI({
  apiKey: '',
});

export function useGenAi() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer('');

    for await (const chunk of await streamContent(question)) {
      setAnswer(
        (prev) =>
          prev + chunk?.candidates?.at(0)?.content?.parts?.at(0)?.text || '',
      );
    }
  };

  async function streamContent(question: string) {
    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.0-flash',
      contents: [{ text: question }],
    });
    return stream;
  }

  return { answer, handleSubmit, question, setQuestion };
}
