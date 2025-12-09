import Head from 'next/head';
import { LayoutProps } from '../types/common';

export default function Layout({ children, title = "Hlas proti drogám" }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Bojujeme proti užívání drog" />
      </Head>
      <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100">
        <main>{children}</main>
      </div>
    </>
  );
}