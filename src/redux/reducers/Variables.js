// export const getAllCategories = createAsyncThunk('category/getAllCategories', async (query, {
//     rejectWithValue,
//     dispatch
// }) => {
//     try {
//         const response = await http_no_auth.get("v1/auth/all-categories", {
//             params: query
//         })
//         if (response.data?.data === null) return rejectWithValue(response.data.message)
//         return response.data
//     } catch (error) {
//         const error_status = error.response?.status
//         if (error_status === 404) window.location.replace("/not_found/404")
//         if (error_status === 401) dispatch(auth.handleRefreshLogin({refreshToken: localStorage.getItem(REFRESH_TOKEN)}))
//         return rejectWithValue(error.message)
//     }
// })

import {createSlice} from "@reduxjs/toolkit"

export const variablesSlice = createSlice({
    name: 'variables',
    initialState: {
        categories: [
            {label: 'frontend', value: 'frontend'},
            {label: 'backend', value: 'backend'},
            {label: 'fullstack', value: 'fullstack'}
        ],
        socials: [
            {id: 1, imgLink: ''}
        ],
        current_page: null, // 0 page
        count_item: null, // 12
        total_elements: null, // 280
        isLoading: false
    },
    reducers: {},
    extraReducers: {}
})

export const {} = variablesSlice.actions
export default variablesSlice.reducer