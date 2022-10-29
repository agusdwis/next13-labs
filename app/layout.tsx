import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      Header Menu
      <div>{children}</div>
    </div>
  );
}
