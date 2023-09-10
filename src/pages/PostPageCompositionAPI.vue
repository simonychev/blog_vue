<template>
  <div>
    <h1>{{ likes }}</h1>
    <my-button @click="addLike">Add Likes</my-button>
    <h1>Страница с постами</h1>
    <my-input
        v-focus
        v-model="searchQuery"
        placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button

      >Создать пост</my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm

      />
    </my-dialog>
    <PostList
        :posts="sortedAndSearchedPost"

        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {ref} from "vue";
import {usePosts} from "@/hooks/usePosts";
import useSortedAndSearchPost from "@/hooks/useSortedAndSearchPost";
import useSortedPosts from "@/hooks/useSortedPosts";

export default {
  name: "PostPageWidthStore-page",
  components: {MyInput, MySelect, MyDialog, PostList, PostForm},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPost} = useSortedAndSearchPost(sortedPosts)
    const likes = ref(0)
    console.log(props)
    const addLike = () => {
      likes.value += 1
    }

    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPost,
      likes,
      addLike
    }
  }
}
</script>

<style scoped>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>