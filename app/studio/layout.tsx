// Isolate the studio from the main site layout (no nav, fonts, etc.)
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
