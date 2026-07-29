<template>
  <div class="admin-container">
    <h1 class="admin-title">ADMIN</h1>
    <div class="admin-divider"></div>

    <!-- ปุ่ม Back ที่จะพาผู้ใช้กลับไปหน้าก่อน -->
    <button class="back-button" @click="goBack">←</button>

    <a @click="goToCreateUser()" class="add-btn">Add user</a> 

    <div class="table-wrapper mt-4">
      <div class="text-sidebar">Users</div>
      <div class="menu-content">
        <table class="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<td>{{ user.name }}</td>
              <td>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<a class="edit-btn" @click="goToUpdateUser(user.id)">Edit</a>&nbsp;&nbsp;&nbsp;
                <a class="delete-btn" @click="confirmDelete(user.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal when delete is confirmed -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal">
        <h2>Delete this user?</h2>
        <div class="modal-actions">
          <button class="btn btn-danger" @click="deleteUser(selectedUserId)">Yes</button>
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
      users: [],
      showModal: false,
      selectedUserId: null
    }
  },
  mounted() {
    this.displayUsers()  
  },
  methods: {
    async displayUsers() {
      try {
        const res = await axios.get('http://localhost:8080/users')
        this.users = res.data
      } catch (error) {
        console.error(error)  
      }
    },
    confirmDelete(userId) {
      this.selectedUserId = userId;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedUserId = null;
    },
    goToCreateUser() {
      this.$router.push({ name: 'CreateUser' })
    },
    goToUpdateUser(userId) {
      this.$router.push({ name: 'UpdateUser', params: { id: userId } })
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`http://localhost:8080/users/${userId}`);
        this.users = this.users.filter(user => user.id !== userId);
        this.closeModal();
      } catch (error) {
        console.error("Error deleting user:", error);
        this.closeModal();
      }
    },
    goBack() {
      this.$router.push({ name: 'AdminIndex' }); // ย้อนกลับไปหน้าก่อนหน้า
    }
  }
}
</script>
