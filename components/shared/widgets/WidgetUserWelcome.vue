<template lang='html'>
    <div class="ps-block--user-wellcome">
        <div class="ps-block__left">
            <img src="~/static/img/user/admin.jpg" alt="" />
        </div>
        <div class="ps-block__right">
            <p>
                Hello,<a href="#">Soho Store</a>
            </p>
        </div>
        <div class="ps-block__action">
            <a 
            @click="logout"
            href="#">
                <i class="icon-exit"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WidgetUserWelcome',
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.push('/account/login');
        }
    }
};
</script>

<style lang='scss' scoped>

</style>
