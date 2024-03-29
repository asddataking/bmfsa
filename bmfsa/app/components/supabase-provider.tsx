'use client'

import { createContext, useContext, useState } from 'react'
import createClient  from '../../utils/supabase-browser'

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../../types/supabase'


type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext>()

export default function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient())

  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => useContext(Context)