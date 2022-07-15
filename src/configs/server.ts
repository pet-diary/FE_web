const env = process.env.NODE_ENV || 'development'

// const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URI || ''
// const baseApiUrl = 'https://ssonda.live/'
const baseApiUrl = 'http://localhost:8888/ssonda-dev/'

type TEnv = {
  development: TConfig
  production: TConfig
}

type TConfig = {
  baseApiUrl: string
  environment: string
}

const configEnv: TEnv = {
  development: {
    baseApiUrl,
    environment: 'development'
  },
  production: {
    baseApiUrl,
    environment: 'production'
  }
}

const configs: TConfig = configEnv[env]

export default configs
