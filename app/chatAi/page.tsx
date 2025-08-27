'use client';
import { handlSubmit } from '@/api/chatai';
import { useState } from 'react';
export default function ChatAi() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <form
        onSubmit={(e) => handlSubmit(e, question, setAnswer)}
        className="flex"
      >
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
