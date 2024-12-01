export default function ErrorPage({ error }: { error: string }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center rounded-2xl bg-white p-5 shadow-lg">
        Error: {error}
      </div>
    </div>
  );
}
