<template>
  <h1>ADMIN</h1>
  <div class="container">
    <div class="divider"></div>
  </div>
  <div class="login-page">
    <div class="login-container">
      <h2 class="login-title">Login</h2>
      
      <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
      <button class="back-button" @click="goBack">←</button>

      <div class="input-container">
        <span class="icon">&#128100;</span>
        <input type="text" v-model="userName" placeholder="Username" />
      </div>
      <div class="input-container">
        <span class="icon">&#128274;</span>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <button class="login-button" @click="login">Sign in</button>
      <p v-if="error" class="error-message">{{ error }}</p>
      <h2 v-if="logedIn" class="success-message">Login success</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userName: "",
      password: "",
      logedIn: false,
      error: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8080/login', {
          userName: this.userName,
          password: this.password
        });

        // ตรวจสอบว่า response ที่ได้รับเป็น success หรือไม่
        if (response.data.success) {
          this.logedIn = true;
          this.error = "";
          this.$router.push({ name: 'AdminIndex' }); // นำไปยังหน้าหลัก
        } else {
          this.error = response.data.message; // แสดงข้อความจาก backend
        }
      } catch (error) {
        console.error(error);
        this.error = "เกิดข้อผิดพลาดในการเข้าสู่ระบบ";
      }
    },
    goBack() {
      this.$router.go(-1); // ย้อนกลับไปหน้าก่อนหน้า
    }
  }
};
</script>
