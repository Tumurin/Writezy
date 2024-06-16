<template>
  <div class="frame align-items-center p-2">
    <div class="content-frame d-flex justify-content-between align-items-center">
      <div class="avatar-name d-flex justify-content-between align-items-center">
        <div class="avatar rounded-circle"></div>
        <div class="ms-3">
          <span class="name d-block">
            <span>
              {{ article.author.name }}
            </span>
            <UILocalTimeDisplay :inputTime="article.publishedDate"></UILocalTimeDisplay>
          </span>
          <span class="nick-name d-block">汽車銷售員</span>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="pointer bi bi-three-dots"
        viewBox="0 0 16 16"
        @click="edit"
      >
        <path
          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
        />
      </svg>
    </div>
    <div class="row mt-3 content">
      <div
        class="text-frame"
        :class="{ 'col-lg-8': isImage }"
        :style="{ 'max-height': showContent ? '100%' : '' }"
      >
        <textarea v-if="onEditMode" v-model="newContent" />
        <!-- <slot v-else></slot> -->
        <PostMarkdownRenderer :content="content"></PostMarkdownRenderer>
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
    <div class="d-flex justify-content-between align-items-center mt-5">
      <div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-hand-thumbs-up"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
            />
          </svg>
          99
        </span>
        <span class="ms-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-chat-square"
            viewBox="0 0 16 16"
          >
            <path
              d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
            />
          </svg>
          99
        </span>
        <span class="ms-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-share"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
            />
          </svg>
          99
        </span>
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
.date {
  font-size: 14px;
  color: #b0afb9;
}
.avatar {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
}
img {
  width: 100%;
}
.content {
  overflow-y: hidden;
}
.name {
  font-size: 16px;
}
.nick-name {
  font-size: 14px;
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
