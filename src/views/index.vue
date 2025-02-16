<template>
    <h1>SUSHIMO</h1>
    <div class="divider"></div>
    <div class="container">
        <!-- <a href="/admin" class="button">ADMIN</a>
        <a href="/:tableId/menus" class="button">CUSTOMER</a> -->
        <span @click="goToAdmin()" class="button">ADMIN</span>
        <span @click="goToCustomer()" class="button">CUSTOMER</span>
    </div>
</template>

<script>
export default {
    methods: {
        goToAdmin () {
            this.$router.push({ name: 'AdminMenu' })
        },
        goToCustomer () {
            const id = prompt("Enter your table number") 
            this.$router.push({ name: 'GetMenu', params: { tableId: id } })
        }
    }
}
</script>
