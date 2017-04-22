<template>
    <div>
        <ol class="nav navbar-nav">
            <li v-for="ancestorPath in ancestorPaths" class="list-inline">
                <p v-if="!ancestorPath.active" @click="onClick(ancestorPath.uri)" class="navbar-text navbar-left">
                    <a class="navbar-link" href="#">{{ancestorPath.label}}</a>
                </p>
                <a v-else @click="onClick(ancestorPath.uri)" :class="ancestorPath.active" href="#">{{ancestorPath.label}}</a>
            </li>
        </ol>
        <form class="navbar-form navbar-left">
            <div id="resource-select" class="input-group input-group-lg">
                <div class="form-group">
                    <div class="input-group">
                        <div id="scrollable-dropdown-menu">
                            <input id="resource-select-input" class="form-control typeahead" autocomplete="off"
                                   type="search" placeholder="Resource by name or path..">
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script src="./ResourceSelect.js"></script>
<style>

.navbar-nav > li.list-inline > p {
    padding-left: 0px;
    padding-right: 5px;
    margin-left: 2px;
    margin-right: 2px;
}

.navbar-nav > li.list-inline > a {
    padding-left: 0px;
    padding-right: 5px;
    margin-left: 1px;
    margin-right: 1px;
}

ol.nav li a, ol.nav li a:visited {
    color: #337ab7 !important;
}

ol.nav li a:hover, ol.nav li a.active {
    color: #5e5e5e !important;
}
ol.nav li a:hover, ol.nav li a:active {
    color: #5e5e5e !important;
}
</style>

