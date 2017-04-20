<template>
    <div class="modal fade" id="authorization" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Authorization</h4>
                </div>
                <div class="modal-body">
                    <div class="form">
                        <div class="form-group">
                            <label for="authorizationUri" class="control-label">Authorization Uri</label>
                            <input v-model="authorizationUri" type="url" class="form-control" id="authorizationUri" required>
                        </div>
                        <div class="form-group">
                            <label for="clientId" class="control-label">Client Id</label>
                            <input v-model="clientId" type="text" class="form-control" id="clientId" required>
                        </div>
                        <div class="form-group">
                            <label for="clientSecret" class="control-label">Client Secret</label>
                            <input v-model="clientSecret" type="password" class="form-control" id="clientSecret" required>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div v-if="failure">{{failure}}</div>
                    <button type="button" class="btn btn-primary" @click="requestToken">Request Token</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Authorization.js"></script>
