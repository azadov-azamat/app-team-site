import React, {Suspense} from "react"
import {BrowserRouter} from "react-router-dom"
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux"
import {ToastContainer} from "react-toastify"

import App from "./App"
import {store} from "./redux/store.js"
import "./utils/bootstrap.js"

import "aos/dist/aos"
import "aos/dist/aos.css"
import 'antd/dist/antd.css';
import "./main.css"
import "react-toastify/dist/ReactToastify.css"
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import Spinner from "./components/Spinner/index.jsx"

const app = (
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </Provider>
)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(app)