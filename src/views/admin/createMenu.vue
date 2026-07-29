<template>
    <h1>Create Menu</h1>
    
    <!-- Back Button at the top left -->
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

        <button @click="createMenu">Add menu</button>
    </div>

    <!-- Popup Modal when menu is added successfully -->
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
                menuName: "",
                menuPrice: "",
                menuPicture: "",
                typeId: "",
                types: [],
                showSuccessPopup: false // To control the success popup visibility
            }
        },
        mounted() {
            this.getTypes()
        },
        methods: {
            async getTypes() {
                try {
                    const res = await api.get('/types')
                    this.types = res.data
                } catch (error) {
                    console.error(error)
                }
            },
            async createMenu () {
                try {
                    const form = {
                        menuName: this.menuName,
                        menuPrice: this.menuPrice,
                        menuPicture: this.menuPicture,
                        typeId: this.typeId 
                    }

                    const res = await api.post('/menus', form, {
                        headers: { 'Content-Type': 'application/json' }
                    })

                    // ตรวจสอบค่าที่ได้รับจาก API
                    console.log("Response from server:", res); 

                    if (res.data.message === 'Menu added successfully') {
                        this.showSuccessPopup = true; // Show the success popup
                    }
                } catch (error) {
                    console.error("Error during menu creation:", error);
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

