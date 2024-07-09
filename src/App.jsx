import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers/routes';
import DefaultLauout from './layout/DefaultLayout/DefaultLayout';
import Mouse from './components/mouse/Mouse';
import { useContext } from 'react';
import { ThemeContext } from './context/theme-context';

function App() {
    const { theme, hanldeChangeTheme } = useContext(ThemeContext);
    return (
        <Router>
            <div className="App" data-theme={theme}>
                <Mouse />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLauout;

                        let Page = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
