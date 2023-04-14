<template>
  <div class="flex items-center">
    <svg
      v-show="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <input
      class="border block rounded py-2 px-3 leading-tight placeholder-gray-400 focus:placeholder-orange-400 focus:text-orange-400 focus:outline-none focus:shadow-outline"
      v-model.trim="word"
      :class="[!!exist ? 'bg-gray-900 text-white' : '']"
      :readonly="!!exist"
      placeholder="Enter KeyWord"
      @keyup.enter="wordEnter"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Api from './../api';
  import auth from './../util/auth';
  import hook from './../common/hook';

  let exist = ref('');
  let word = ref('');
  let loading = ref(false);

  let getExistIssue = (): Promise<boolean> => {
    const YMD = new Date().toLocaleDateString();
    const Issule_Title = 'TW/' + YMD;
    const since = new Date(YMD).toISOString();
    loading.value = true;
    //  search issue
    return Api.getIssueList(since)
      .then((issues: any) => {
        let isExist = issues.data.find((i: any) => i.title === Issule_Title);
        if (isExist) {
          exist.value = isExist.body;
          word.value = isExist.body;
          return true;
        }
        return false;
      })
      .catch((err) => {
        console.log('#Issue/Get:', err);
        exist.value = 'Loading';
        return true;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  let wordEnter = async (): Promise<any> => {
    if (!word.value || exist.value || loading.value) return;
    try {
      let isExist = await getExistIssue();
      // console.log(isExist);
      if (!isExist) {
        loading.value = true;
        //  create issue
        let priKey = localStorage.getItem('Token') || prompt('请输入私钥') || '';
        const token = auth.getAuthToken(priKey);
        alert('Token:' + !!token);
        let msg = token ? await Api.addIssue(word.value, token) : null;
        alert(msg ? 'Request Finsihed' : 'Require Token');
      }
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };

  hook({
    afterMounted: () => {
      getExistIssue();
    },
  });
</script>

<style scoped></style>
