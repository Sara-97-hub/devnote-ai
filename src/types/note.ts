export type NoteType = "note" | "snippet" | "journal";

export type Note = {
    id: string;
    title: string;
    content: string;
    type: NoteType;
    tags: string[];
    created_at: string;
    updated_at: string;
};