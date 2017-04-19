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
                            <label for="authorizationUri" class="col-md-6 control-label">Authorization Uri</label>
                            <div class="col-md-6">
                                <input v-model="authorizationUri" type="url" class="form-control" id="authorizationUri" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="clientId" class="col-md-6 control-label">Client Id</label>
                            <div class="col-md-6">
                                <input v-model="clientId" type="text" class="form-control" id="clientId" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="clientSecret" class="col-md-6 control-label">Client Secret</label>
                            <div class="col-md-6">
                                <input v-model="clientSecret" type="password" class="form-control" id="clientSecret" required>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="requestToken">Request Token</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Authorization.js"></script>
