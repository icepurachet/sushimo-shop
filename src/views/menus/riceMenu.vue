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
<!-- https://www.tsunagujapan.com/th/7-must-try-japanese-don-rice-bowl-dishes/ ที่มา -->
    <div>
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