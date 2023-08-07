import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="flex mx-auto max-w-2xl bg-transparent">
      <Nav />

      <main className="">{children}</main>

      {/* Footer gone until I can figure out how to make it sticky */}
    </div>
  );
}
