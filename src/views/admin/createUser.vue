<template>
    <h1>Create User</h1>
    <div class="container">
        <div class="divider"></div>
    </div>
    
    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <div class="input-container">
        <input type="text" v-model="userName" placeholder="Name" />
        <input type="password" v-model="password" placeholder="Password" />
        
        <button @click="createUser">Add User</button>
    </div>

    <!-- Popup Modal when user is added successfully -->
    <div v-if="showSuccessPopup" class="modal-overlay">
        <div class="modal">
            <h2>Added successfully</h2>
            <button @click="closeSuccessPopup">OK</button>
        </div>
    </div>
</template>

<script>
    import api from '@/services/api'

    export default {
        data() {
            return {
                userName: "",
                password: "",
                showSuccessPopup: false // To control the success popup visibility
            }
        },
        methods: {
            async createUser() {
                try {
                    const form = {
                        userName: this.userName,
                        password: this.password
                    }

                    const res = await api.post('/users', form, {
                        headers: { 'Content-Type': 'application/json' }
                    })

                    // ตรวจสอบคำตอบจาก API
                    console.log("Response from server:", res); 

                    // หากการเพิ่มผู้ใช้สำเร็จ
                    if (res.data.message === 'User added successfully') {
                        this.showSuccessPopup = true; // แสดง Popup
                    }
                } catch (error) {
                    console.error("Error during user creation:", error);
                }
            },
            closeSuccessPopup() {
                this.showSuccessPopup = false; // ปิด Popup
                this.$router.push({ name: 'DisplayUsers' }); // เปลี่ยนเส้นทางไปที่หน้า DisplayUsers หลังจากปิด Popup
            },
            goBack() {
                this.$router.push({ name: 'DisplayUsers' });// ย้อนกลับไปหน้าก่อนหน้า
            }
        }
    }
</script>
