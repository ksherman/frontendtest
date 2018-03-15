<template>
  <div class="game-wrapper">
    <chess-board />
    <move-log />
  </div>
</template>

<script>
import ChessBoard from './ChessBoard';
import MoveLog from './MoveLog';

export default {
  name: 'Game',
  components: {
    ChessBoard,
    MoveLog,
  },
};
</script>
