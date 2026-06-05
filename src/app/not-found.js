/**
 * Fallback route rendered by Next.js when a page or product cannot be found.
 */
export default function NotFound() {
  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
}
