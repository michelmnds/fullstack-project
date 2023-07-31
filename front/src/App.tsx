import { RoutesMain } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"
import { AuthProvider } from "./providers/AuthProvider"

export const App = () => {
  return (
    <>
      <GlobalStyle/> 
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}


