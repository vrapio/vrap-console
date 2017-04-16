<template>
    <div>
        <h4><strong>{{title}}</strong></h4>
        <div v-if="typeDeclarations" class="form-horizontal">
            <div v-for="typeDeclaration in typeDeclarations" class="form-group">
                <label :for="typeDeclaration.name" class="col-sm-2 control-label">{{typeDeclaration.name}}</label>
                <type-input @change="updateValues" v-model="value" :typeDeclaration="typeDeclaration"></type-input>
            </div>
        </div>
    </div>
</template>
<script src="./TypeDeclarations.js"></script>
