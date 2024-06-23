<template>
  <div class="frame align-items-center p-2">
    <div class="content-frame d-flex justify-content-between align-items-center">
      <PostName />
      <UILocalTimeDisplay :inputTime="article.publishedDate"></UILocalTimeDisplay>
      <UIThreeDots />
    </div>
    <div class="row mt-3 content">
      <div
        class="text-frame"
        :class="{ 'col-lg-8': isImage }"
        :style="{ 'max-height': showContent ? '100%' : '' }"
      >
        <textarea v-if="onEditMode" v-model="newContent" />
        <!-- <slot v-else></slot> -->
        <!-- <PostMarkdownRenderer :content="content"></PostMarkdownRenderer> -->
      </div>
      <div class="col-lg-4" v-if="isImage">
        <img
          src="https://images.unsplash.com/photo-1715145208397-c36448202991?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <div>
      <p class="text-center mt-3">
        <a
          href="#"
          @click.prevent="showContent = !showContent"
          class="text-decoration-none text-dark"
        >
          <span v-if="showContent">顯示較少</span>
          <span v-else>看更多</span>
        </a>
      </p>
    </div>
    <!-- 標籤區 -->
    <div class="d-flex">
      <TagOrange
        class="mx-2 pointer"
        v-for="(tag, index) in article.tags"
        :key="index"
        @click="addToTagCollection(tag)"
        >{{ tag }}</TagOrange
      >
    </div>
    <!-- 功能區 -->
    <div class="d-flex justify-content-between align-items-center mt-5">
      <div>
        <UIThumbUp />
        <UIChat class="ms-3" />
        <UIShare class="ms-3" />
      </div>
      <div>
        <UIChooseCollection :articleId="articleId"></UIChooseCollection>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  article: {
    type: Object,
  },
  articleId: {
    type: String,
  },
  author: {
    type: Object,
    default: "Author",
  },
  content: {
    type: String,
  },
});

onBeforeMount(() => {
  newContent.value = props.content;
});

const showContent = ref(false);
const isImage = ref(true);

const onEditMode = ref(false);
const newContent = ref("");

const emits = defineEmits(["edited"]);
async function edit() {
  // TODO: 比對用戶 id 跟 authorId 是否相符
  if (onEditMode.value === false) {
    onEditMode.value = !onEditMode.value;
  } else {
    const result = await useFetchWithToken(`api/article/${props.articleId}`, {
      method: "PATCH",
      body: {
        content: newContent.value,
      },
    });
    console.log(result);
    emits("edited");
    onEditMode.value = !onEditMode.value;
  }
}

// 添加這個標籤到用戶收藏中
async function addToTagCollection(tag) {
  console.log("用戶收藏:", tag);
  const result = await useFetchWithToken(`api/tag/`, {
    method: "POST",
    body: {
      tag,
    },
  });
  console.log(result);
}
</script>
<style scoped>
/* 手指 hover */
.pointer {
  cursor: pointer;
}

/* .frame {
  max-width: 700px;
  height: 100%;
} */
.content-frame {
  width: 100%;
}
img {
  width: 100%;
}
.content {
  overflow-y: hidden;
}
.text-frame {
  max-height: 150px;
  overflow-y: hidden;
}
@media (max-width: 992px) {
  .text-frame {
    max-height: 50px;
    margin-bottom: 30px;
  }
}
</style>
