<template>
  <div >
<!--    <h1>{{ $store.state.isAuth ? "Пользователь авторизован" : "Авторизуйтель, чтобы использовать сервис" }}</h1>-->
<!--    <h1>{{ $store.getters.doubleLikes }}</h1>-->
<!--    <div>-->
<!--      <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>-->
<!--      <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>-->
<!--    </div>-->
    <h1>Страница с постами</h1>
    <my-input
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск..."
    />
    <div class="app__btns">
      <my-button
          @click="showDialog"
      >Создать пост</my-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm
          @create="createPost" />
    </my-dialog>
    <PostList
        :posts="sortedAndSearchedPost"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
        <div class="page__wrapper">
          <div
              v-for="pageNumber in totalPages"
              :key="pageNumber"
              class="page"
              :class="{
                'current-page': page === pageNumber
              }"
              @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </div>
        </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  name: "PostPageWidthStore-page",
  components: {MySelect, MyInput, MyButton, MyDialog, PostList, PostForm},
  data() {
    return {
      // posts: [],
      dialogVisible: false,
      // isPostLoading: false,
      // selectedSort: '',
      // searchQuery: '',
      // page: 1,
      // limit: 10,
      // totalPages: 0,
      // sortOptions: [
      //   { value: 'title', name: 'По названию' },
      //   { value: 'body', name: 'По содержимому' },
      // ]
    }
  },
  methods: {
    ...mapMutations({
       setPage: 'post/setPage',
       setSearchQuery: 'post/setSearchQuery',
       setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },

    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts();
    // }
  },
  mounted() {
    this.fetchPosts();
    // console.log(this.$refs.observer)
    // let options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // let callback = (entries) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts()
    //   }
    // };
    // let observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPost: 'post/sortedAndSearchedPost',
    })
  },


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