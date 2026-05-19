import { MOCK_NOTES } from "@/lib/data";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NotePage({ params }: Props) {
  const { id } = await params;

  const note = MOCK_NOTES.find(
    (note) => note.id === id
  );

 return (
  <div className="p-6 text-white space-y-4">
    <div>
      <p className="text-sm text-zinc-400 uppercase">
        {note?.type}
      </p>

      <h1 className="text-3xl font-bold">
        {note?.title}
      </h1>
    </div>

    <p className="text-zinc-300">
      {note?.content}
    </p>

    <div className="flex gap-2 flex-wrap">
      {note?.tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-sm rounded-md bg-zinc-800 text-zinc-300"
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
);
  
}