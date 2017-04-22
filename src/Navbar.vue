<template>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#navbar-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="http://vrap.io">vrap.io</a>
            </div>
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <p class="navbar-text navbar-left">{{baseUri}}</p>
                <form class="navbar-form navbar-left">
                    <resource-select v-on:select="onSelect"></resource-select>
                </form>
                <p class="navbar-text navbar-right"><span class="label label-primary text-capitalize">{{vrapMode}}</span></p>
            </div>
        </div>
    </nav>
</template>
<script src="./Navbar.js"></script>
