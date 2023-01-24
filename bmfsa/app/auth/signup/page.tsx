
import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'

export default function Page() {
    return (
      <h1 className="text-3xl font-bold underline">
       <button>Signup</button> 
      </h1>

    )
  }

  const supabase = createClient(
    'process.env.NEXT_PUBLIC_SUPABASE_URL',
    'process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY',
  )
  
  const App = () => (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={['google', 'facebook', 'twitter']} 
    />
  )