<template>
  <div id="app">
    <chess-board />
  </div>
</template>

<script>
import ChessBoard from './components/ChessBoard';

export default {
  name: 'app',
  components: {
    ChessBoard,
  },
};
</script>

<style lang="scss" src="@/styles/_main.scss">
</style>
