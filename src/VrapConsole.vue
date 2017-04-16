<template>
    <div id="vrap-console">
        <navbar v-on:select="onSelect" :resource="resource"></navbar>
        <resource-panel :resource="resource"></resource-panel>
        <p></p>
        <method-panel v-for="method in resource.methods" :method="method" :key="method.method"></method-panel>
    </div>
</template>
<script src="./VrapConsole.js"></script>
