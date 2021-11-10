import { Route, Switch } from 'react-router-dom';
import { useCategories } from '../../hooks/categories';
import { HomePage, CartPage, Orders, Login, RegistrationForm, Product, Category } from '../pages';



const Routes: React.FC = () => {
  const { data: categories } = useCategories()
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
      <Route path="/orders" component={Orders} />
      <Route path="/register" component={RegistrationForm} />
      <Route exact path="/product/:id" component={Product} />
      {
        categories && categories.map((category:any) => {
          return <Route exact path={`/products/${category}`}>
            <Category productType={category} />
          </Route>
        })
      }
    </Switch>
  )

}



export default Routes
