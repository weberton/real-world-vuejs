<template>
  <!--<h1>This is {{ $route.params.username}}'s page</h1> -->
  <h1>This is {{ username }}'s page</h1>
</template>

<script>
export default {
    props: ['username']
}
</script>
