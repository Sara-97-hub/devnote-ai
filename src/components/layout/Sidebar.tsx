"use client";

import Link from  "next/link";
import { usePathname } from "next/navigation";
import  { FileText, Code2, BookOpen, Settings, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { id: "notes", label : "Notes", icon : FileText, href: "/notes"},
    { id: "snippets", label : "Snippets", icon : Code2, href: "/snippets"},
    { id: "journal", label: "Journal", icon: BookOpen, href: "/journal"},
    {id: "settings", label: "Settings", icon: Settings, href: "/settings"},
]

export  function Sidebar() {
    const pathname = usePathname(); 

    return (
    <aside className="flex h-screen w-64 flex-col border-e border-zinc-800 bg-zinc-900 p-4 text-white">

        <div className="mb-8">
            <h2 className="text-2xl font-bold">DevNote AI</h2>
        </div>

    <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium transition 
    hover:bg-indigo-500">
        <Plus className="h-4 w-4" />
        New Note
    </button>

    <nav className="flex flex-col gap-1">
    {NAV_ITEMS.map(({id, label, icon: Icon, href}) => (
        <Link
        key={id}
        href={href}
        className={cn(
            "flex items-center gap-3 rounded-lg px-4 py-2 text-sm transition",
            pathname === href ? "bg-zinc-800 text-white"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        )}
            >
            <Icon className="h-4 w-4" />
            {label}
        </Link>
    ))}
    </nav>
    </aside>
    );
}   