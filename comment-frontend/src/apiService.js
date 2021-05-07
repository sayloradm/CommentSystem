import axios from 'axios'

export default class ApiService {
  constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:5000/api',
      // For production
      // Also add "start": "ENV_PATH=./.env.production cross-env NODE_ENV=production node server.js",
      // To backend package.json in scripts
      //baseURL: 'https://backend-309717.wm.r.appspot.com/api',
      responseType: "json"
    })
  }

  getComments = async () => {
    return this.http.get(`/comments`)
  }

  getReplies = async (comment_id) => {
    return this.http.get(`/comments/replies/${comment_id}`)
  }

  storeComment = async (comment) => {
    return this.http.post(`/comments`, comment)
  }

  updateComment = async (comment) => {
    return this.http.put(`/comments/edit/${comment.id}`, comment)
  }

  deleteComment = async (comment_id) => {
    return this.http.delete(`/comments/${comment_id}`)
  }

  addLike = async (comment_id) => {
    return this.http.put(`/comments/likes/${comment_id}`)
  }


}
