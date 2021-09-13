import HomePage from '../pages/HomePage';
import AddIngredientPage from '../pages/AddIngredientPage';
import ShoppingListPage from '../pages/ShoppingListPage';
import RecipeSearchPage from '../pages/RecipeSearchPage';

export const routes = [
  {
    path: '/',
    Component: HomePage,
    exact: true,
  },
  {
    path: '/add-ingredient',
    Component: AddIngredientPage,
    exact: true,
  },
  {
    path: '/shopping-list',
    Component: ShoppingListPage,
    exact: true,
  },
  {
    path: '/recipe-search',
    Component: RecipeSearchPage,
    exact: true,
  },
];
