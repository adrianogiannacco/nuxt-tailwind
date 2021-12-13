<template>
  <section class="py-20 bg-gray-lightest min-h-screen">
    <div class="container">
      <div class="flex flex-col md:flex-row md:justify-between gap-4">
        <MyCard
          img="https://recenserie.com/wp-content/uploads/2021/12/Zerocalcare-Armadillo.jpg"
          title="Phasellus ultrices nulla quis nibh"
          date="1 gennaio 1970"
          :tags="['Tag 1', 'Tag due', 'Tag three']"
        >
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            pariatur laboriosam minus architecto quibusdam fugit provident
            magnam.
          </template></MyCard
        >
        <MyCard
          img="https://images.everyeye.it/img-notizie/strappare-bordi-chi-ispira-personaggio-secco-amico-zerocalcare-v3-556987.jpg"
          title="Nullam malesuada erat ut turpis suspendisse urna nibh"
          date="1 gennaio 1970"
          :tags="['Tag 1', 'Tag due', 'Tag three']"
        >
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            quo, asperiores consectetur reprehenderit ipsam alias eius expedita
            repellendus et quia perspiciatis laboriosam illo ea voluptatem
            soluta saepe! Cumque, fugit dolores.
          </template>
        </MyCard>
        <MyCard
          img="https://recenserie.com/wp-content/uploads/2021/12/Zerocalcare-Armadillo.jpg"
          title="Phasellus ultrices nulla quis nibh"
          date="1 gennaio 1970"
          :tags="['Tag 1', 'Tag due', 'Tag three']"
        >
          <template #content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            pariatur laboriosam minus architecto quibusdam fugit provident
            magnam.
          </template>
        </MyCard>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
