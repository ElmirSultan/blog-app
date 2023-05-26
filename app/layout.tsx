import "./globals.css";


export const metadata = {
  title: "Blog app",
  description: "Created by Yunis Aslan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
