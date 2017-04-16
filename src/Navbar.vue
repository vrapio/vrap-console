<template>
    <nav class="navbar navbar-default">
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
                <form class="navbar-form navbar-left">
                    <resource-select v-on:select="onSelect"></resource-select>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script src="./Navbar.js"></script>
