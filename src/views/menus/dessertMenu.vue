<template>
    <div>

        <div class="cart-container">
        <span @click="goToCart()" class="cart-icon" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                <path d="M2 8c-1.1 0-2 .9-2 2s.9 2 2 2h1l3.6 9.6c.3.8 1 1.4 1.9 1.4h8c.9 0 1.6-.6 1.9-1.4L21 12h1c1.1 0 2-.9 2-2s-.9-2-2-2h-4.3l-3.6-6.3C14.8 1.3 14.4 1 14 1s-.8.3-1 .7L9.4 8H2zm4.1 2L9.8 4h4.4l3.7 6H6.1zm3.4 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
            </svg>
        </span> 
    </div>

        <h1>SUSHIMO</h1>
            <div class="divider"></div>
                <router-link :to="{ name: 'GetMenu', params: { tableId: tableId } }">
                <span class="button">ข้าวปั้น</span>
                </router-link>
                <router-link :to="{ name: 'RiceMenu', params: { tableId: tableId } }">
                    <span class="button">ข้าวด้ง</span>
                </router-link>
                <router-link :to="{ name: 'SashimiMenu', params: { tableId: tableId } }">
                    <span class="button">ซาชิมิ</span>
                </router-link>
                <router-link :to="{ name: 'DessertMenu', params: { tableId: tableId } }">
                    <span class="button">ของหวาน</span>
                </router-link>
                <router-link :to="{ name: 'DrinkMenu', params: { tableId: tableId } }">
                    <span class="button">เครื่องดื่ม</span>
                </router-link>
            </div> 

            <div class="grid-menu">
            <div v-for="(menu, index) in menus" :key="index">
                <div>
                    <img :src="menu.picture" height="100px" width="auto" />
                    <p>{{ menu.name }}</p>
                    <p>{{ menu.price }}</p>
                </div>
            </div>
        </div>

        <!-- <div v-if="open ==  false">
            <table>
                <tr>
                <td>
                    <img src="https://www.bloggang.com/data/shinnemonman/picture/1369410183.jpg" height="350px" width="500px">
                    <h2>ไอศครีมชาเขียว</h2>
                    <h2>35 THB.</h2>
                </td>
                <td>
                    <img src="https://img.wongnai.com/p/1920x0/2019/10/26/fb8d26deb44d4e1cb251bf3cd3568080.jpg" height="350px" width="500px">
                    <h2>ไอศครีมกะทิ</h2>
                    <h2>35 THB.</h2>
                </td>
                <td>
                    <img src="https://sharp-weeclub.com/wp-content/uploads/2022/08/%E0%B8%8A%E0%B8%B2%E0%B9%84%E0%B8%97%E0%B8%A22-990x510-1.jpg" height="350px" width="500px">
                    <h2>ไอศครีมชาไทย</h2>
                    <h2>35 THB.</h2>
                </td>
                </tr>  
                <tr>
                    <td>
                        <img src="https://chillchilljapan.com/wp-content/uploads/2021/08/pixta_37850788_M.jpg" height="350px" width="500px">
                        <h2>ไดฟูกุ</h2>
                        <h2>35 THB.</h2>
                    </td>
                </tr> 
            </table>
        </div> -->
</template>

<script>
   import api from '@/services/api'
   export default {
       data() {
           return {
               tableId: this.$route.params.tableId,
               open: false,
               menus: []
           };
       },
       mounted() {
        this.getMenus()
       },
       methods: {
           goToCart() {
            this.$router.push({ name: 'Cart', params: { id: this.id } });
           },
           async getMenus() {
            try {
                const res = await api.get('/menus/type/dessert')
                this.menus = res.data
            } catch (error) {
                console.error(error)
            }
           }
       }
   }


   </script>
