<template>
    <div v-html="svg" class="type-declaration-diagram"></div>
</template>
<script src="./TypeDeclarationDiagram.js"></script>
<style>
svg {
    width: 100%;
    height: 400px;
}

.type-declaration-diagram {
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    box-shadow: 10px 10px 5px grey;
    margin: 20px 1px;
}
</style>
