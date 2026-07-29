<template>
    <div>
        <div class="admin-container">
            <h1 class="admin-title">ADMIN</h1>
            <div class="admin-divider"></div>
        </div>

        <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
        <button class="back-button" @click="goBack">←</button>

        <span @click="goToMenu()" class="button">MENUS</span>
        <span @click="goToType()" class="button">TYPES</span>
        <span @click="goToUser()" class="button">USERS</span>
    </div>
</template>

<script>
export default {
    methods: {
        goToMenu () {
            this.$router.push({ name: 'DisplayMenus' })
        },
        goToType () {
            this.$router.push({ name: 'DisplayTypes' })
        },
        goToUser () {
            this.$router.push({ name: 'DisplayUsers' })
        },
        goBack() {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>
