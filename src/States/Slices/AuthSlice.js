import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    "leadID": null,
    "authKey": ''
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
        setLeadIDAction : (state, action) => {
            state.leadID = action.payload;
        },
        setAuthKeyAction: (state, action) => {
            state.authKey = action.payload
        }
    }
})

export const { setLeadIDAction, setAuthKeyAction } = AuthSlice.actions;

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