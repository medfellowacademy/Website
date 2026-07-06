'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText } from "lucide-react";

export interface ClusterLink {
  label: string;
  href: string;
  type: "guide" | "blog";
}

export default function TopicClusterLinks({ title, links }: { title: string; links: ClusterLink[] }) {
  const pathname = usePathname();

  return (
    <div className="card p-5 lg:sticky lg:top-24">
      <h3 className="text-[0.8125rem] font-bold uppercase tracking-wide text-[#15401E] mb-3">{title}</h3>
      <div className="space-y-1">
        {links.map((l) => {
          const active = pathname === l.href;
          const Icon = l.type === "guide" ? BookOpen : FileText;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`flex items-start gap-2.5 px-3 py-2.5 rounded-md text-[0.8125rem] leading-snug transition-colors ${
                active ? "bg-[#e8f2ea] text-[#15401E] font-semibold" : "text-[#374151] hover:bg-[#F9FAFB]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{l.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
