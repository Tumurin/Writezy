<template>
  <!-- 英雄區塊：展示公司標語和主要業務 -->
  <section class="hero-section bg-dark text-white text-center">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <!-- 文字區塊：左側 -->
        <div class="col-md-6 text-md-start text-center">
          <h1 class="display-4">Writezy</h1>
          <h2>自由網路社群</h2>
          <p class="lead">輕鬆書寫，讓AI幫你分類，尋找讀者。</p>
          <div class="text-md-start text-center mt-4">
            <a href="#features" class="btn btn-primary btn-lg">立即加入</a>
          </div>
        </div>
        <!-- 圖片區塊：右側 -->
        <div class="col-md-6">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Hero Image"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- 問題解決區塊：說明公司如何解決特定問題 -->
  <section class="problem-solution py-5">
    <div class="container">
      <!-- 小標題 -->
      <h2 class="mb-4">解決以下<span class="text-primary">困擾</span></h2>
      <hr />
      <div class="row">
        <!-- 卡片一 -->
        <div class="col-md-6">
          <div class="card mb-3">
            <img
              src="https://via.placeholder.com/500x300"
              class="card-img-top"
              alt="問題一"
            />
            <div class="card-body">
              <h5 class="card-title">傳統訊息留閱讀不連貫</h5>
              <p class="card-text">
                在傳統訊息流中，讀者常常難以追蹤訊息的脈絡，這導致信息傳遞的效率大幅降低。
              </p>
            </div>
          </div>
        </div>
        <!-- 卡片二 -->
        <div class="col-md-6">
          <div class="card mb-3">
            <img
              src="https://via.placeholder.com/500x300"
              class="card-img-top"
              alt="問題二"
            />
            <div class="card-body">
              <h5 class="card-title">專版部落格難推廣</h5>
              <p class="card-text">
                專版部落格雖有其專業性，但往往因為缺乏適當的推廣策略而難以觸及更廣泛的受眾。
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </section>

  <!-- 主打賣點區塊 -->
  <section class="key-features py-5">
    <div class="container">
      <!-- 上方文字區塊 -->
      <div class="row mb-4">
        <!-- 左邊標題 -->
        <div class="col-md-6">
          <h2>全新的閱讀<span class="text-primary">體驗</span></h2>
        </div>
        <!-- 右邊說明文 -->
        <div class="col-md-6">
          <span class="badge bg-primary mb-2">#主題閱讀模式</span>
          <p>
            探索我們的網站，體驗傳統訊息流的閱讀樂趣！當您發現引人入勝的內容時，隨時切換至主題閱讀模式，深入探索感興趣的話題，讓您的閱讀之旅更加豐富多元。立即開啟知識的新視界！
          </p>
        </div>
      </div>
      <!-- 下方圖片 -->
      <img
        src="https://via.placeholder.com/1200x600"
        class="img-fluid"
        alt="Feature Image"
      />
    </div>
  </section>

  <!-- 產品特色區塊 -->
  <section class="product-features py-5">
    <div class="container">
      <!-- 標題與標籤 -->
      <div class="row mb-4">
        <div class="col-md-3">
          <h2>平台<span class="text-primary">特色</span></h2>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary me-3"># Google 最新AI</span>
          <span class="badge bg-primary me-3"># 主題沉浸式閱讀</span>
          <span class="badge bg-primary"># 天涯若比鄰般的互動</span>
        </div>
      </div>
      <hr />
      <!-- 特色一 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            class="img-fluid"
            alt="Google 最新AI"
          />
        </div>
        <div class="col-md-6">
          <h5>Google 最新AI</h5>
          <p>
            利用 Google 最新的 AI
            技術，我們的平台可以提供更精準的內容推薦，使閱讀更加個性化。
          </p>
        </div>
      </div>
      <hr />
      <!-- 特色二 -->
      <div class="row align-items-center mb-4">
        <div class="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            class="img-fluid"
            alt="主題沉浸式閱讀"
          />
        </div>
        <div class="col-md-6">
          <h5>主題沉浸式閱讀</h5>
          <p>
            通過主題沉浸式閱讀模式，使用者可以深入了解感興趣的領域，提供一個無干擾的閱讀環境。
          </p>
        </div>
      </div>
      <hr />
      <!-- 特色三 -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            class="img-fluid"
            alt="天涯若比鄰般的互動"
          />
        </div>
        <div class="col-md-6">
          <h5>天涯若比鄰般的互動</h5>
          <p>
            我們的平台允許使用者與全世界的人進行互動，就如同他們身處一室，使得交流無遠弗屆。
          </p>
        </div>
      </div>
      <hr />
    </div>
  </section>

  <!-- 開發團隊區塊 -->
  <section class="developer-team py-5">
    <div class="container">
      <!-- 標題與分隔線 -->
      <h2 class="mb-3">關於<span class="text-secondary">我們</span></h2>
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
      <div class="d-flex overflow-auto">
        <div class="card m-2" style="min-width: 300px">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="窄窄"
          />
          <div class="card-body">
            <h5 class="card-title">窄窄 <span class="badge bg-primary">前端</span></h5>
            <p class="card-text">專注於前端開發，擅長 React 和 Vue。</p>
          </div>
        </div>
        <div class="card m-2" style="min-width: 300px">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="寬寬"
          />
          <div class="card-body">
            <h5 class="card-title">寬寬 <span class="badge bg-primary">後端</span></h5>
            <p class="card-text">專注於後端架構，精通 Python 和 Node.js。</p>
          </div>
        </div>
        <div class="card m-2" style="min-width: 300px">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="麥麥口"
          />
          <div class="card-body">
            <h5 class="card-title">
              麥麥口 <span class="badge bg-primary">產品經理</span>
            </h5>
            <p class="card-text">負責產品規劃和市場分析。</p>
          </div>
        </div>
        <div class="card m-2" style="min-width: 300px">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="芮妮"
          />
          <div class="card-body">
            <h5 class="card-title">芮妮 <span class="badge bg-primary">設計師</span></h5>
            <p class="card-text">負責 UI/UX 設計，追求最佳使用者體驗。</p>
          </div>
        </div>
        <div class="card m-2" style="min-width: 300px">
          <img
            src="https://via.placeholder.com/300x200"
            class="card-img-top"
            alt="馬丁尼"
          />
          <div class="card-body">
            <h5 class="card-title">
              馬丁尼 <span class="badge bg-primary">測試工程師</span>
            </h5>
            <p class="card-text">專責測試和質量保證，確保產品的穩定性和性能。</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 頁腳區塊 -->
  <Footer></Footer>
</template>

<style scoped>
/* 英雄區塊的樣式 */
.hero-section {
  background: url("") no-repeat center center;
  background-size: cover;
  height: 100vh;
}
</style>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>
