import axios from 'axios'
export default function (tab, page, limit) {
  return axios.get("https://cnodejs.org/api/v1/topics", {
    params: {
      tab: tab,
      page: page,
      limit: limit,
    }
  })
}
