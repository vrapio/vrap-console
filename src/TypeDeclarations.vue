<template>
    <div>
        <h4><strong>{{title}}</strong></h4>
        <type-declaration v-for="typeDeclaration in typeDeclarations" :key="typeDeclaration.name"
                        @change="updateValues" :typeDeclaration="typeDeclaration" v-model="value[typeDeclaration.name]"></type-declaration>
    </div>
</template>
<script src="./TypeDeclarations.js"></script>
