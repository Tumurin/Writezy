<template>
  <div v-html="safeHtml" class="markdown-content"></div>
</template>

<script setup>
import MarkdownIt from "markdown-it";
import DOMPurify from "dompurify";

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const md = new MarkdownIt();

const safeHtml = computed(() => {
  const rawHtml = md.render(props.content);
  return DOMPurify.sanitize(rawHtml);
});
</script>

<style scoped>
/* 使用 Bootstrap 5 樣式類別來美化 Markdown 內容 */
.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-content p {
  margin-bottom: 1rem;
}

.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.markdown-content code {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
}

.markdown-content pre {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.25rem;
  overflow: auto;
}

.markdown-content blockquote {
  padding: 0.5rem 1rem;
  margin: 0 0 1rem;
  font-size: 1.25rem;
  border-left: 0.25rem solid #dee2e6;
}
</style>
