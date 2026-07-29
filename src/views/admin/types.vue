<template>
  <div class="admin-container">
    <h1 class="admin-title">ADMIN</h1>
    <div class="admin-divider"></div>

    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <a @click="goToCreateType()" class="add-btn">Add Type</a> 

    <div class="table-wrapper mt-4">
      <div class="text-sidebar">Types</div>
      <div class="menu-content">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(type, index) in types" :key="index">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>{{ type.name }}</td>
              <td>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a class="edit-btn" @click="goToUpdateType(type.id)">Edit</a>&nbsp;&nbsp;&nbsp;
                <a class="delete-btn" @click="confirmDelete(type.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal when delete is confirmed -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Delete this type?</h2>
        <div class="modal-actions">
          <button class="btn btn-danger" @click="deleteType(selectedTypeId)">Yes</button>
          <button class="btn btn-secondary" @click="closeModal">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  data() {
    return {
      types: [],
      showModal: false,
      selectedTypeId: null
    }
  },
  mounted() {
    this.displayTypes()  
  },
  methods: {
    async displayTypes() {
      try {
        const res = await api.get('/types')
        this.types = res.data
      } catch (error) {
        console.error(error)  
      }
    },
    confirmDelete(typeId) {
      this.selectedTypeId = typeId;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedTypeId = null;
    },
    goToCreateType() {
      this.$router.push({ name: 'CreateType' })
    },
    goToUpdateType(typeId) {
      this.$router.push({ name:'UpdateType', params: {id: typeId} })
    },
    async deleteType(typeId) {
      try {
        await api.delete(`/types/${typeId}`);
        this.types = this.types.filter(type => type.id !== typeId);
        this.closeModal();
      } catch (error) {
        console.error("Error deleting type:", error);
        this.closeModal();
      }
    },
    goBack() {
      this.$router.push({ name: 'AdminIndex' }); // ทำให้ย้อนกลับไปหน้าก่อนหน้า
    }
  }
}
</script>
