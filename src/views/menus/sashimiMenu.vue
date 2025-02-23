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

  <div>
      <table>
          <tr>
          <td>
              <img src="https://img.wongnai.com/p/1920x0/2021/01/14/c5a94f813b00411899ec92608bbfbd58.jpg" height="350px" width="500px">
              <h2>ซาชิมิแซลมอน</h2>
              <h2>6 ชิ้น</h2>
              <h2>119 THB.</h2>
          </td>
          <td>
              <img src="https://img.wongnai.com/p/1920x0/2022/05/17/6ba6a12073554732ae7b718464072f6c.jpg" height="350px" width="500px">
              <h2>ซาชิมิปูอัด</h2>
              <h2>6 ชิ้น</h2>
              <h2>69 THB.</h2>
          </td>
          <td>
              <img src="https://down-th.img.susercontent.com/file/ac00d1abdb62386d58196255e7c91b94" height="350px" width="500px">
              <h2>ซาชิมิปลาทูน่า</h2>
              <h2>6 ชิ้น</h2>
              <h2>119 THB.</h2>
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