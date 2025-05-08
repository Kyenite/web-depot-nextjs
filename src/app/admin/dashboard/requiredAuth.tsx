// components/RequireAuth.tsx
'use client';

import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

import Dashboard from './pages/Dashboard';

export default function RequireAuth() {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn();
    }
  }, [status]);

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'authenticated') {
    return <Dashboard />;
  }
}
