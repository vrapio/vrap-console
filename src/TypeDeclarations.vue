<template>
    <div v-if="typeDeclarations" class="form-inline">
        <div class="form-group">
            <template v-for="typeDeclaration in typeDeclarations">
                <label :for="typeDeclaration.name">{{typeDeclaration.name}}:</label>
                <div :id="typeDeclaration.name" class="input-group">
                    <input class="form-control" type="text" :placeholder="typeDeclaration.example">
                </div>
            </template>
        </div>
    </div>
</template>
<script src="./TypeDeclarations.js"></script>
