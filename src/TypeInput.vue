<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="form-group">
        <label :for="typeDeclaration.name" class="type-input-label">{{label}}</label>
        <select v-if="type != 'radio' && typeDeclaration.type.values" @change="updateValue" v-model="value" class="form-control">
            <option v-for="enumValue in typeDeclaration.type.values">{{enumValue}}</option>
        </select>
        <div v-else-if="type === 'radio'" class="btn-group" data-toggle="buttons">
            <label v-for="enumValue in typeDeclaration.type.values" class="btn btn-primary text-capitalize">
                <input type="radio" :name="typeDeclaration.name" :id="'radio-id-' + enumValue" :value="enumValue">{{enumValue}}
            </label>
        </div>
        <div v-else class="input-group">
            <input @change="updateValue" v-model="value" class="form-control" type="text" :placeholder="typeDeclaration.example">
            <span v-if="typeDeclaration.example" class="input-group-btn">
                <button aria-label="Copy example" type="submit" class="btn glyphicon glyphicon-paste" @click="copyExample"></button>
            </span>
        </div>
    </div>
</template>
<script src="./TypeInput.js"></script>
