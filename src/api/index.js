import axios from 'axios'
import qs from 'qs'
import { PREFIX_URL } from './config'
import { getSign } from './util'

export function login(name, password) {
  const url = `${PREFIX_URL}/back/login`
  let data = {
    name,
    password
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

export function getuserinfo(limit, offset, query_methed, query) {
  const url = `${PREFIX_URL}/back/userinfo`
  let data = {
    limit,
    offset,
    query_methed
  }
  if (query) {
    Object.assign(data, {
      query
    })
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

export function adminaccount(name, password) {
  const url = `${PREFIX_URL}/back/account`
  let data = {
    name,
    password
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

// 导出excel 或者备份
export function excel(maxnum, mysqldump) {
  const url = `${PREFIX_URL}/back/excel`
  let data = {
    maxnum
  }
  if (mysqldump) {
    Object.assign(data, {
      mysqldump
    })
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})), {
    responseType: 'blob'
  })
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}
// 获取客服列表
export function adminlist(limit, offset) {
  const url = `${PREFIX_URL}/back/adminlist`
  let data = {
    limit,
    offset
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}

// 获取所有订单
export function orderlist(limit, offset, query_methed, query) {
  const url = `${PREFIX_URL}/back/orderlist`
  let data = {
    limit,
    offset,
    query_methed
  }
  if (query) {
    Object.assign(data, {
      query
    })
  }
  return axios.post(url, qs.stringify(Object.assign(data, {'_sg': getSign(data)})))
  .then((res) => {
    return Promise.resolve(res)
  })
  .catch((error) => {
    return Promise.resolve({
      err_code: error.response.status,
      err_msg: error.response.status
    })
  })
}