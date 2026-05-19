"use client";
import { MOCK_NOTES } from "@/lib/data";
import { NoteCard } from "@/components/notes/NoteCard";

export default function Home() {
  return (

    <div className="p-8 text-white">

    <div className="mb-8">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      <p className="mt-2 text-zinc-400">
        Manage your coding notes and AI workflows.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
  {MOCK_NOTES.map((note) => (
    <NoteCard
      key={note.id}
      note={note}
    />
  ))}
</div>
    </div>
  );
}