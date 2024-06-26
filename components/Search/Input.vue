<template>
  <div class="container d-flex">
    <form
      class="form-signin wrapper m-auto"
      @submit.prevent="addSearchQuery"
      autocomplete="off"
    >
      <div class="input-group-clear" style="position: relative">
        <span class="input-search">
          <Icon name="material-symbols-light:search" />
        </span>
        <input
          type="text"
          v-model="inputValue"
          class="form-control ps-5"
          @keydown="onKeyDown"
          @focus="showHistory = true"
          @blur="hideHistory"
          placeholder="搜尋"
          required
          autofocus
        />

        <span class="input-clear" v-show="inputValue" @click="clearInput">
          <Icon name="ic:outline-clear" />
        </span>

        <!-- 搜尋展開視窗 -->
        <div v-if="showHistory" class="dropdown-menu show wrapper px-2 mt-2">
          <div class="d-flex justify-content-between">
            <span>近期搜尋</span>
          </div>
          <div class="horizontal-line-purple my-2"></div>
          <div>
            <button
              type="button"
              class="dropdown-item"
              v-for="(item, index) in searchHistory"
              :key="index"
              :class="{ active: index === selectedIndex }"
              @mousedown.prevent="selectHistoryItem(index)"
            >
              <div class="d-flex justify-content-between">
                <span>
                  <Icon class="me-3" name="mdi:clock-outline" />
                  <span>{{ item }}</span>
                </span>
                <span type="button" @click="deleteHistory(index)">
                  <Icon name="ic:outline-clear" />
                </span>
              </div>

              <!-- <div>
                  <ItemsDeleteFriendNoIcon></ItemsDeleteFriendNoIcon>
                </div> -->
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
const router = useRouter();

const inputValue = ref("");
const clearInput = () => {
  inputValue.value = "";
};

// 搜尋展開視窗
const searchHistory = ref([]);
const showHistory = ref(false);
const selectedIndex = ref(-1);

onMounted(() => {
  loadSearchHistory();
});

const loadSearchHistory = () => {
  if (typeof localStorage !== "undefined") {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      searchHistory.value = JSON.parse(history);
    }
  }
};

const addSearchQuery = () => {
  if (inputValue.value && !searchHistory.value.includes(inputValue.value)) {
    searchHistory.value.unshift(inputValue.value);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory.value));
  }
  navigateToSearch();
};

const deleteHistory = (index) => {
  searchHistory.value.splice(index, 1);
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory.value));
};

const selectHistoryItem = (index) => {
  inputValue.value = searchHistory.value[index];
  selectedIndex.value = index;
  hideHistory();
};

const hideHistory = () => {
  setTimeout(() => {
    showHistory.value = false;
  }, 200);
};

const navigateToSearch = () => {
  router.push({ path: "/search", query: { q: inputValue.value } });
};

const onKeyDown = (event) => {
  if (!showHistory.value) return;

  switch (event.key) {
    case "ArrowDown":
      if (selectedIndex.value < searchHistory.value.length - 1) {
        selectedIndex.value++;
      }
      break;
    case "ArrowUp":
      if (selectedIndex.value > 0) {
        selectedIndex.value--;
      }
      break;
    case "Enter":
      if (selectedIndex.value >= 0) {
        selectHistoryItem(selectedIndex.value);
      }
      break;
    case "Tab":
      if (selectedIndex.value >= 0) {
        event.preventDefault();
        selectHistoryItem(selectedIndex.value);
      }
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  // max-width: 25.9375rem;
  width: 100%;
}

input:disabled {
  border-color: $gray-200;
  background-color: $gray-000;
}

.form-control {
  &:focus {
    border-color: $primary-300;
    box-shadow: 0 0px 0px #ccc;
  }
}

.input-placeholder {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: $gray-600;
}

.input-search {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 111;
  font-size: 20px;
  color: $black;
}

.input-clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 111;
  font-size: 20px;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  cursor: pointer;
}

.horizontal-line-purple {
  width: 100%;
  height: 1px;
  border-top: solid 1px #cdaeef;
}

.dropdown-item.active {
  background-color: #007bff;
  color: white;
}
</style>
