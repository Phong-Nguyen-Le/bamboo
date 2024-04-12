import endpoints from '@constants/endpoints'
import { useMutation } from '@tanstack/react-query'
import { Alert } from 'react-native'
import authApi from 'services/authApi'
import rootApi from 'services/rootApi'

type LoginParams = {
  username: string
  password: string
}

type LoginResponse = {
  data: {
   
  }
}

const useLogin = () => {
  const {  isError, data, error, mutateAsync, isLoading } = useMutation({
    mutationFn: (variables: LoginParams) => {
      const endpoint = endpoints.auth_app_login
      return rootApi.post<LoginParams, LoginResponse>(endpoint, variables)
    },
    onError: (e: any) => {
    //   ToastCustom({
    //     title: e?.response?.data?.message || 'Đã có lỗi xảy ra',
    //     preset: 'error'
    //   })
    }
  })
  return {
    isLoading,
    isError,
    data,
    error,
    onLogin: mutateAsync
  }
}

export default useLogin
