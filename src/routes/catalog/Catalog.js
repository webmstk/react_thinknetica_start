import CatalogPage from '~/containers/CatalogPage'
import { catalogPath } from '~/helpers/routes'

export default {
  path: catalogPath(),
  component: CatalogPage,
  exact: true,
  strict: true,
}
