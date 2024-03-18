<template lang="">
  <div
    v-if="!successLogin"
    class="grid lg:flex justify-items-center lg:justify-center items-center h-screen"
  >
    <img
      src="../assets/birthday.svg"
      class="h-48 w-48 -mb-64 lg:mb-0 lg:h-96 lg:w-96 animate-fade-in-up lg:animate-fade-in-left"
      alt="Vue logo"
    />
    <div
      class="grid bg-white shadow-md rounded-lg py-16 p-8 animate-fade-in-down lg:animate-fade-in-right"
    >
      <h1 class="text-3xl">Hi there...</h1>
      <h1 class="text-2xl">
        It's your <span class="text-yellow-500">special</span> day
      </h1>
      <form @submit="passwordCheck" class="my-5">
        <div class="flex gap-2">
          <input
            v-model="password"
            class="w-full rounded-lg h-10 focus:outline-none bg-gray-100 px-4"
            :type="[!open ? 'password' : 'text']"
          />
          <button
            type="button"
            :class="[
              open
                ? 'h-10 w-10 text-yellow-600 duration-200'
                : 'h-10 w-10 text-gray-300',
            ]"
            @mouseover="open = !open"
            @mouseout="open = !open"
            @click="open = !open"
          >
            <EyeIcon />
          </button>
        </div>
        <div class="flex mt-4 gap-2">
          <button
            type="submit"
            class="bg-yellow-600 hover:bg-yellow-500 duration-500 py-2 w-full rounded-lg text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <div class="w-full grid justify-items-center">
        <span class="text-sm text-yellow-200 justify-items-center"
          >Made with love</span
        >
      </div>
    </div>
  </div>
  <audio loop ref="audioPlayer">
    <source src="../assets/happybirthday.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>
<script setup>
import {ref, defineEmits} from "vue"
import {EyeIcon} from "@heroicons/vue/24/solid"

const emits = defineEmits(["playSound", "login"])

const open = ref(false)
const password = ref("")
const successLogin = ref(false)
const audioPlayer = ref(null)

const passwordCheck = () => {
  if (password.value == "loveyou@unlimited") {
    successLogin.value = true
    audioPlayer.value.play()
  } else {
    alert("Wrong Password!")
  }

  emits("login", successLogin.value)
}
</script>
