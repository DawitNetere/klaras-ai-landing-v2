import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact form
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject?: string
  message: string
  created_at?: string
  status?: 'new' | 'read' | 'responded'
}

// Function to submit contact form
export const submitContactForm = async (formData: Omit<ContactSubmission, 'id' | 'created_at' | 'status'>) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        ...formData,
        status: 'new'
      }
    ])
    .select()

  if (error) {
    throw error
  }

  return data
}
