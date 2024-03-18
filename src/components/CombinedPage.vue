<template>
  <PasswordForm @login="handleLogin" />
  <ContentPage v-if="successLogin" />
</template>
<script setup>
import {ref} from "vue"
import PasswordForm from "./PasswordForm.vue"
import ContentPage from "./ContentPage.vue"
const successLogin = ref(false)
const open = ref(false)
const password = ref("")

const handleLogin = (value) => {
  successLogin.value = value
}
</script>
<style lang=""></style>
