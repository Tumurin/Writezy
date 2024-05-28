<template>
  <!-- 標語和網站示意圖 -->
  <section class="d-flex bg-dark text-white">
    <!-- 文字區塊：左側 -->
    <div
      class="d-flex flex-column align-items-center justify-content-center text-start w-50"
    >
      <div>
        <h1 class="display-6"><b>Writezy</b></h1>
        <h2 class="display-3"><b>自由網路社群</b></h2>
        <p class="lead">輕鬆書寫，讓AI幫你分類，尋找讀者。</p>
        <div class="mt-4">
          <a href="#features" class="btn btn-primary btn-lg">立即加入</a>
        </div>
      </div>
    </div>
    <!-- 圖片區塊：右側 -->
    <img
      class="img-fluid w-50"
      src="~/assets/img/landingPage/topic.png"
      alt="Hero Image"
    />
  </section>

  <!-- 問題解決區塊：說明公司如何解決特定問題 -->
  <section class="problem-solution py-5">
    <div class="container">
      <!-- 小標題 -->
      <h2 class="mb-4">
        <b>解決以下<span class="text-primary-05">困擾</span></b>
      </h2>
      <hr />
      <div class="row">
        <div class="col-md-6 border-end">
          <CardStraight class="col-md-6 border-0 mx-auto">
            <template #img>
              <img
                src="~/assets/img/landingPage/problem1.png"
                alt="訊息留閱讀不連貫示意圖"
              />
            </template>
            <template #title>傳統訊息留閱讀不連貫</template>
            <template #content
              >在傳統訊息流中，讀者常常難以追蹤訊息的脈絡，這導致信息傳遞的效率大幅降低。</template
            >
          </CardStraight>
        </div>
        <div class="col-md-6">
          <CardStraight class="col-md-6 border-0 mx-auto">
            <template #img>
              <img
                src="~/assets/img/landingPage/problem2.jpg"
                alt="訊息留閱讀不連貫示意圖"
              />
            </template>
            <template #title>專版部落格難推廣</template>
            <template #content
              >專版部落格雖有其專業性，但往往因為缺乏適當的推廣策略而難以觸及更廣泛的受眾。</template
            >
          </CardStraight>
        </div>
      </div>
      <hr />
    </div>
  </section>

  <!-- 主打賣點區塊 -->
  <section class="key-features py-5 bg-grey-09 text-grey-01">
    <div class="container py-5">
      <!-- 上方文字區塊 -->
      <div class="row mb-4">
        <!-- 左邊標題 -->
        <div class="col-md-6">
          <h2>全新的閱讀<span class="text-primary-02">體驗</span></h2>
        </div>
        <!-- 右邊說明文 -->
        <div class="col-md-6">
          <TagOrange class="mb-3">#主題閱讀模式</TagOrange>

          <p>
            探索我們的網站，體驗傳統訊息流的閱讀樂趣！當您發現引人入勝的內容時，隨時切換至主題閱讀模式，深入探索感興趣的話題，讓您的閱讀之旅更加豐富多元。立即開啟知識的新視界！
          </p>
        </div>
      </div>
      <hr />
      <!-- 下方圖片 -->
      <img
        src="~/assets/img/landingPage/experience.jpg"
        class="img-fluid"
        alt="Feature Image"
      />
    </div>
  </section>

  <!-- 產品特色區塊 -->
  <section class="product-features py-5">
    <div class="container">
      <!-- 標題與標籤 -->
      <div class="row mb-5">
        <div class="col d-flex">
          <h2>平台<span class="text-primary-05 me-2">特色</span></h2>
          <TagOrange class="ms-5 me-3"># Google 最新AI</TagOrange>
          <TagOrange class="me-3"># 主題沉浸式閱讀</TagOrange>
          <TagOrange class="me-3"># 天涯若比鄰般的互動</TagOrange>
        </div>
      </div>
      <hr class="mb-5" />
      <!-- 特色一 -->
      <div class="row align-items-center mb-4">
        <div class="col">
          <CardHorizontal>
            <template #img>
              <img
                src="~/assets/img/landingPage/feature1.jpg"
                alt="Google 最新 AI 示意圖"
              />
            </template>
            <template #title>Google 最新AI</template>
            <template #content>
              利用 Google 最新的 AI
              技術，我們的平台可以提供更精準的內容推薦，使閱讀更加個性化。
            </template>
          </CardHorizontal>
          <hr class="my-5" />
          <CardHorizontal>
            <template #img>
              <img
                src="~/assets/img/landingPage/feature2.jpg"
                alt="主題沉浸式閱讀示意圖"
              />
            </template>
            <template #title>主題沉浸式閱讀</template>
            <template #content>
              通過主題沉浸式閱讀模式，使用者可以深入了解感興趣的領域，提供一個無干擾的閱讀環境。
            </template>
          </CardHorizontal>
          <hr class="my-5" />
          <CardHorizontal>
            <template #img>
              <img
                src="~/assets/img/landingPage/feature3.jpg"
                alt="天涯若比鄰般的互動示意圖"
              />
            </template>
            <template #title>天涯若比鄰般的互動</template>
            <template #content>
              我們的平台允許使用者與全世界的人進行互動，就如同他們身處一室，使得交流無遠弗屆。
            </template>
          </CardHorizontal>
        </div>
      </div>
      <hr class="my-5" />
    </div>
  </section>

  <!-- 開發團隊區塊 -->
  <section class="developer-team bg-grey-09 text-grey-01 py-5">
    <div class="container">
      <!-- 標題與分隔線 -->
      <h2 class="mb-3">關於<span class="text-primary-02">我們</span></h2>
      <hr />
      <!-- 團隊成員標籤 -->

      <div class="mb-4">
        <span class="badge bg-secondary me-3"># 窄窄</span>
        <span class="badge bg-secondary me-3"># 寬寬</span>
        <span class="badge bg-secondary me-3"># 麥麥口</span>
        <span class="badge bg-secondary me-3"># 芮妮</span>
        <span class="badge bg-secondary me-3"># 馬丁尼</span>
      </div>
      <!-- 團隊成員卡片，可捲動 -->
      <div class="d-flex custom-scroll">
        <!-- 芮妮 -->
        <CardIntroduce class="me-3"
          ><template #img>
            <img src="~/assets/img/landingPage/engineerRenee.jpeg" alt="寬寬的大頭照" />
          </template>
          <template #name> 芮妮 </template>
          <template #tags>
            <TagOrange>#前端工程師</TagOrange>
            <TagOrange>#後端工程師</TagOrange>
          </template>
          <template #description>
            人妻工程師。擁有三年的開發經驗，專長於Vue。熱愛解決複雜問題，致力於開發高效、可靠的軟體應用程序。我也是一個團隊合作者，善於在多元文化環境中工作。</template
          ></CardIntroduce
        >
        <!-- 麥口 -->
        <CardIntroduce class="me-3"></CardIntroduce>
        <!-- 寬寬 -->
        <CardIntroduce class="me-3">
          <template #img>
            <img src="~/assets/img/landingPage/engineerKuan.jpg" alt="寬寬的大頭照" />
          </template>
          <template #name> 寛寬 </template>
          <template #tags>
            <TagOrange>#前端工程師</TagOrange>
          </template>
          <template #description>
            Nuxt
            前端工程師，熱愛寫Code，經常把鍵盤敲壞。人送外號「鍵盤殺手」，每完成一個專案都需要一個鍵盤當作祭品。
          </template>
        </CardIntroduce>
        <!-- Rock -->
        <CardIntroduce class="me-3"></CardIntroduce>
      </div>
    </div>
  </section>

  <!-- 頁腳區塊 -->
  <Footer></Footer>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<style>
body {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.custom-scroll {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.custom-scroll::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
