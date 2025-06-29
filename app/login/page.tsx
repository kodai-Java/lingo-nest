'use client'

import { useState } from 'react'
import { login } from '../../lib/cognito'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    try {
      const { idToken } = await login(email, password)
      setToken(idToken)
      localStorage.setItem('idToken', idToken)
      alert('ログイン成功！')
    } catch (err: any) {
      setError(err.message || '認証に失敗しました')
    }
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p>トークン取得済み！</p>}
    </main>
  )
}
