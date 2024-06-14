import { expressAsyncHandler } from "../types"

const asyncHandler: expressAsyncHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch((error) => {
    next(error)
  })
}

export { asyncHandler }
