'use client';
import React, { useState } from 'react';

export default function ChatAi() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnswer('');

    const res = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-goog-api-key': 'AIzaSyD1QYF3G9kIJDMQY4HOFj2yWjVvVsBIfFU',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: question,
                },
              ],
            },
          ],
        }),
      },
    );
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setAnswer((prev) => prev + decoder.decode(value));

      }
    }
  };

  // const data = JSON.parse(decoder.decode(value));
  //const answerRes = data.candidates[0].content.parts[0].text
  // setAnswer(answerRes);

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <form onSubmit={handlSubmit} className="flex">
        <textarea
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2"
          placeholder="Ask Dyarmix"
          value={question}
        />
        <button className="bg-black px-4 text-white" type="submit">
          Send
        </button>
      </form>
      {answer && <p className="mt-4 border p-2">{answer}</p>}
    </div>
  );
}
