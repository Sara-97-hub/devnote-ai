import type { Note } from "@/types/note";

export const MOCK_NOTES: Note[] = [
    {
        id: "1",
        title: "React hooks cheatsheet",
        content: "useState, useEffect, useCallback, useMemo...",
        type: "note",
        tags: ["react", "hooks"],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "2",
        title: "Fetch data from API",
        content: "async function getData() { const res = await fetch(...) }",
        type: "snippet",
        tags: ["async", "fetch"],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "3",
        title: "Week 1 - learning Next.js",
        content: "Today I learned about App Router ad how layout works...",
        type: "journal",
        tags: ["nextjs", "learning"],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
];