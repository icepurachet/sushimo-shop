<template>
  <div class="admin-container">
    <h1 class="admin-title">ADMIN</h1>
    <div class="admin-divider"></div>

    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <a @click="goToCreateMenu()" class="add-btn">Add menu</a> 
    
    <div class="table-wrapper mt-4">
      <div class="text-sidebar">Menus</div>
      <div class="menu-content">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<th scope="col">Name</th>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<th scope="col">Price</th>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(menu, index) in menus" :key="index">

              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>{{ menu.name }}</td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>{{ menu.price }}</td>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>{{ findTypeName(menu.types_id) }}</td>&emsp;&emsp;&emsp;&emsp;&emsp;
              <td>
                <a class="edit-btn" @click="goToUpdateMenu(menu.id)">Edit</a>&nbsp;&nbsp;&nbsp;
                <a class="delete-btn" @click="confirmDelete(menu.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal when delete is confirmed -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Delete this menu?</h2>
        <div class="modal-actions">
          <button class="btn btn-danger" @click="deleteMenu(selectedMenuId)">Yes</button>
          <button class="btn btn-secondary" @click="closeModal">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      menus: [],
      types: [],
      showModal: false,
      selectedMenuId: null,
    }
  },
  mounted() {
    this.displayMenus() 
    this.getType() 
  },
  methods: {
    async displayMenus() {
      try {
        const res = await axios.get('http://localhost:8080/menus')
        this.menus = res.data
      }
      catch (error) {
        console.error(error)  
      }
    },
    async getType () {
      try {
        const res = await axios.get('http://localhost:8080/types')
        this.types = res.data
      }
      catch (error) {
        console.error(error)  
      }
    },
    findTypeName (id) {
      return this.types.find((type) => (type.id === id))?.name || 'Unknown'
    },
    confirmDelete(menuId) {
      this.selectedMenuId = menuId
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedMenuId = null
    },
    goToCreateMenu() {
      this.$router.push({ name: 'CreateMenu' })
    },
    goToUpdateMenu(menuId) {
      this.$router.push({ name:'UpdateMenu', params: {id: menuId} })
    },
    async deleteMenu(menuId) {
      try {
        await axios.delete(`http://localhost:8080/menus/${menuId}`)
        this.menus = this.menus.filter(menu => menu.id !== menuId)
        this.closeModal()
      } catch (error) {
        console.error(error)
        this.closeModal()
      }
    },
    goBack() {
      this.$router.push({ name: 'AdminIndex' }); // Go back to the previous page
    }
  }
}
</script>

