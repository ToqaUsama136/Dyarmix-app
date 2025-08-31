import { useRouter } from 'next/router';
export default function Contact() {
  const router = useRouter();
  const { Id } = router.query;
  return (
    <div>
      <p>{Id}</p>
      <h2>Contact</h2>
    </div>
  );
}
