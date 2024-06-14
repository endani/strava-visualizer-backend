import { RequestHandler } from 'express'
import * as core from 'express-serve-static-core'

export type AsyncRequestHandler<
  P = core.ParamsDictionary,
  ResBody = {},
  ReqBody = {},
  ReqQuery = core.Query
> = (
  ...args: Parameters<RequestHandler<P, ResBody, ReqBody, ReqQuery>>
) => Promise<void>

export type expressAsyncHandler = <
  P = core.ParamsDictionary,
  ResBody = {},
  ReqBody = {},
  ReqQuery = core.Query
>(
  handler: AsyncRequestHandler<P, ResBody, ReqBody, ReqQuery>
) => RequestHandler<P, ResBody, ReqBody, ReqQuery>

export type ErrorResponse = {
  code: number
  message: string
}
