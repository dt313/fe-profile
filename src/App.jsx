import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routers/routes';
import DefaultLauout from './layout/DefaultLayout/DefaultLayout';
import Mouse from './components/mouse/Mouse';

function App() {
    return (
        <Router>
            <div className="App">
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
