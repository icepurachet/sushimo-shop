<template>
    <h1>Update User</h1>
    <div class="container">
        <div class="divider"></div>
    </div>
    
    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <div class="input-container">
        <input type="text" v-model="userName" placeholder="Name" />
        <input type="password" v-model="password" placeholder="Password" />
        <button @click="updateUser">Update User</button>
    </div>
    
    <!-- Popup Modal when update is successful -->
    <div v-if="showSuccessPopup" class="modal-overlay">
        <div class="modal">
            <h2>Edited successfully</h2>
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
            userId: this.$route.params.id,
            showSuccessPopup: false // ตัวแปรสำหรับควบคุมการแสดงผล Popup
        }
    },
    mounted() {
        this.getUserById()
    },
    methods: {
        async getUserById() {
            try {
                const res = await api.get(`/users/${this.userId}`)
                console.log("User data:", res.data)
                if (res.data && res.data[0]) {
                    this.userName = res.data[0].userName || "";
                    this.password = res.data[0].password || "";
                }
            } catch (error) {
                console.error("Error fetching user:", error)
            }
        },
        async updateUser() {
            try {
                const form = {
                    userName: this.userName,
                    password: this.password
                }

                console.log("Sending update request:", form)

                const res = await api.put(`/users/${this.userId}`, form, {
                    headers: { 'Content-Type': 'application/json' }
                })

                console.log("Update response:", res.data)

                if (res.data && (res.data.message === 'success' || res.data.message === 'OK' || res.status === 200)) {
                    console.log("Showing success popup")
                    this.showSuccessPopup = true
                } else {
                    console.log("Update failed:", res.data)
                    alert("Update failed. Please check console for details.")
                }
            } catch (error) {
                console.error("Error updating user:", error)
                alert("Error updating user. Please check console for details.")
            }
        },
        closeSuccessPopup() {
            this.showSuccessPopup = false
            this.$router.push({ name: 'DisplayUsers' }) // เปลี่ยนเส้นทางไปที่หน้าผู้ใช้งานทั้งหมด
        },
        goBack() {
            this.$router.push({ name: 'DisplayUsers' }) // ย้อนกลับไปหน้าก่อนหน้า
        }
    }
}
</script>
