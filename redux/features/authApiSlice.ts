import { apiSlice } from '../services/apiSlice';

interface User {
	email: string;
}

interface SocialAuth {
	state: string;
	code: string;
	provider: string;
}

interface CreateResponse {
	success: boolean;
	user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getArticles: builder.query({
			query: () => '/articles/',
		}),
		socialAuth: builder.mutation({
			query: ({ state, code, provider }) => ({
				url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json/x-www-form-urlencoded',
				},
			}),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: '/user/login/',
				method: 'POST',
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({ email, password }) => ({
				url: '/user/register/',
				method: 'POST',
				body: { email, password },
			}),
		}),
		verifyEmail: builder.mutation({
			query: ({ email }) => ({
				url: '/user/verify/',
				method: 'POST',
				body: { email },
				accept: '*/*',
			}),
		}),
		verify: builder.mutation({
			query: () => ({
				url: '/user/verify/',
				method: 'POST',
			}),
		}),
		resetPassword: builder.mutation({
			query: ({ email }) => ({
				url: '/jwt/reset_password',
				method: 'POST',
				body: { email },
			}),
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: '/jwt/registration',
				method: 'POST',
				body: { uid, token, new_password, re_new_password },
			}),
		}),
	}),
});

export const {
	useSocialAuthMutation,
	useLoginMutation,
	useRegisterMutation,
	useVerifyMutation,
	useVerifyEmailMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useGetArticlesQuery,
} = authApiSlice;
