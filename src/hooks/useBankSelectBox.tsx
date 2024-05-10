import endpoints from '@constants/endpoints'
import { useQuery } from '@tanstack/react-query'
import initApi from '@utils/initApi'

const useBankSelectBox = () =>
  useQuery({
    queryKey: [endpoints.bank_select_box],
    queryFn: () =>
      initApi('https://api.vietqr.io')
        .get(endpoints.bank_select_box)
        .then((res) => {
          return res.data?.data
        })
  })

export default useBankSelectBox
