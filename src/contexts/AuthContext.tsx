import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { useQueryClient } from '@tanstack/react-query'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Keys from '@constants/Keys';

const AuthContext = createContext<{
  onLogin: () => void
  signOut: () => void
  onSetToken: (token: string) => Promise<void>
  isLogged: boolean
  onLogout: () => void
  jobRole: string | null
  onSetJobRole: (role) => void
}>({
  onLogin: () => {},
  signOut: () => {},
  onLogout: () => {},
  onSetToken: () => Promise.resolve(),
  isLogged: false,
  onSetJobRole: () => {},
  jobRole: null
})

type LoginParams = {
  tenantCode: string
  username: string
  password: string
}

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null)
  const onLogin = async (variables: LoginParams) => {}
  const signOut = () => {}

  const onLogout = useCallback(async () => {
    await AsyncStorage.removeItem(Keys.BAMBOO_SHIP_TOKEN)
    // toggle()
    setToken(null)
    try {
    } catch (error) {}
  }, [])

  const onSetToken = (token: string) => {
    setToken(token)
  }

  const value = useMemo(
    () =>
      ({
        onLogin,
        signOut,
        isLogged: token !== null,
        onLogout,
        token,
        onSetToken
      } as any),
    [onLogout, token]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export default Provider
