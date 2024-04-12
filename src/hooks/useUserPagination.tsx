import endpoints from '@constants/endpoints'
import { useInfiniteQuery } from '@tanstack/react-query'
import initApi from '@utils/initApi'
import User from 'types/User'

interface UserQuery {
  skip: number
  take: number
}

const useUserPagination = (query: UserQuery) =>
  useInfiniteQuery<User[], Error>({
    queryKey: [endpoints.user_pagination, query],
    queryFn: ({ pageParam = query.skip }) => {
      return initApi('https://jsonplaceholder.typicode.com')
        .get(endpoints.user_pagination, {
          params: {
            _start: pageParam,
            _limit: query.take
          }
        })
        .then((res) => {
          return res.data
        })
    },
    initialPageParam: 0,
    getNextPageParam(_, pages) {
      const nextPage = pages.length * query.take
      return nextPage < 10 ? nextPage : undefined
    }
  })

export default useUserPagination
