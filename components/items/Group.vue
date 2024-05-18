<template>
    <div class="frame border border-1 d-flex justify-content-center align-items-center">
        <div class="content-frame d-flex justify-content-between align-items-center">
            <div class="avatar-name d-flex justify-content-between align-items-center">
                <div class="avatar rounded-circle"></div>
                <div class="ms-3">
                    <span class="name d-block">Group</span>
                    <span class="detail d-block">公開，2152成員</span>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
        </div>
    </div>
</template>
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
.detail{
    font-size: 14px;
    color:#7F7E88;
}
</style>