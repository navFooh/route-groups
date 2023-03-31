import { ReactNode } from 'react'

interface GroupLayoutProps {
  children: ReactNode
}

export default function GroupLayout({ children }: GroupLayoutProps) {
  return <div>{children}</div>
}
