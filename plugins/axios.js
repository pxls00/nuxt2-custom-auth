export default ({ $axios, env }) => {
  $axios.onRequest(config => {
    config.headers.common[env.APP_API_HEADERS_API_KEY] = env.APP_API_HEADERS_API_KEY_VALUE;
  });
}