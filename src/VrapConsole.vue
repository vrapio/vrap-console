<template>
    <div id="vrap-console">
        <navbar class="container-fluid " :baseUri="baseUri" :vrapMode="vrapMode" @select="onResourceSelect"></navbar>
        <authorization :uriParams="uriParams" ref="authorization"></authorization>
        <div class="container">
            <h2>{{title}}</h2>
            <p class="lead">{{description}}</p>
            <resource-panel @change="onPathChange" v-model="uriParams" :resource="resource" :key="resource.uri" ></resource-panel>

            <p></p>
            <div class="panel-group" id="method-panels" role="tablist" aria-multiselectable="true">
                <div v-for="method in resource.methods">
                    <div v-for="response in method.responses">
                        <div v-if="response.code == '201'" v-for="body in response.body">
                            <type-declaration-diagram :typeDeclaration="body"></type-declaration-diagram>
                        </div>
                    </div>
                </div>
                <method-panel v-for="method in resource.methods" :authorize="authorize"
                          :uriParams="uriParams" :method="method" :key="methodKey(method)" :path="path"></method-panel>
            </div>
        </div>
    </div>
</template>
<script src="./VrapConsole.js"></script>
