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
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        h1 {
            color: darkred;
            margin-top: 50px;
        }
        .divider {
            width: 80%;
            margin: 10px auto;
            border-bottom: 1px solid gray;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }
        .button {
            background-color: #eee;
            padding: 20px 40px;
            margin: 10px;
            text-decoration: none;
            color: black;
            font-size: 18px;
            font-weight: bold;
            display: inline-block;
            width: 200px;
            text-align: center;
            border-radius: 5px;
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        .button:hover {
            background-color: #ccc;
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
        }

        .cart-container {
            position:relative;
            top: 10px;
            left: 600px;
            cursor: pointer;
            z-index: 1000;
        }


        .cart-container svg {
            width: 50px;
            height: 50px;
            fill: #333;
        }


        .payment-container {
            text-align: center;
            padding-bottom: 60px; 
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .image-container {
            display: flex;
            flex-direction: column; 
            align-items: center; 
            justify-content:first baseline; 
            height: 800px; 
            gap: 15px; 
            text-align: center;
        }
        .confirm-button {
            padding: 10px 20px;
            background-color: white;
            color: #28a745;
            font-weight: bold;
            border: 2px solid #28a745;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }
</style>