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

<!-- https://www.tsunagujapan.com/th/7-must-try-japanese-don-rice-bowl-dishes/ ที่มา -->
    <!-- <div>
        <table>
        <tr>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/03/pixta_23292670_S_%E3%81%8B%E3%81%A4%E4%B8%BC.jpg" height="350px" width="500px">
                <h2>คัตสึด้ง</h2>
                <h2>119 THB.</h2>
            </td>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/03/pixta_28796918_S_%E7%89%9B%E4%B8%BC.jpg" height="350px" width="500px">
                <h2>กิวด้ง</h2>
                <h2>129 THB.</h2>
            </td>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/03/pixta_28796924_S_%E8%A6%AA%E5%AD%90%E4%B8%BC.jpg" height="350px" width="500px">
                <h2>โอยาโกะด้ง</h2>
                <h2>109 THB.</h2>
            </td>
        </tr>
        <tr>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/02/3723645846_09b0961fee_b.jpg" height="350px" width="500px">
                <h2>อุนาด้ง</h2>
                <h2>129 THB.</h2>
            </td>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/02/4348325737_ae3ca56189_b.jpg" height="350px" width="500px">
                <h2>บุตะด้ง</h2>
                <h2>139 THB.</h2>
            </td>
            <td>
                <img src="https://www.tsunagujapan.com/wp-content/uploads/2015/02/60439604_9e3c785232_b.jpg" height="350px" width="500px">
                <h2>ไคเซนด้ง</h2>
                <h2>169 THB.</h2>
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
            this.$router.push({ name: 'Cart', params: { tableId: this.tableId } });
           },
           async getMenus() {
            try {
                const res = await api.get('/menus/type/rice')
                this.menus = res.data
            } catch (error) {
                console.error(error)
            }
           }
       }
   }


   </script>
   
