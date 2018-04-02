<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="page-container">
      <p class="title">Your Profile</p>
      <p class="content">
        <table class="main-table">
          <tr>
             <td align=left>Profile Photo</td>
          </tr>
          <tr>
            <table width=100%>
              <tr>
                 <td width=200px><img class="avatar" src="../assets/test_avatar.jpg"></td>
                 <td>
                   <p>A clear and recent photo of your face allows community ...</p>
                   <p><button class="blue-button" @click="moveNext">UPLOAD A NEW IMAGE</button></p>
                 </td>
              </tr>
            </table>
          </tr>
          <tr>
            <table width=100%>
              <tr>
                <td align=left width=50%>First Name</td>
                <td align=left width=50%>Last Name</td>
              </tr>
              <tr>
                <td align=left><input class="text-input" v-model="firstname"></input></td>
                <td align=left><input class="text-input" v-model="lastname"></td>
              </tr>
            </table>
          </tr>
        </table>
      </p>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import Toolbar from './Toolbar'

export default {
  components: {
    Toolbar
  }
}

</script>

<style>

.title {
  font-size: 30px;
}

.page-container {
  width: 100%;
  text-align: center;
}

.avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.main-table {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.text-input {
  width: 95%;
  height: 35px;
  font-size: 20px;
}

.blue-button {
  background: SkyBlue;
  border-style: solid;
  border-color: white;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 20px;
}

</style>
