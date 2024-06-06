<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid d-flex my-4">
      <div class="row wrapper m-auto align-items-center">
        <div class="col-lg-3 col-md-2 col-2">
          <UILogo></UILogo>
        </div>
        <div class="col-lg-6 col-md-8 col-8">
          <SearchInput></SearchInput>
        </div>
        <div
          class="col-lg-3 col-md-2 col-2 d-flex justify-content-center d-lg-flex justify-content-lg-end"
        >
          <!-- PC SHOW -->
          <div class="d-lg-block d-none">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <ButtonFlatBell class="nav-link me-4"></ButtonFlatBell>
                </li>
                <li class="nav-item">
                  <ButtonFlatNotification class="nav-link me-4"></ButtonFlatNotification>
                </li>
                <li class="nav-item d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn p-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="false"
                    >
                      <UIAvatar userId="abcd1234"></UIAvatar>
                    </button>
                    <ul class="avatar-wrapper dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="#" @click="goToProfile"
                          >前往個人主頁</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">前往我的社團-程式同好社</a>
                      </li>
                      <li><a class="dropdown-item" href="#">建立新社團</a></li>
                      <li><a class="dropdown-item" href="#">編輯主頁</a></li>
                      <li><a class="dropdown-item" href="#">登出</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- MOBILE SHOW -->
          <ButtonFilledBergurMenu
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></ButtonFilledBergurMenu>
        </div>
      </div>
      <!-- MOBILE SHOW -->
      <div class="row d-lg-none d-block mobile-wrapper">
        <div class="col-12">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-start align-items-start">
              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#personal"
                aria-controls="offcanvasRight"
              >
                <Icon name="material-symbols:person-outline-rounded" class="fs-4 me-3" />
                <span class="fs-8 fw-400">個人頁面</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="personal"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">個人頁面</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body d-flex flex-column">
                  <nuxt-link
                    to="/"
                    class="mb-3 fw-400 fs-8 text-black text-decoration-none"
                    >前往個人主頁</nuxt-link
                  >
                  <nuxt-link
                    to="/"
                    class="mb-3 fw-400 fs-8 text-black text-decoration-none"
                    >前往我的社團-程式同好社</nuxt-link
                  >
                  <nuxt-link
                    to="/"
                    class="mb-3 fw-400 fs-8 text-black text-decoration-none"
                    >建立新社團</nuxt-link
                  >
                  <nuxt-link
                    to="/"
                    class="mb-3 fw-400 fs-8 text-black text-decoration-none"
                    >登出</nuxt-link
                  >
                </div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#notify"
                aria-controls="offcanvasRight"
              >
                <Icon name="ic:baseline-notifications-none" class="fs-4 me-3" />
                <span class="fs-8 fw-400">通知</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="notify"
                aria-labelledby="offcanvasRightLabel"
              >
                <div class="offcanvas-header">
                  <div class="tabs">
                    <div class="d-flex justify-content-start me-auto">
                      <Icon
                        name="material-symbols:arrow-back-ios-new-rounded"
                        class="me-3 text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      />
                      <h5 class="mb-0" id="offcanvasRightLabel">通知</h5>
                    </div>

                    <!-- tab group -->
                    <input type="radio" id="tab-1" name="tab" checked="checked" />
                    <label for="tab-1">未讀</label>
                    <div class="tab-content">
                      <div class="horizontal-line mb-1"></div>
                      Content 1
                    </div>

                    <input type="radio" name="tab" id="tab-2" />
                    <label for="tab-2">全部</label>
                    <div class="tab-content">
                      <div class="horizontal-line mb-1"></div>
                      Content 2
                    </div>
                  </div>
                </div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#inbox"
                aria-controls="offcanvasRight"
              >
                <Icon name="material-symbols:inbox-outline" class="fs-4 me-3" />
                <span class="fs-8 fw-400">收件夾</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="inbox"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">收件夾</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body d-flex flex-column">
                  <div class="avatar rounded-circle"></div>
                </div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#tag"
                aria-controls="offcanvasRight"
              >
                <Icon name="mdi:tag-outline" class="fs-4 me-3" />
                <span class="fs-8 fw-400">我的標籤</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="tag"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">我的標籤</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body">
                  <Folder
                    folderName="我的標籤"
                    :items="[
                      { id: 1, name: '標籤1', type: 'file' },
                      { id: 2, name: '標籤2', type: 'file' },
                      {
                        id: 3,
                        name: '子資料夾',
                        type: 'folder',
                        children: [
                          { id: 4, name: '子資料夾項目1', type: 'file' },
                          { id: 5, name: '子資料夾項目2', type: 'file' },
                        ],
                      },
                    ]"
                  ></Folder>
                </div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#collection"
                aria-controls="offcanvasRight"
              >
                <Icon name="mdi:heart-outline" class="fs-4 me-3" />
                <span class="fs-8 fw-400">我的收藏</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="collection"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">我的收藏</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body">
                  <Folder
                    folderName="我的收藏"
                    :items="[
                      { id: 1, name: '收藏項目1', type: 'file' },
                      { id: 2, name: '收藏項目2', type: 'file' },
                    ]"
                  ></Folder>
                </div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#fire"
                aria-controls="offcanvasRight"
              >
                <Icon name="mdi:fire" class="fs-4 me-3" />
                <span class="fs-8 fw-400">熱門標籤</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="fire"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">熱門標籤</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body">...</div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#friends"
                aria-controls="offcanvasRight"
              >
                <Icon name="ic:sharp-group" class="fs-4 me-3" />
                <span class="fs-8 fw-400">好友</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="friends"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">好友</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body">...</div>
              </div>

              <li
                class="navbar-list"
                data-bs-toggle="offcanvas"
                data-bs-target="#club"
                aria-controls="offcanvasRight"
              >
                <Icon name="akar-icons:people-group" class="fs-4 me-3" />
                <span class="fs-8 fw-400">社團</span>
              </li>
              <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="club"
                aria-labelledby="offcanvasRightLabel"
              >
                <div
                  class="offcanvas-header d-flex justify-content-start align-items-center"
                >
                  <Icon
                    name="material-symbols:arrow-back-ios-new-rounded"
                    class="me-3 text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                  <h5 class="mb-0" id="offcanvasRightLabel">社團</h5>
                </div>
                <div class="horizontal-line-purple my-2"></div>
                <div class="offcanvas-body">...</div>
              </div>
            </ul>

            <!-- 聊天室 -->
            <div class="horizontal-line my-2"></div>
            <div
              data-bs-toggle="offcanvas"
              data-bs-target="#chat"
              aria-controls="offcanvasRight"
            >
              <div class="avatar rounded-circle"></div>
            </div>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="chat"
              aria-labelledby="offcanvasRightLabel"
            >
              <div
                class="offcanvas-header d-flex justify-content-start align-items-center"
              >
                <Icon
                  name="material-symbols:arrow-back-ios-new-rounded"
                  class="me-3 text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div class="offcanvas-body">
                <div class="px-3 py-3 border">
                  <div>
                    <span class="d-flex justify-content-between align-items-center">
                      <div class="avatar rounded-circle"></div>
                    </span>
                    <div class="horizontal-line-purple my-3"></div>
                    <p class="text-center">3月16日</p>

                    <div class="d-flex justify-content-start align-items-center">
                      <p class="chat-style d-flex flex-wrap">
                        Lorem ipsum dolor sit amet consectetur<span
                          class="fs-sm text-grey-04 ms-2 mt-1"
                          >18:09</span
                        >
                      </p>
                    </div>
                    <div class="d-flex justify-content-end flex-wrap">
                      <p class="chat-style d-flex flex-wrap">
                        consequuntur libero labore ratione facere!<span
                          class="fs-sm text-grey-04 mt-1"
                          >18:09</span
                        >
                      </p>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                      <button type="button" class="btn btn-secondary">
                        <Icon name="cil:image-plus" class="image-plus" />
                      </button>
                      <input
                        class="form-control mx-1"
                        type="text"
                        placeholder="輸入"
                        aria-label="default input example"
                      />
                      <button type="button" class="btn btn-primary">傳送</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const userInfo = useAuthUser();
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 81rem;
  width: 100%;
}

.avatar-wrapper {
  max-width: 400px;
  width: 100%;
}

.avatar-img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}

.mobile-wrapper {
  max-width: 61rem;
  width: 100%;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  border-top: solid 1px #d7d7dc;
}

.horizontal-line-purple {
  width: 100%;
  height: 1px;
  border-top: solid 1px #cdaeef;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}

.navbar-list {
  max-width: 23.4375rem;
  width: 100%;
  padding: 0.625rem 0;
}

.offcanvas.offcanvas-end {
  width: 100%;
}

.notify-wrapper {
  max-width: 400px;
  width: 100%;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 61.9375rem;
  width: 100%;

  input[type="radio"] {
    display: none;

    &:checked {
      + label {
        color: #4d2082;
        background-color: white;
        transform: translatey(1px);

        + .tab-content {
          display: block;
        }
      }
    }
  }

  label {
    padding: 0.5em 0.75em;
    color: #ccc;
    cursor: pointer;
    order: 0;
    &:hover {
      color: rgb(15, 16, 15);
    }
  }

  .tab-content {
    display: none;
    padding: 1rem 0.75rem;
    width: 100%;
    order: 1;
  }

  .horizontal-line {
    width: 100%;
    height: 1px;
    border-top: solid 1px #cdaeef;
  }
}

.chat-style {
  width: 55%;
  background-color: #f2ebfb;
  border-radius: 8px;
  padding: 0.5rem;
}
//
</style>
