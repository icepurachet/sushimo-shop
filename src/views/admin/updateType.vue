<template>
    <h1>Update Type</h1>
    <div class="container">
        <div class="divider"></div>
    </div>

    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <div class="input-container">
        <input type="text" v-model="typeName" placeholder="Type Name" />
        <button @click="updateType">Edit Type</button>
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
            typeName: "",
            typeId: this.$route.params.id,
            showSuccessPopup: false
        }
    },
    mounted() {
        this.getTypeById();
    },
    methods: {
        async getTypeById() {
            try {
                const res = await api.get(`/types/${this.typeId}`);
                console.log("Type data:", res.data);
                if (res.data && res.data[0]) {
                    this.typeName = res.data[0].name;
                }
            } catch (error) {
                console.error("Error fetching type:", error);
            }
        },
        async updateType() {
            try {
                const form = {
                    typeName: this.typeName,
                };
                
                console.log("Sending update request:", form);
                
                const res = await api.put(`/types/${this.typeId}`, form, {
                    headers: { 'Content-Type': 'application/json' }
                });
                
                console.log("Update response:", res.data);
                
                if (res.data && (res.data.message === 'OK' || res.status === 200)) {
                    console.log("Showing success popup");
                    this.showSuccessPopup = true;
                } else {
                    console.log("Update failed:", res.data);
                    alert("Update failed. Please check console for details.");
                }
            } catch (error) {
                console.error("Error updating type:", error);
                alert("Error updating type. Please check console for details.");
            }
        },
        closeSuccessPopup() {
            this.showSuccessPopup = false;
            this.$router.push({ name: 'DisplayTypes' });
        },
        goBack() {
            this.$router.push({ name: 'DisplayTypes' }); // ย้อนกลับไปหน้าก่อนหน้า
        }
    }
}
</script>
