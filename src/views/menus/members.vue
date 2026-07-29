<template>
    <div class="payment-page">
      <h1 class="logo">SUSHIMO</h1>
      <div class="divider"></div>
  
      <!-- หน้ากรอกเบอร์ -->
      <div class="form-section" v-if="!showSignupForm && !showSuccess">
        <h2 class="form-title">กรุณากรอกหมายเลขสมาชิก</h2>
        <input type="text" class="member-input" placeholder="เบอร์โทรศัพท์" />
        <button class="pay-button">จ่ายเงิน</button>
        <a href="#" class="signup-link" @click.prevent="showSignupForm = true">สมัครสมาชิก</a>
      </div>
  
      <!-- ฟอร์มสมัครสมาชิก -->
      <div class="signup-form" v-else-if="showSignupForm && !showSuccess">
        <h2 class="form-title">สมัครสมาชิก</h2>
        <input type="text" class="form-input" placeholder="ชื่อ">
        <br>
        <input type="text" class="form-input" placeholder="เบอร์โทรศัพท์">
        <button class="signup-button" @click="submitSignup">สมัครสมาชิก</button>
      </div>
  
      <!-- หน้ายืนยันสมัครสมาชิกสำเร็จ -->
      <div class="success-message" v-if="showSuccess">
        <h2 class="success-text">สมัครสมาชิกเสร็จสิ้น</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" class="success-icon" alt="success" />
        <button class="back-button" @click="backToMain">กลับสู่หน้าสมาชิก</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showSignupForm: false,
        showSuccess: false,
      };
    },
    methods: {
      submitSignup() {
        this.showSuccess = true;
      },
      backToMain() {
        this.showSuccess = false;
        this.showSignupForm = false;
      }
    }
  };
  </script>