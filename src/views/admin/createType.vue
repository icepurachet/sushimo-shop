<template>
    <h1>Create Type</h1>
    <div class="container">
        <div class="divider"></div>
    </div>
    
    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <div class="input-container">
        <input type="text" v-model="typeName" placeholder="Type Name" />
        <button @click="createType">Add Type</button>
    </div>

    <!-- Popup Modal when type is added successfully -->
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
                typeName: "", // สำหรับเก็บชื่อประเภท
                showSuccessPopup: false // ใช้ในการควบคุมการแสดงผล Popup สำเร็จ
            }
        },
        methods: {
            async createType() {
                try {
                    const form = {
                        typeName: this.typeName // ส่งข้อมูลชื่อประเภทที่กรอก
                    }

                    const res = await api.post('/types', form, {
                        headers: { 'Content-Type': 'application/json' }
                    })
                    
                    // ตรวจสอบคำตอบจาก API
                    console.log("Response from server:", res); 

                    // หาก API ตอบกลับว่าประเภทถูกเพิ่มสำเร็จ
                    if (res.data.message === 'Type added successfully') {
                        this.showSuccessPopup = true; // แสดง Popup
                    }
                } catch (error) {
                    console.error("Error during type creation:", error);
                }
            },
            closeSuccessPopup() {
                this.showSuccessPopup = false; // ปิด Popup
                this.$router.push({ name: 'DisplayTypes' }); // เปลี่ยนเส้นทางไปที่หน้า DisplayTypes หลังจากปิด Popup
            },
            goBack() {
                this.$router.push({ name: 'DisplayTypes' }); // ทำให้ย้อนกลับไปหน้าก่อนหน้า
            }
        }
    }
</script>
