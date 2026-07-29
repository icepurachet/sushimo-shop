<template>
  <div class="container">
    <div>
      <h1>SUSHIMO</h1>
      <div class="divider"></div>
    </div>

    <div class="order-container" v-if="!open">
      <div class="order-item">
        <span>1. ซูชิหน้าปลาแซลมอน</span>
        <span>x 1</span>
        <span>40 THB.</span>
      </div>
      <div class="order-item">
        <span>2. ซูชิหน้าปลาไหลย่างญี่ปุ่น</span>
        <span>x 2</span>
        <span>80 THB.</span>
      </div>
      <div class="order-item">
        <span>3. ซูชิหน้าไข่กุ้ง</span>
        <span>x 4</span>
        <span>120 THB.</span>
      </div>
      <div class="order-item">
        <span>4. ซูชิหน้าปูอัด</span>
        <span>x 4</span>
        <span>80 THB.</span>
      </div>
      <br /><br />
      <div class="order-total">
        <span>ราคารวม</span>
        <span>320 THB.</span>
      </div>
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
    };
  },
  methods: {
    pay() {
      this.open = true
    },
    confirmPayment() {
      this.confirmed = true
    },
  },
};
</script>
