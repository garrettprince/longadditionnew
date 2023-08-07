import Nav from "./Nav";
import NavUpdated from "./NavUpdated";

export default function Layout({ children }) {
  return (
    <div className="flex mx-auto max-w-2xl bg-transparent">
      {/* <Nav /> */}
      <NavUpdated />

      <main className="">{children}</main>
    </div>
  );
}
