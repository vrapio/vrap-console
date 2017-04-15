<template>
    <div>
        <div v-if="typeDeclaration.type.values" class="input-group col-sm-2">
            <select class="form-control">
                <option v-for="value in typeDeclaration.type.values">{{value}}</option>
            </select>
        </div>
        <div v-else class="input-group col-sm-4">
            <input class="form-control" type="text" :placeholder="typeDeclaration.example">
            <span v-if="typeDeclaration.example" class="input-group-addon glyphicon glyphicon-paste"
                  id="basic-addon1"></span>
        </div>
    </div>
</template>
<script src="./TypeInput.js"></script>
