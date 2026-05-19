import type { Note } from "@/types/note";

const TYPE_COLORS = {
    note: "text-blue-400",
    snippet: "text-green-400",
    journal: "text-purple-400",
};

type Props = {
    note: Note;
    onClick?: () => void;
};

export function NoteCard({ note, onClick}: Props) {
    return (
        <div 
        onClick={onClick}
        className="cursor-pointer rounded-xl border border-zinc-800 bg-zinc-900 p-4 transition hover:border-zinc-700 hover:bg-zinc-800"
        >
             <span className={`text-xs font-medium ${TYPE_COLORS[note.type]}`}>
        {note.type.toUpperCase()}
      </span>

       <h2 className="mt-1 font-semibold text-white">{note.title}</h2>

       <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
         {note.content || "No content yet..."}
       </p>

            {note.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-700 px-2 py-0.5 text-xs text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

        </div>

    );
}