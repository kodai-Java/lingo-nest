'use client'
import { signOut } from 'aws-amplify/auth'

export const SignoutButton = () => {
  return (
    <button
      onClick={async () => await signOut()}
      className="text-blue-600 font-medium transition-colors duration-300 hover:text-blue-300"
    >
      Logout
    </button>
  )
}
