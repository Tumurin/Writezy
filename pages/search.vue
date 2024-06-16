<template>
  <div class="container-lg container-fluid">
    <div class="row">
      <!-- 左側欄位 -->
      <div class="col-lg-3 d-flex justify-content-start align-items-start">
        <div>
          <p class="mb-4 fw-400">篩選結果</p>
          <TabsTab :selected-tab="selectedTab" @update-tab="handleTabUpdate(e)">
            <template #tab-1> 全部 </template>
            <template #tab-2> 貼文 </template>
            <template #tab-3> 社團 </template>
            <template #tab-4> 人物 </template>
          </TabsTab>
        </div> 
      </div>

      <!-- 中間瀑布流式貼文 -->
      <div class="col-12 col-lg-6 border">
        <p>搜尋「程式」結果</p>
        <div class="horizontal-line"></div>
        <TabsContent :selected-tab="selectedTab">
          <template #content-1> 
            <p>這頁是全部</p>
            <section class="mb-4 border">
              <div class="d-flex justify-content-between">
                <div>
                  <Icon name="ic:outline-insert-drive-file" class="fs-4 me-2" />貼文
                </div>
                <p>查看全部</p>
              </div>
              <PostFrame></PostFrame>
            </section>

            <section class="mb-4 border">
              <div class="d-flex justify-content-between">
                <div>
                  <Icon name="akar-icons:people-group" class="fs-4 me-2" />社團
                </div>
                <p>查看全部</p>
              </div>
              <PostFrame></PostFrame>
            </section>

            <section class="mb-4 border">
              <div class="d-flex justify-content-between">
                <div>
                  <Icon name="material-symbols:person-outline-rounded" class="fs-4 me-2" />人物
                </div>
                <p>查看全部</p>
              </div>
              <PostFrame></PostFrame>
            </section>
          </template>

          <template #content-2> 貼文 </template>
          <template #content-3> 社團 </template>
          <template #content-4> 人物 </template>
        </TabsContent>
      </div>

      <!-- 右側資訊卡 -->
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script setup>
const selectedTab = ref(1)

function handleTabUpdate(newTab) {
  selectedTab.value = newTab
}
</script>

<style lang="scss" scoped>
.horizontal-line {
    width: 100%;
    height: 1px;
    border-top: solid 1px #cdaeef;
  }
</style>