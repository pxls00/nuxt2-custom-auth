const baseUrl = '/login'
export default (axios) => ({
  /**
   * Login
   *
   * @param {Object} requestData
   * @param {Object} requestData.data
   * @param {String} requestData.data.password
   * @param {String} requestData.data.phone
   * @param {Number} requestData.data.fromuser
   *
   * @param {Object} urlData
   *
   * @returns {Promise}
   */
  login(requestData = {}, urlData = {}) {
    const requestConfig = {
      method: 'post',
      url: `${baseUrl}/`,
      ...requestData,
    }

    return new Promise((resolve, reject) => {
      axios(requestConfig)
        .then((data) => {
          resolve(data.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
})
