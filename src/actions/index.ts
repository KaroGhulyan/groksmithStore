import * as ProductsActionCreators from './products'
import * as UserActionCreators from './user'

export default {
  ...ProductsActionCreators,
  ...UserActionCreators
}