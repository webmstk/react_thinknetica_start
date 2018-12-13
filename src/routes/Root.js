import CatalogPage from '~/containers//CatalogPage'
import { rootPath } from '~/helpers/routes'

export default {
  path: rootPath(),
  component: CatalogPage,
  exact: true,
  strict: true,
}
