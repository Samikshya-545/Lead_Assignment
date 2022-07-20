import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "user": 'Anonymous',
    "isClicked": false ,
    "count": 0
}

export const AuthSlice = createSlice({
    name: 'AuthSliceState',
    initialState,
    reducers: {
        // SuccessfullOtpVerifiedAction : (state, action) => {
        //     state.user = action.payload;
        // },
        // setFirebaseTokenAction : (state, action) => {
        //     state.RushUItoken = action.payload;
        // },
        // isClickedAction : (state, action) => {
        //     state.isClicked = action.payload
        // },
        // incrementAction : (state, action) => {
        //     state.count += action.payload;
        // }
        setUserAction : (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setUserAction } = AuthSlice.actions;

export default AuthSlice.reducer;


// export const SuccessfullOtpVerified = (user) => {
//     return {
//         type: 'SuccessfullOtpVerified',
//         user: user
//     }
// }

// export const FirebaseConfirmationResult = (confirmationResult) => {
//     return {
//         type: 'confirmationResult',
//         confirmationResult: confirmationResult
//     }
// }

// export const isClicked = (isClicked) => {
//     return {
//         type: 'isClicked',
//         isClicked: isClicked
//     }
// }