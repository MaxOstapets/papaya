import "./globals.css";
import { Menu } from "../components/menu";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* TODO fin a solution for bg problem */}
      {/* <body style={{ background: "linear-gradient(hsla(234, 32%, 25%, 1), hsla(242, 30%, 16%, 1))" }}> */}
      <body style={{ background: "hsla(242, 30%, 16%, 1)" }}>
        <Menu>
          {children}
        </Menu>
      </body>
    </html>
  );
}
