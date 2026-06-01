"use client";

import { useState } from "react";
import { NoteCard } from "@/components/notes/NoteCard";
import { MOCK_NOTES } from "@/lib/data";

export default function NotesPage() {
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  if (MOCK_NOTES.length === 0) {
    return (
      <div className="p-8 text-white">
        <h1 className="text-2xl font-bold">All notes</h1>
        <p className="mt-6 text-zinc-400">No notes yet.</p>
      </div>
    )
  }

  return (
    <div className="p-8 text-white">

             <div className="mb-6">
        <h1 className="text-2xl font-bold">All Notes</h1>
        <p className="text-sm text-zinc-400">{MOCK_NOTES.length} notes</p>
      </div>

          <div className="flex flex-col gap-3 max-w-2xl">
        {MOCK_NOTES.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onClick={() => setActiveNoteId(note.id)}
          />
        ))}
      </div>

    </div>
  );
}
    