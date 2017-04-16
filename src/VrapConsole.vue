<template>
    <div id="vrap-console">
        <navbar v-on:select="onSelect" :resource="resource"></navbar>
        <resource-panel @change="onPathChange" :resource="resource"></resource-panel>
        <p></p>
        <method-panel v-for="method in resource.methods" :method="method" :key="methodKey(method)" :path="path"></method-panel>
    </div>
</template>
<script src="./VrapConsole.js"></script>
