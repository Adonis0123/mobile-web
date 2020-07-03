
import axios from 'axios'
import { Toast } from 'vant'

/* 统一请求前缀 */
const baseUrl = process.env.NODE_ENV === 'production' ? '/uduhs-web' : '/api' // vue.config.js的proxy地址,也就是api的base_url

// 超时设定
axios.defaults.timeout = 10000

/* 添加请求拦截器 */
axios.interceptors.request.use(config => {
  /* 发送请求之前做些什么 */
  // console.log(config)
  return config
}, err => {
  Toast.fail('请求超时')
  // console.log(err)
  return Promise.reject(err)
})

/* 添加响应拦截器 */
axios.interceptors.response.use(response => {
  /* 对数据做些什么 */
  const res = response.data

  /*  根据返回的code值来做不同的处理(和后端约定) */
  switch (res.code) {
    case 401:
      break
    case 404:
      if (res.message !== null) {
        Toast.fail(res.message)
      }
      break
    case 403:
      if (res.message !== null) {
        Toast.fail(res.message)
      }
      break
    case 500:
      // 错误
      if (res.message !== null) {
        Toast.fail(res.message)
      }
      break
    default:
      return res
  }

  return res
}, (err) => {
  /**
    * 对响应错误做些什么，
    * 返回状态码不为200时候的错误处理
    */

  return Promise.reject(err)
})

export const getRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'get',
    url: `${base}${url}`,
    params: params,
    headers: {
      // accessToken:
    }
  })
}

export const postRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/json'
      // accessToken:
    }
  })
}

export const putRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function(data) {
        let ret = ''
        for (const it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/json'
      // accessToken:
    }
  })
}

export const deleteRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params: params,
    headers: {
      // accessToken:
    }
  })
}

export const importRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      // accessToken:
    }
  })
}

export const uploadFileRequest = (url, params, base = baseUrl) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    params: params,
    headers: {
      // accessToken:
    }
  })
}
