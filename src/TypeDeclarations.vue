<template>
    <div>
        <h4><strong>{{title}}</strong></h4>
        <div v-if="typeDeclarations" class="form-horizontal">
            <div v-for="typeDeclaration in typeDeclarations" class="form-group">
                <label :for="typeDeclaration.name" class="col-sm-1 control-label">{{typeDeclaration.name}}</label>
                <div class="input-group col-sm-4">
                    <input class="form-control" type="text" :placeholder="typeDeclaration.example">
                    <span v-if="typeDeclaration.example" class="input-group-addon glyphicon glyphicon-paste"
                          id="basic-addon1"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./TypeDeclarations.js"></script>
