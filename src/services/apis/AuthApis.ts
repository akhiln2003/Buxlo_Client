import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios";
import { UserApiEndPoints } from "../endPoints/UserEndPoints";
import {
  InewUserData,
  IresendOtpData,
  IsignInData,
  IverifyOtpData,
} from "@/@types/interface/IuserApisQuery";
import { MentorApiEndPoints } from "../endPoints/MentorEndPoints";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_AUTH_API_URl }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    ///////////////////////////////--User--///////////////////////////////

    // signUp new
    signUpUser: builder.mutation({
      query: (newUser: InewUserData) => ({
        url: UserApiEndPoints.signUp,
        method: "POST",
        data: newUser,
      }),
    }),

    // signUp new user Otp verification
    verifyUser: builder.mutation({
      query: (data: IverifyOtpData) => ({
        url: UserApiEndPoints.verifyOtp,
        method: "POST",
        data: data,
      }),
    }),

    // Resend OTP
    resendOtpUser: builder.mutation({
      query: (data: IresendOtpData) => ({
        url: UserApiEndPoints.resendOtp,
        method: "POST",
        data: data,
      }),
    }),

    // signIn
    signInUser: builder.mutation({
      query: (data: IsignInData) => ({
        url: UserApiEndPoints.signIn,
        method: "POST",
        data: data,
      }),
    }),

    // singOut
    signOutUser: builder.mutation({
      query: () => ({
        url: UserApiEndPoints.signOut,
        method: "POST",
      }),
    }),

    // forgotPassword  user
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: UserApiEndPoints.forgotPassword,
        method: "POST",
        data: data,
      }),
    }),

    // set new password user
    setNewPassword: builder.mutation({
      query: (data) => ({
        url: UserApiEndPoints.setNewPassword,
        method: "POST",
        data: data,
      }),
    }),

    ///////////////////////////////--User end--/////////////////////////////

    ///////////////////////////////--Mentor--///////////////////////////////

    // signUp
    signUpMentor: builder.mutation({
      query: (newUser: InewUserData) => ({
        url: MentorApiEndPoints.signUp,
        method: "POST",
        data: newUser,
      }),
    }),

    // signUp Otp verification
    verifyMentor: builder.mutation({
      query: (data: IverifyOtpData) => ({
        url: MentorApiEndPoints.verifyOtp,
        method: "POST",
        data: data,
      }),
    }),

    // Resend OTP
    resendOtpMentor: builder.mutation({
      query: (data: IresendOtpData) => ({
        url: MentorApiEndPoints.resendOtp,
        method: "POST",
        data: data,
      }),
    }),

    // singOut
    signOutMentor: builder.mutation({
      query: () => ({
        url: MentorApiEndPoints.signOut,
        method: "POST",
      }),
    }),

    // signIn
    signInMentor: builder.mutation({
      query: (data: IsignInData) => ({
        url: MentorApiEndPoints.signIn,
        method: "POST",
        data: data,
      }),
    }),

    ///////////////////////////////--Mentor end--///////////////////////////
  }),
});

// Export the hook directly from the API slice
export const {
  // User
  useSignUpUserMutation,
  useVerifyUserMutation,
  useResendOtpUserMutation,
  useSignInUserMutation,
  useSignOutUserMutation,
  useForgotPasswordMutation,
  useSetNewPasswordMutation,

  // Mentor
  useSignUpMentorMutation,
  useVerifyMentorMutation,
  useResendOtpMentorMutation,
  useSignInMentorMutation,
  useSignOutMentorMutation,
} = userApi;
