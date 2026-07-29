<template>
  <div class="payment-page">
    <!-- Global Back Button -->
    <div v-if="!isHomePage" class="global-back">
      <button class="back-to-menu" @click="goBackToMainMenu">Back to Menu</button>
    </div>

    <div class="cart-container">
      <span @click="toggleCart()" class="cart-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="currentColor">
          <path d="M2 8c-1.1 0-2 .9-2 2s.9 2 2 2h1l3.6 9.6c.3.8 1 1.4 1.9 1.4h8c.9 0 1.6-.6 1.9-1.4L21 12h1c1.1 0 2-.9 2-2s-.9-2-2-2h-4.3l-3.6-6.3C14.8 1.3 14.4 1 14 1s-.8.3-1 .7L9.4 8H2zm4.1 2L9.8 4h4.4l3.7 6H6.1zm3.4 7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm6 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
        </svg>
      </span>
    </div>

    <h1>SUSHIMO</h1>
    <div class="divider"></div>

    <!-- QR Code and Confirmation Page -->
    <div v-if="paymentMode" class="confirm-container">
      <div v-if="!confirmed" class="image-container">
        <img src="https://www.scanmeseescore.com/images/s1.png" class="qr-code" />
        <button class="confirm-button" @click="confirmPayment()">Confirm Payment</button>
        <div class="bottom-buttons">
          <span class="button" @click="cancelPayment()">Cancel</span>
        </div>
      </div>
      <div v-else>
        <h2 class="thank-you">Thank you!</h2>
        <div class="bottom-buttons">
          <span class="button" @click="returnToMenu()">Back to Menu</span>
        </div>
      </div>
    </div>

    <!-- Menu Selection Page -->
    <div v-if="!selectedMenu && !showCart && !paymentMode && !memberMode">
      <span v-for="(title, key) in typeTitle" :key="key">
        <span class="button" @click="getMenu(title.nameEn)">
          {{ title.nameEn }}
        </span>
      </span>

      <div class="grid-menu">
        <div v-for="(menu, index) in menus" :key="'menu-' + index" class="menu-item" @click="viewMenuDetail(menu)">
          <img :src="menu.picture" height="100px" width="auto" />
          <p>{{ menu.name }}</p>
          <p>{{ menu.price }}</p>
        </div>
      </div>
    </div>

    <!-- Menu Detail Page -->
    <div v-if="selectedMenu" class="menu-detail-container">
      <h2>{{ selectedMenu.name }}</h2>
      <img :src="selectedMenu.picture" alt="Menu image" />
      <p>{{ selectedMenu.price }} THB</p>
      <div class="quantity-control">
        <button @click="decreaseAmount">-</button>
        <span>{{ quantity }}</span>
        <button @click="increaseAmount">+</button>
      </div>
      <button class="add-to-cart-button" @click="addToCart">Add to Cart</button>
    </div>

    <!-- Cart Page -->
    <div v-if="showCart && !paymentMode && !memberMode" class="order-container">
      <h2>Items in Cart</h2>
      <div v-for="(cart, index) in carts" :key="'cart-' + index">
        <div class="order-item">
          <p>{{ index + 1 }}. {{ cart.name }} ({{ cart.price }} THB) x{{ cart.amount }} = {{ cart.price * cart.amount }} THB</p>
        </div>
      </div>
      <div class="order-total">
        <span>Total</span>
        <span>&emsp;{{ totalPrice }}&emsp;THB</span>
      </div>
      <div class="bottom-buttons">
        <span class="button" @click="toggleCart()">Back</span>
        <span class="button" @click="goToMemberInput()">Checkout</span>
      </div>
    </div>

    <!-- Member Login / Signup Form -->
    <div v-if="memberMode && !showSignupForm && !showSuccess">
      <h2 class="form-title">Enter Member Phone Number</h2>
      <input type="text" v-model="phone" class="member-input" placeholder="Phone Number" />
      <button class="button" @click="proceedToQR">Checkout</button>
      <br>
      <a href="#" class="signup-link" @click.prevent="showSignupForm = true">Sign Up</a>
    </div>

    <div v-if="memberMode && showSignupForm && !showSuccess" class="signup-form">
      <h2 class="form-title">Sign Up</h2>
      <input type="text" class="member-input" placeholder="Name" v-model="newMember.name" />
      <br>
      <input type="text" class="member-input" placeholder="Phone Number" v-model="newMember.phone" />
      <button class="signup-button" @click="submitSignup">Sign Up</button>
    </div>

    <div v-if="memberMode && showSuccess" class="success-message">
      <h2 class="success-text">Registration Successful</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" class="success-icon" alt="success" />
      <br>
      <!-- <div class="bottom-buttons"> -->
        <button class="add-to-cart-button" @click="backToMemberInput">Back to Member Page</button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      paymentMode: false,
      confirmed: false,
      carts: [],
      totalPrice: 0,
      phone: '',
      typeTitle: [
        { nameTh: 'Sushi', nameEn: 'Sushi' },
        { nameTh: 'Rice Bowl', nameEn: 'Rice' },
        { nameTh: 'Sashimi', nameEn: 'Sashimi' },
        { nameTh: 'Dessert', nameEn: 'Dessert' },
        { nameTh: 'Drink', nameEn: 'Drink' },
      ],
      menus: [],
      selectedMenu: null,
      quantity: 1,
      showCart: false,
      memberMode: false,
      showSignupForm: false,
      showSuccess: false,
      newMember: {
        name: '',
        phone: ''
      }
    };
  },
  computed: {
    isHomePage() {
      return !this.selectedMenu && !this.showCart && !this.paymentMode && !this.memberMode;
    }
  },
  mounted() {
    this.getMenu('sushi');
  },
  methods: {
    goBackToMainMenu() {
      this.selectedMenu = null;
      this.showCart = false;
      this.paymentMode = false;
      this.memberMode = false;
      this.showSignupForm = false;
      this.showSuccess = false;
    },
    async getMenu(type) {
      try {
        const res = await axios.get(`http://localhost:8080/menus/type/${type}`);
        this.menus = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    viewMenuDetail(menu) {
      this.selectedMenu = menu;
      this.quantity = 1;
    },
    backToMenu() {
      this.selectedMenu = null;
    },
    increaseAmount() {
      this.quantity++;
    },
    decreaseAmount() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      let found = this.carts.find(item => item.id === this.selectedMenu.id);
      if (found) {
        found.amount += this.quantity;
      } else {
        this.carts.push({ ...this.selectedMenu, amount: this.quantity });
      }
      this.totalPrice = this.carts.reduce((sum, item) => sum + item.amount * item.price, 0);
      this.selectedMenu = null;
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
    goToMemberInput() {
      this.showCart = false;
      this.memberMode = true;
    },
    proceedToQR() {
      this.paymentMode = true;
      this.confirmed = false;
      this.memberMode = false;
    },
    submitSignup() {
      if (this.newMember.name && this.newMember.phone) {
        this.phone = this.newMember.phone;
        this.showSignupForm = false;
        this.showSuccess = true;

        axios
          .post('http://localhost:8080/members', this.newMember)
          .then(response => {
            console.log(response.data);
            this.newMember.name = '';
            this.newMember.phone = '';
          })
          .catch(error => {
            console.error("There was an error with the sign-up:", error);
          });
      } else {
        alert("Please fill in all required fields.");
      }
    },
    backToMemberInput() {
      this.showSuccess = false;
      this.showSignupForm = false;
    },
    async confirmPayment() {
      const form = {
        carts: this.carts.map(cart => ({
          menu_id: cart.id,
          amount: cart.amount,
          price: cart.price
        })),
        totalPrice: this.totalPrice,
        phone: this.phone || ""
      };

      try {
        const res = await axios.post('http://localhost:8080/payments', form, {
          headers: { 'Content-Type': 'application/json' }
        });

        if (res.data.msg === 'success') {
          this.confirmed = true;
          this.carts = [];
          this.totalPrice = 0;
          this.paymentMode = false;
          this.phone = '';
          alert("Thank you for your payment!");
        }
      } catch (error) {
        console.error("Payment confirmation failed", error);
        alert("There was an error during payment.");
      }
    },
    cancelPayment() {
      this.paymentMode = false;
    },
    returnToMenu() {
      this.paymentMode = false;
      this.showCart = false;
      this.selectedMenu = null;
    }
  }
};
</script>

