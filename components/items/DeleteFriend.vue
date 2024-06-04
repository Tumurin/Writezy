<template>
    <div class="frame border border-1 d-flex justify-content-center align-items-center">
        <div class="content-frame d-flex justify-content-between align-items-center">
            <div class="avatar-name d-flex justify-content-between align-items-center">
                <div class="avatar rounded-circle"></div>
                <div>
                    <span class="name d-block">林小明</span>
                    <span class="nick-name d-block">稱號</span>
                </div>
            </div>
            <a type="button" @click.prevent="openModal()">
                <img src="../../assets/img/deletefriend.png" alt="">
            </a>
        </div>
    </div>
</template>
<script setup>
const emits = defineEmits(['deleteConfirm'])
const openModal = ()=>{
    emits('deleteConfirm')
}
</script>
<style scoped>
.frame{
    width: 240px;
    height: 73px;
}
.content-frame{
    width: 216px;
    height: 49px;
}
.avatar-name{
    width: 104px;
    height: 49px;
}
.avatar{
    width: 40px;
    height: 40px;
    background-color: #d9d9d9;
}
img{
    width: 24px;
    height: 24px;
}
.name{
    font-size: 16px;
}
.nick-name{
    font-size: 14px;
}
</style>