export default function({ store, redirect }) {
    if (store.state.auth.isToken) {
        // return redirect('/');
        console.log('non authentication -----------------')
    }
}
