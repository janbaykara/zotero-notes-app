import Koa from "koa"

/**
 * Serve client and provide data from external services
 *
 * @class server
 */
export default class Server {
  public app: Koa

  constructor() {
    this.app = new Koa()
    this.routes()
  }

  public atPort(port: number = 3000) {
    this.app.listen(port)
    console.log(`Server running at http://localhost:${port}`)
  }

  private routes() {
    this.app.use(async ctx => {
      ctx.body = "Hello world!"
    })
  }
}
