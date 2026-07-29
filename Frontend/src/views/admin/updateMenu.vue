<template>
    <h1>Update Menu</h1>
    
    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <div class="container">
        <div class="divider"></div>
    </div>
    <div class="input-container">
        <input type="text" v-model="menuName" placeholder="Name" />
        <input type="text" v-model="menuPrice" placeholder="Price" />
        <input type="text" v-model="menuPicture" placeholder="Picture URL" />
     
        <label for="types">Type</label>
        <select v-model="typeId" id="types">
            <option v-for="(type, index) in types" :key="index" :value="type.id">
                {{ type.name }}
            </option>
        </select>

        <button @click="updateMenu">Edit menu</button>
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
import axios from 'axios'

export default {
    data() {
        return {
            menuName: "",
            menuPrice: "",
            menuPicture: "",
            typeId: "",
            types: [],
            menuId: this.$route.params.id,
            showSuccessPopup: false // To control the success popup visibility
        }
    },
    mounted() {
        this.getTypes();
        this.getMenuById();
    },
    methods: {
        async getTypes() {
            try {
                const res = await axios.get('http://localhost:8080/types');
                this.types = res.data;
            } catch (error) {
                console.error(error);
            }
        },
        async getMenuById() {
            try {
                const res = await axios.get(`http://localhost:8080/menus/${this.menuId}`);
                console.log(res);
                this.menuName = res.data[0].name;
                this.menuPrice = res.data[0].price;
                this.typeId = res.data[0].types_id;
                this.menuPicture = res.data[0].picture;
            } catch (error) {
                console.error(error);
            }
        },
        async updateMenu() {
            try {
                const form = {
                    menuName: this.menuName, // ชื่่อเมนู
                    menuPrice: this.menuPrice, // ราคาของเมนู
                    menuPicture: this.menuPicture, // รูปภาพ
                    typeId: this.typeId // ประเภทของเมนู
                };

                const res = await axios.put(`http://localhost:8080/menus/${this.menuId}`, form, {
                    headers: { 'Content-Type': 'application/json' }
                });

                if (res.data.message === 'OK') {
                    this.showSuccessPopup = true; // แสดง Popup เมื่อแก้ไขเสร็จ
                }
            } catch (error) {
                console.error(error);
            }
        },
        closeSuccessPopup() {
            this.showSuccessPopup = false; // Close the popup
            this.$router.push({ name: 'DisplayMenus' }); // Redirect to DisplayMenus page after closing popup
        },
        goBack() {
            this.$router.push({ name: 'DisplayMenus' }); // Go back to the previous page
        }
    }
}
</script>
