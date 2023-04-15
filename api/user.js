const baseUrl = '/user'
export default (axios) => ({
  /**
   * Fetch User by Id
   *
   * @param {Object} requestData
   * @param {Object} requestData.data
   *
   * @param {Object} urlData
   * @param {Object} urlData.id
   *
   * @returns {Promise}
   */
  getUserById(requestData = {}, urlData = {}) {
    const requestConfig = {
      method: 'get',
      url: `${baseUrl}/${urlData.id}`,
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
