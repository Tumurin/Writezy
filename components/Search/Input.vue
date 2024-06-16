<template>
  <div class="container d-flex ">
    <form class="form-signin wrapper m-auto" autocomplete="off">
      <div class="input-group-clear" style="position:relative">
        <input type="text" id="username" v-model="inputValue" class="form-control" 
          @focus="showHistory = true" @blur="hideDropdown" @input="addSearchQuery" @keyup.enter="addSearchQuery" required autofocus>
          <div v-show="!inputValue">
            <span class="input-search">
              <Icon name="material-symbols-light:search" /> 
            </span>
            <span class="input-placeholder">搜尋</span>
          </div>

          <span class="input-clear" v-show="inputValue" @click="clearInput">
            <Icon name="ic:outline-clear"/>
          </span>

          <!-- 搜尋展開視窗 -->
          <div v-if="showHistory" class="dropdown-menu show wrapper px-2">
            <div class="d-flex justify-content-between">
              <span>近期搜尋</span>
              <button class="btn btn-link p-0" @click="toggleEditMode">{{ editMode ? '完成' : '編輯' }}</button>
            </div>
            <div class="horizontal-line-purple my-2"></div>
            <div>
              <button
                class="dropdown-item"
                v-for="(item, index) in searchHistory"
                :key="index"
              >
                <div class="d-flex justify-content-between">
                  <span>
                    <Icon class="me-3" name="mdi:clock-outline" />
                    <span @click="selectHistoryItem(item)">{{ item }}</span>
                  </span>

                  <span v-if="editMode" type="button" @click="deleteHistory(index)">
                    <Icon name="ic:outline-clear"/>
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
const inputValue = ref('')
const clearInput = () => {
  inputValue.value = ''
};

// 搜尋展開視窗
const searchHistory = ref([])
const showHistory = ref(false)
const editMode = ref(false)

// 當 input 失去焦點時隱藏下拉選單
const hideDropdown = () => {
  setTimeout(() => {
    showHistory.value = false;
  }, 200); // 延遲隱藏以允許點擊
};

const loadSearchHistory = () => {
  if (typeof localStorage !== 'undefined') {
    const history = localStorage.getItem('searchHistory')
    if (history) {
      searchHistory.value = JSON.parse(history)
    }
  }
}

const toggleEditMode = () => {
  editMode.value = !editMode.value
}

const addSearchQuery = () => {
  if (inputValue.value && !searchHistory.value.includes(inputValue.value)) {
    searchHistory.value.unshift(inputValue.value)
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
  }
}

const deleteHistory = (index) => {
  searchHistory.value.splice(index, 1)
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value))
}

const selectHistoryItem = (item) => {
  inputValue.value = item
  // 可以在這裡觸發進一步的搜尋行為
}

onMounted(() => {
  loadSearchHistory()
})
</script>

<style lang="scss" scoped>
.wrapper {
  // max-width: 25.9375rem;
  width: 100%;
}

input:disabled  {
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
</style>