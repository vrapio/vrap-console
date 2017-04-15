<template>
    <div>
        <h4>{{title}}</h4>
        <div v-if="typeDeclarations" class="form">
            <div v-for="typeDeclaration in typeDeclarations" class="form-group">
                <label :for="typeDeclaration.name">{{typeDeclaration.name}}</label>
                <div :id="typeDeclaration.name" class="input-group">
                    <input class="form-control pull-left" type="text" :placeholder="typeDeclaration.example">
                    <span v-if="typeDeclaration.example" class="input-group-addon glyphicon glyphicon-paste" id="basic-addon1"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./TypeDeclarations.js"></script>
