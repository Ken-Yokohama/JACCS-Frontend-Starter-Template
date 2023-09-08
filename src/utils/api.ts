import axios from 'axios'

interface RequestFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (url: string, options?: { method?: string; body?: object }): Promise<any>
}

export const request: RequestFunction = async (url: string, options = {}) => {
  let method = 'get'
  if (options.method) {
    method = options.method.toLowerCase()
  }

  let body = null
  if (options.body) {
    body = options.body
  }

  try {
    // Do Request

    if (method === 'get') {
      const response = await axios.get(import.meta.env.VITE_API_URL + url, {
        // headers: {
        //   'x-access-token': getToken('jaccsTKN')!,
        //   email: getToken('Email')!
        // }
      })
      return response.data
    }

    if (method === 'post') {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + url,
        body,
        {
          // headers: {
          //   'x-access-token': getCookie('AuthToken')!,
          //   email: getCookie('Email')!
          // }
        }
      )
      return response.data
    }
  } catch (err) {
    // handle network error here
    if (err instanceof TypeError) {
      const networkError = `${err}`.toLowerCase()
      if (networkError.indexOf('networkerror') !== -1) {
        throw new Error('Check Internet Connectivity')
      }
    }
    // if (err?.response?.data) {
    //   throw err.response.data
    // }
    // if (err?.message) {
    //   throw err.message
    // }
    // throw JSON.parse(err)
  }
}
