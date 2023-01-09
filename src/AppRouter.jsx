import { Route, Routes } from "react-router-dom"
import { Home } from './pages/Home'
import { PokemonDetailPage } from './pages/PokemonDetailPage'
import { SearchPage } from './pages/SearchPage'
import { Navigation } from './components/Navigation'

export const AppRouter = () => {

    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<Home />}/>
            <Route path="pokemon/:id" element={<PokemonDetailPage />}/>
            <Route path="search"  element={<SearchPage />}/>
        </Route>

        <Route path="*" element={<Navigation to='/' />}/>
      </Routes>
    )
  }
  