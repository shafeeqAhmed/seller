<template lang="html">
    <!-- <main class="ps-main"> -->
        <!-- <div class="ps-main__wrapper"> -->
            <nuxt />
        <!-- </div> -->
    <!-- </main> -->
</template>

<script>
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import WidgetUserWelcome from "~/components/shared/widgets/WidgetUserWelcome";
import WidgetEarningSidebar from "~/components/shared/widgets/WidgetEarningSidebar";
import FooterCopyright from "~/components/shared/footers/FooterCopyright";
import MenuSidebar from "~/components/shared/menu/MenuSidebar";
import HeaderMobile from "~/components/shared/mobile/HeaderMobile";
import DrawerMenu from "~/components/shared/drawers/DrawerMenu";

export default {
    name: "dashboard",
    components: {
        DrawerMenu,
        HeaderMobile,
        MenuSidebar,
        FooterCopyright,
        WidgetEarningSidebar,
        WidgetUserWelcome,
        HeaderDashboard
    }
};
</script>

<style lang="scss" scoped></style>
