import { profile } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-mist md:flex-row">
        <p className="font-display text-paper">{profile.name}</p>
        <p>Customer Service → Sales → Digital Solutions</p>
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
