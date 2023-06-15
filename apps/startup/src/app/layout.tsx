import '../styles/globals.css';
// include styles from the ui package
import '@cuuro/ui/styles.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
