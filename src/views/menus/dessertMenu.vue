<template>
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
        </div>
</template>
<script>
   export default {
       data() {
           return {
               tableId: this.$route.params.tableId,
               open: false
           }
        }
   }
   </script>
