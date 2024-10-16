export const metadata = {
  title: 'Hojiakbar',
  description: 'Portfolio',
  icons: {
    icon: '../assets/kh.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="../assets/kh.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
