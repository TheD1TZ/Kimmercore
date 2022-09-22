<template>
  <main>
    <section class="flex justify-center bg-neutral-900 p-20 py-72 bg-cover"
             style="background-image: linear-gradient(0deg, rgba(0,255,255,0.3), rgba(0,13,255,0.3)),url('https://i1.sndcdn.com/avatars-2fwVPqTrlcIJh0gj-erC7rA-t500x500.jpg'); backdrop-filter: blur(1.5rem);">
      <img src="/kimmercore-logo.png" alt="Kimmercore Logo" class="wiggle w-1/3 drop-shadow-xl">
    </section>

    <section class="grid grid-cols-1 justify-center p-5 bg-gray-800">
      <h1 class="text-4xl text-white text-center py-5">Releases</h1>

      <div class="flex justify-center">
      <iframe style="border-radius:12px" class="w-1/2" src="https://open.spotify.com/embed/artist/14Htf1Vzv8Wrb5CfW2zmZs?utm_source=generator"
                width="100%" height="380" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>