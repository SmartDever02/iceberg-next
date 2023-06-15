import { ReactElement, ReactNode } from 'react';

export default function CustomLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <>{children}</>;
}
