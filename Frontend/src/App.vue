<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style>
  body {
    font-family: 'Prompt', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #fafafa; /* ปรับสีพื้นหลังให้เป็นสีอ่อนขึ้น */
}

/* หัวข้อหลัก */
h1 {
    color:  #9e1c1c; /* สีแดงเข้ม */
    margin-top: 30px;
    font-size: 2.5rem;
    font-weight: bold;
}

/* เส้นแบ่ง */
.divider {
    width: 60%;
    margin: 15px auto;
    border-bottom: 2px solid  #9e1c1c; /* สีแดงเข้ม */
}

/* ปุ่มเมนู */
.button {
    background-color:  #9e1c1c; /* ปรับให้เป็นสีแดงสดใส */
    color: white;
    padding: 15px 30px;
    margin: 10px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: inline-block;
    width: 180px;
    text-align: center;
}

.button:hover {
    background-color:  #9e1c1c; /* สีแดงเข้มขึ้นเมื่อ hover */
    transform: scale(1.05);
}

/* ตะกร้าสินค้า */
.cart-container {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}

.cart-container svg {
    width: 50px;
    height: 50px;
    fill:  #9e1c1c; /* สีแดงสดใส */
    transition: 0.3s;
}

.cart-container:hover svg {
    fill:  #9e1c1c; /* สีแดงเข้มเมื่อ hover */
    transform: scale(1.1);
}

/* กริดเมนู */
.grid-menu {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-content: center;
}

.grid-menu div {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 0.3s;
}

.grid-menu div:hover {
    transform: scale(1.05);
}

/* รูปเมนูอาหาร */
.grid-menu img {
    width: 150px;
    height: 250px;
    border-radius: 10px;
}

/* ราคาเมนู */
.grid-menu p {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
}

/* กล่อง QR Code */
.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 500px;
    gap: 15px;
    text-align: center;
}

/* ปุ่มยืนยันชำระเงิน */
.confirm-button {
    padding: 12px 25px;
    background-color: white;
    color: #28a745; /* สีเขียวสด */
    font-size: 18px;
    font-weight: bold;
    border: 2px solid #28a745;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.confirm-button:hover {
    background-color: #28a745;
    color: white;
    transform: scale(1.05);
}

.grid-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* กำหนดให้มี 3 คอลัมน์ในแต่ละแถว */
    gap: 20px;
    padding: 20px;
    justify-content: center;
}

.grid-menu div {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: 0.3s;
}

.grid-menu div:hover {
    transform: scale(1.05);
}

.grid-menu img {
    width: 100%;
    border-radius: 10px;
}

.grid-menu p {
    font-size: 18px;
    font-weight: bold;
    margin-top: 5px;
}

.login-page {
  display: flex;
  justify-content:center;
  align-items: center;
  height: auto;
}

.login-container {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  background: #f0f0f0;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 15px;
}

.input-container .icon {
  margin-right: 10px;
}

input {
  border: none;
  background: transparent;
  outline: none;
  flex: 1;
  padding: 10px;
  font-size: 16px;
}

.login-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.login-button:hover {
  background-color: #2980b9;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.success-message {
  color: green;
  margin-top: 10px;
}

/* หัวข้อ ADMIN */
.admin-title {
    text-align: center;
    font-size: 2rem;
    color:  #9e1c1c;
    font-weight: bold;
}

/* เส้นคั่น */
.admin-divider {
    width: 100%;
    height: 2px;
    background-color:  #9e1c1c;
    margin: 15px 0;
}

/* ปุ่มเพิ่มประเภท */
.add-btn {
    background-color:green;
    color: white;
    padding: 8px 15px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 14px;
    float: right;
    cursor: pointer;
    transition: 0.3s;
}

.add-btn:hover {
    background-color: #7ac87a;
}

/* กล่องแสดงข้อมูล */
.table-wrapper {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 15px;
}

/* Sidebar Type */
.text-sidebar {
    background-color: #ddd;
    padding: 10px 20px;
    font-weight: bold;
    width: 20%;
    text-align: center;
}

/* Content ตาราง */
.menu-content {
    width: 80%;
    padding: 10px;
}

/* แถวของเมนู */
.menu-row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.menu-row:last-child {
    border-bottom: none;
}

/* ปุ่มแก้ไข */
.edit-btn {
    color: blue;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
}

.edit-btn:hover {
    text-decoration: underline;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.modal h2 {
  margin-bottom: 20px;
}

.modal-actions button {
  margin: 5px;
  padding: 10px;
  font-size: 14px;
}

.modal-actions button:first-child {
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

.modal-actions button:last-child {
  background-color: grey;
  color: white;
  border: none;
  cursor: pointer;
}

.input-container {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 20px auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Style for input fields */
    .input-container input,
    .input-container select {
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        transition: border-color 0.3s ease;
    }

    .input-container input:focus,
    .input-container select:focus {
        border-color: #007bff;
        outline: none;
    }

    /* Style for the button */
    .input-container button {
        padding: 10px 15px;
        background-color: #28a745;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .input-container button:hover {
        background-color: #218838;
    }

    /* Style for the heading */
    h1 {
        text-align: center;
        color:  #9e1c1c;
        margin-bottom: 20px;
    }

    /* === หน้าฟอร์มหมายเลขสมาชิก === */
.member-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.member-form-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

.member-input {
  width: 100%;
  max-width: 350px;  /* ตั้งค่าความกว้างสูงสุดของ input */
  padding: 12px;
  font-size: 16px;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
  box-sizing: border-box;  /* ให้แน่ใจว่า padding และ margin ไม่ทำให้ขนาด input เกิน */
  transition: border-color 0.3s ease; /* เปลี่ยนสีขอบเมื่อโฟกัส */
}

.pay-button {
  width: 150px;
  padding: 12px;
  background-color:  #9e1c1c;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 30px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
}

.pay-button:hover {
  background-color:  #9e1c1c;
  transform: scale(1.05);
}

.signup-link {
  color: gray;
  font-size: 14px;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}


.payment-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f2f2f2;
  font-family: 'Prompt', sans-serif;
  min-height: 100vh;
}

.logo {
  color:  #9e1c1c;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.divider {
  width: 90%;
  max-width: 800px;
  height: 2px;
  background-color:  #9e1c1c;
  margin: 10px 0 30px 0;
}

.form-section,
.signup-form,
.success-message {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 350px;
  text-align: center;
}

.form-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #222;
}

.member-input,
.form-input {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
}

.pay-button,
.signup-button,
.back-button {
  width: 100%;
  padding: 12px;
  background-color:  #9e1c1c;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

.success-text {
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
}

.success-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.menu-detail-container {
  background-color: white;
  padding: 30px;
  max-width: 500px;
  margin: 30px auto;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-detail-container img {
  width: 100%;
  max-width: 350px; /* กำหนดขนาดสูงสุดของรูปภาพ */
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.menu-detail-container h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.menu-detail-container p {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.quantity-control button {
  padding: 8px 15px;
  font-size: 18px;
  background-color:  #9e1c1c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quantity-control button:hover {
  background-color:  #9e1c1c;
}

.add-to-cart-button {
  padding: 12px 20px;
  background-color:  #9e1c1c;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 350px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.add-to-cart-button:hover {
  background-color:  #9e1c1c;
}

/* ปุ่ม "กลับไปเมนู" */
.back-button {
  padding: 8px 15px;
  background-color: #ccc;
  color: #333;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  text-decoration: none;
}

.back-button:hover {
  background-color: #aaa;
}

/* ตำแหน่งของปุ่มทั้งหมด */
.bottom-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

/* ปรับให้เมนูมีความกว้างตามจอ */
.grid-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* กำหนดความกว้างที่ยืดหยุ่น */
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.menu-item {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
}

.menu-item:hover {
  transform: scale(1.05); /* ขยายขนาดเมื่อ hover */
}

.menu-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.menu-item p {
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
}

/* body {
  font-family: 'Prompt', sans-serif;
  background-color: #f9f9f9; /* สีพื้นหลังอ่อน */
  /* margin: 0;
  padding: 0;
} */ */

h1 {
  text-align: center;
  color:  #9e1c1c; /* สีแดงเข้ม */
  font-size: 2.5rem;
  margin-top: 30px;
}

.grid-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* กำหนดคอลัมน์ที่มีความยืดหยุ่น */
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

.grid-menu .menu-item {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-menu .menu-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.grid-menu img {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.grid-menu p {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.grid-menu .price {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}

.cart-container {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.cart-container svg {
  width: 40px;
  height: 40px;
  fill:  #9e1c1c; /* สีแดงเข้ม */
  transition: 0.3s;
}

.cart-container:hover svg {
  transform: scale(1.1);
}

.button {
  background-color:  #9e1c1c; /* สีแดงเข้ม */
  color: white;
  padding: 12px 24px;
  margin: 15px 0; /* เพิ่มระยะห่างระหว่างปุ่ม */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color:  #9e1c1c; /* สีแดงเข้มขึ้นเมื่อ hover */
  transform: scale(1.05);
}

.divider {
  width: 50%;
  margin: 20px auto;
  border-bottom: 2px solid  #9e1c1c; /* เส้นคั่นสีแดงเข้ม */
}

/* เพิ่มระยะห่างระหว่างปุ่ม */
.button {
  background-color:  #9e1c1c; /* สีแดงเข้ม */
  color: white;
  padding: 12px 24px;
  margin: 10px; /* เพิ่มระยะห่างรอบๆ ปุ่ม */
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color:  #9e1c1c; /* สีแดงเข้มขึ้นเมื่อ hover */
  transform: scale(1.05);
}

/* สำหรับกลุ่มปุ่มในแถวเดียวกัน (เช่น ปุ่มกลับไปเมนู และจ่ายเงิน) */
.button-container {
  display: flex;
  gap: 30px; /* เพิ่มระยะห่างระหว่างปุ่ม */
  justify-content: center; /* จัดให้ปุ่มอยู่กลาง */
  margin-top: 20px;
}

.button-container .button {
  width: auto; /* ปรับให้ปุ่มมีขนาดอัตโนมัติ */
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}


/* สไตล์ของปุ่ม Back (ตามที่คุณต้องการ) */
.back-button {
    position: absolute;
    top: 20px; /* ระยะห่างจากด้านบน */
    left: 80px; /* ระยะห่างจากด้านซ้าย */
    width: 40px; /* ความกว้างของปุ่ม */
    height: 40px; /* ความสูงของปุ่ม */
    background-color:  #9e1c1c; /* สีพื้นหลังเป็นสีแดงเข้ม */
    color: white; /* สีของตัวอักษรเป็นสีขาว */
    font-size: 20px; /* ขนาดฟอนต์สำหรับลูกศร */
    border-radius: 50%; /* ทำให้ปุ่มเป็นทรงกลม */
    border: none; /* ไม่มีเส้นขอบ */
    display: flex;
    justify-content: center; /* จัดให้อักขระอยู่กลางปุ่ม */
    align-items: center; /* จัดให้อักขระอยู่กลางปุ่ม */
    cursor: pointer; /* เปลี่ยนเคอร์เซอร์เป็นมือเมื่อชี้ที่ปุ่ม */
    transition: background-color 0.3s ease, transform 0.3s ease; /* การเปลี่ยนแปลงที่นุ่มนวล */
}

/* เมื่อเลื่อนเมาส์ไปที่ปุ่ม Back */
.back-button:hover {
    background-color: #9e1c1c; /* สีที่เข้มขึ้นเมื่อเอาเมาส์ไปชี้ */
    transform: scale(1.1); /* ขยายปุ่มเล็กน้อยเมื่อเอาเมาส์ไปชี้ */
}

/* เมื่อปุ่ม Back ถูกเลือก */
.back-button:focus {
    outline: none; /* เอาขอบกรอบที่แสดงเวลาคลิกปุ่มออก */
    box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.6); /* เงาสีน้ำเงินเมื่อโฟกัส */
}


/* สไตล์ของปุ่ม Delete */
.delete-btn {
    color: #f44336; /* ตัวหนังสือสีแดง */
    font-size: 16px;
    text-decoration: none; /* ไม่มีเส้นขีดใต้ */
    cursor: pointer;
    transition: color 0.3s ease, text-decoration 0.3s ease; /* การเปลี่ยนแปลงที่นุ่มนวล */
}

/* เมื่อเลื่อนเมาส์ไปที่ปุ่ม Delete */
.delete-btn:hover {
    color: #d32f2f; /* สีแดงเข้มขึ้น */
    text-decoration: underline; /* เพิ่มเส้นใต้ใต้คำเมื่อเอาเมาส์ไปชี้ */
}

.table-wrapper {
  margin-top: 20px;
}
.admin-container {
  padding: 20px;
}
.admin-title {
  font-size: 2rem;
}
.admin-divider {
  margin-top: 10px;
  border-bottom: 2px solid #ccc;
}
.text-sidebar {
  font-weight: bold;
  margin-bottom: 10px;
}

.menu-content {
  margin-top: 20px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.modal-actions button {
  margin-right: 10px;
}


.global-back {
  padding: 1rem;
  text-align: left;
}
.back-to-menu {
  position: fixed;       /* ตรึงตำแหน่งไว้กับหน้าจอ */
  top: 20px;             /* ห่างจากด้านบน */
  left: 50px;            /* ห่างจากด้านซ้าย */
  background-color: #9e1c1c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  z-index: 1000;         /* ให้อยู่เหนือองค์ประกอบอื่น */
}

.back-to-menu:hover {
  background-color:  #9e1c1c;
  transform: scale(1.05);
}


</style>