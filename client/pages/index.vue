<script setup lang="ts">
const { pending, data: users } = useLazyFetch('/api/users')
</script>

<template>
  <div>
    <h1>Bem-vindo à página inicial</h1>
    <template v-if="pending">
      Carregando...
    </template>
    <template v-else>
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
        >
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <a
        href="/api/users"
        target="_blank"
      >
        Ir ao Endpoint
      </a>
    </template>
  </div>
</template>

<style scoped>

</style>
