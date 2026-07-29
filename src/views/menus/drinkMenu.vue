<template>
    <div>

        <div class="cart-container">
        <span @click="goToCart()" class="cart-icon" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                <path d="M2 8c-1.1 0-2 .9-2 2s.9 2 2 2h1l3.6 9.6c.3.8 1 1.4 1.9 1.4h8c.9 0 1.6-.6 1.9-1.4L21 12h1c1.1 0 2-.9 2-2s-.9-2-2-2h-4.3l-3.6-6.3C14.8 1.3 14.4 1 14 1s-.8.3-1 .7L9.4 8H2zm4.1 2L9.8 4h4.4l3.7 6H6.1zm3.4 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
            </svg>
        </span> 
    </div>

        <div>
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

        <!-- <div>
            <table>
                <tr>
                <td>
                    <img src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/61/88/8851952350161/8851952350161_1-20230103085108-.jpg" height="400px" width="400px">
                    <h2>น้ำเปล่า</h2>
                    <h2>12 THB.</h2>
                </td>
                <td>
                    <img src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/77/88/8858998571277/8858998571277_2-20240610141651-.jpg" height="400px" width="400px">
                    <h2>เป๊ปซี่</h2>
                    <h2>20 THB.</h2>
                </td>
                <td>
                    <img src="http://www.ladyissue.com/wp-content/uploads/2015/11/DDDD1.jpg" height="400px" width="400px">
                    <h2>น้ำมะนาว</h2>
                    <h2>30 THB.</h2>
                </td>
                <td>
                    <img src="https://png.pngtree.com/png-vector/20240403/ourlarge/pngtree-iced-tea-with-lemon-png-image_12261174.png" height="400px" width="400px">
                    <h2>ชามะนาว</h2>
                    <h2>30 THB.</h2>
                </td>
                </tr> 
                <tr>
                    <td>
                        <img src="https://st.bigc-cs.com/public/media/catalog/product/23/88/8858672700023/8858672700023_3_1.jpg" height="400px" width="400px">
                        <h2>ชาเขียว</h2>
                        <h2>30 THB.</h2>
                    </td>
                    <td>
                        <img src="https://png.pngtree.com/png-clipart/20240731/original/pngtree-putting-ice-cubes-in-empty-glass-on-dark-background-png-image_15668930.png" height="400px" width="400px">
                        <h2>น้ำแข็งเปล่า</h2>
                        <h2>5 THB.</h2>
                    </td>
                </tr>
            </table>
        </div> -->
    </div>
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
            this.$router.push({ name: 'Cart', params: { tableId: this.tableId } });
           },
           async getMenus() {
            try {
                const res = await api.get('/menus/type/drink')
                this.menus = res.data
            } catch (error) {
                console.error(error)
            }
           }
       }
   }


   </script>
