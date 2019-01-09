export interface Config {
  env?: string
  appRoot?: string
  port: number
  mysql: Mysql
}

export interface Mysql {
  host: string
  port: number
  username: string
  password: string
  database: string
}
