<template>
    <div class="container">
      <div>
        <h1>SUSHIMO</h1>
        <div class="divider"></div>
      </div>
  
        <div v-if="open" class="confirm-container">
            <div v-if="!confirmed" class="image-container">
                <img src="https://www.scanmeseescore.com/images/s1.png" class="qr-code" />
                <button class="confirm-button" @click="confirmPayment">ยืนยันการชำระเงิน</button>
            </div>
            <h2 v-else class="thank-you">ขอบคุณค่ะ</h2>
        </div>
  
      <div class="bottom-buttons" v-if="!open">
        <router-link :to="{ name: 'GetMenu', params: { tableId: tableId } }">
          <span class="button">หน้าหลัก</span>
        </router-link>
        <span class="button pay-button" @click="pay">จ่ายเงิน</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableId: this.$route.params.tableId,
        open: false,
        confirmed: false,
      }
    },
    methods: {
      pay() {
        this.open = true
      },
      confirmPayment() {
        this.confirmed = true
      },
    },
  }
  </script>