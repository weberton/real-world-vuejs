<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'event-show', params: {id: '100'} }">Show Event #100</router-link> |
  </div>
</template>
