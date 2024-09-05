import type React from 'react'
import type { PropsWithChildren } from 'react'

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="flex items-center justify-center h-screen">{children}</div>
}

export default AuthLayout