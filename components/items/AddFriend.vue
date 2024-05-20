<template>
    <div class="frame border border-1 d-flex justify-content-center align-items-center p-2">
        <div class="content-frame d-flex justify-content-between align-items-center">
            <div class="avatar-name d-flex justify-content-between align-items-center">
                <div class="avatar rounded-circle"></div>
                <div>
                    <span class="name d-block">林小明</span>
                    <span class="nick-name d-block">稱號</span>
                </div>
            </div>
            <button class="border-0">加入好友</button>
        </div>
    </div>
</template>
<style scoped>
.frame{
    width: 425px;
    height: 73px;
}
.content-frame{
    width: 100%;
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
button{
    width: 96px;
    height: 40px;
    background: #8135d8;
    color: white;
}
</style>
