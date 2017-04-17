<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="form-group">
        <label :for="typeDeclaration.name">{{label}}</label>
        <select v-if="typeDeclaration.type.values" @change="updateValue" v-model="value" class="form-control">
            <option v-for="value in typeDeclaration.type.values">{{value}}</option>
        </select>
        <div v-else class="input-group">
            <input @change="updateValue" v-model="value" class="form-control" type="text" :placeholder="typeDeclaration.example">
            <span v-if="typeDeclaration.example" class="input-group-btn">
                <button aria-label="Copy example" type="submit" class="btn glyphicon glyphicon-paste" @click="copyExample"></button>
            </span>
        </div>
    </div>
</template>
<script src="./TypeInput.js"></script>
