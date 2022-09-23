<template>
    <main class="bg-gray-900 h-screen">
      <h1 class="flex justify-center content-centerp p-20 text-5xl font-bold text-white">Bookings</h1>

      <div class="grid grid-cols-2 py-24">

        <div class="grid justify-center content-center">
          <h1 class="text-white text-4xl py-5">Contact</h1>
          <h1 class="text-white text-4xl py-5 ">Email: <a class="select-text">kimmercore@gmail.com</a></h1>
        </div>



        <div class="grid text-center justify-center content-center">
          <h1 class="text-white text-4xl py-5">Socials</h1>

          <div class="grid grid-cols-4 gap-6">
            <button class="hover:scale-105 transition ease-in-out">
              <a href="https://soundcloud.com/kimmercore" target="_blank" rel="noreferrer">
                <img src="/soundcloud.svg" class="h-28 w-28" />
              </a>
            </button>
            <button class="hover:scale-105 transition ease-in-out">
              <a href="https://open.spotify.com/artist/14Htf1Vzv8Wrb5CfW2zmZs?si=Dbr_3MYvQxSxFE1yoh77xQ" target="_blank" rel="noreferrer">
                <img src="/spotify.svg" class="h-28 w-28" />
              </a>
            </button>
            <button class="hover:scale-105 transition ease-in-out">
              <a href="https://www.youtube.com/c/Kimmercore" target="_blank" rel="noreferrer">
                <img src="/youtube.svg" class="h-28 w-28" />
              </a>
            </button>
            <button class="hover:scale-105 transition ease-in-out">
              <a href="https://www.instagram.com/kimmercore/" target="_blank" rel="noreferrer">
                <img src="/instagram.svg" class="h-28 w-28" />
              </a>
            </button>
          </div>
        </div>


      </div>

      <Footer />
    </main>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>