export default function({ store, redirect, route }) {

    if (!store.state.auth.isLoggedIn) {
        if (route.path !== '/account/login' && route.path !== '/account/register'
            && route.path !== '/account/rest' && route.path !== '/account/forgot-password'
            && route.path !== '/account/reset'
            && route.path !== '/email/verify'
            // && !route.query.hasOwnProperty('expires')
            // && !route.query.hasOwnProperty('signature')
        ) {
        return redirect('/account/login');
        }
    }
}
