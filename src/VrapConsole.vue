<template>
    <div id="vrap-console">
        <resource-select  v-on:select="onResourceSelect"></resource-select>
        <ul>
            <li>Name: {{ resource.name }}</li>
            <li>Uri: ({{ resource.uri }})
                <ul>
                    <li>Parameters:
                        <ul>
                            <li v-for="uriParam in resource.uriParams">{{ uriParam.name }}: {{ uriParam.type }}</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Methods:
                <ul>
                    <li v-for="method in resource.methods">
                        {{ method.method }}
                        <ul>
                            <li>Query Parameters:
                                <ul>
                                    <li v-for="queryParam in method.queryParams">{{ queryParam.name }}: {{ queryParam.type }}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script src="./VrapConsole.js"></script>
