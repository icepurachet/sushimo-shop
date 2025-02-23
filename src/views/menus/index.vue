<template>
    <div>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SVG Cart Icon</title>
    
        <div class="cart-container">
    <!-- <router-link :to="{ name: 'Cart', params: { tableId: tableId } }"> -->
        <span @click="goToCart()" class="cart-icon" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
                <path d="M2 8c-1.1 0-2 .9-2 2s.9 2 2 2h1l3.6 9.6c.3.8 1 1.4 1.9 1.4h8c.9 0 1.6-.6 1.9-1.4L21 12h1c1.1 0 2-.9 2-2s-.9-2-2-2h-4.3l-3.6-6.3C14.8 1.3 14.4 1 14 1s-.8.3-1 .7L9.4 8H2zm4.1 2L9.8 4h4.4l3.7 6H6.1zm3.4 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
            </svg>
        </span> 
    <!-- </router-link> -->
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

        <div v-if="open ==  false">
            <table>
            <tr>
                <td>
                    <img src="https://images-ext-1.discordapp.net/external/gu5SrBXEJxwj_x9PKs3GJuYvzSrUdUdjhIW7qWUwWpM/https/fit-d.com/uploads/food/1a611d3cf0d8853931cc9ea80f264a0b.jpg?format=webp&width=881&height=587" height="350px" width="500px">
                    <h2>ซูชิหน้าปลาแซลมอน</h2>
                    <h2>40 THB.</h2>
                </td>
                <td>
                    <img src="https://media.timeout.com/images/105909627/750/562/image.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้าปลามากุโระ</h2>
                    <h2>40 THB.</h2>
                </td>
                <td>
                    <img src="https://img.wongnai.com/p/1920x0/2021/06/17/c1df4aa240fa4f1ea96c31731eb8ba19.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้าปลาไหลย่างญี่ปุ่น</h2>
                    <h2>40 THB.</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2017/04/58ead7e23594f_58ead7a1433b9_1336419714.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้ากุ้งผีเสื้อ</h2>
                    <h2>30 THB.</h2>
                </td>
                <td>
                    <img src="https://chillchilljapan.com/wp-content/uploads/2020/09/shutterstock_547604971-650x513.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้าไข่กุ้ง</h2>
                    <h2>30 THB.</h2>
                </td>
                <td>
                    <img src="https://3.bp.blogspot.com/-zFsXVlu5gqM/V-4S2-x9R8I/AAAAAAAAs0w/KnfBEngtlz4nmN5T_TSfPA58c7QziwftwCLcB/s400/15.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้าไข่หวาน</h2>
                    <h2>20 THB.</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <img src="https://2.bp.blogspot.com/-l5A6oQva55Q/V-4S2IUtsWI/AAAAAAAAs0g/--NVzRrSFFkEd5BebgzLuiRNznH6tlOXACLcB/s400/11.jpg" height="350px" width="500px">
                    <h2>ซูชิหน้าปูอัด</h2>
                    <h2>20 THB.</h2>
                </td>
                <td>
                    <img src="https://chillchilljapan.com/wp-content/uploads/2020/09/shutterstock_27348049.jpg" height="350px" width="500px">
                    <h2>ซูชิโรล</h2>
                    <h2>40 THB.</h2>
                </td>
            </tr>
        </table>
        </div>
    </div>
    </template>
   <script>
   export default {
       data() {
           return {
               tableId: this.$route.params.tableId,
               open: false
           };
       },
       methods: {
           goToCart() {
            this.$router.push({ name: 'Cart', params: { tableId: this.tableId } });
           }
       }
   }
   </script>
   