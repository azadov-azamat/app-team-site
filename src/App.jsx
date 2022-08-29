import React from "react"
import {Navigate, Route, Routes} from "react-router"
import Layout from "./layout/index.jsx"
import {defaultRoute} from "./utils/constants.js"
import routes from "./router/index.js"

function App() {

    return (
        <Layout>
            <Routes>
                {
                    routes?.map(route =>
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component/>}
                        />
                    )
                }
                <Route
                    exact
                    path='/'
                    element={<Navigate to={defaultRoute} replace/>}
                />
            </Routes>
        </Layout>
    )
}

export default App