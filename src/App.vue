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
       

</style>

