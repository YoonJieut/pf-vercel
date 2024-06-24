export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="MainRoot"
      className="w-screen h-screen overflow-hidden flex flex-col p-2 space-y-[10px]"
    >
      {children}
    </div>
  );
}
