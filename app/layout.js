import "./globals.css";

export const metadata = {
  title: "Torque Block — Premium Superbike Tyres | Michelin · Pirelli · Metzeler",
  description:
    "India's #1 superbike tyre specialist. Buy Michelin, Pirelli, Metzeler, Bridgestone genuine tyres online. Expert advice, same-day dispatch, free fitting. WhatsApp order now.",
  keywords: "superbike tyre india, michelin power 6, pirelli diablo rosso iv, metzeler sportec, bridgestone battlax, sport tyre shop india",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Playfair+Display:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#FAF9F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
