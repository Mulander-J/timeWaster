<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
import { useAppStore } from '@/store/app'
import { useMockStore } from '@/store/mockData'

const router = useRouter()
const appStore = useAppStore()
const mockStore = useMockStore()

const state = reactive<{
    data: any []
    loading: boolean
}>({
    data: [],
    loading: false
})

const currentUser = computed(() => appStore.user || null)

const fetchUsers = async ()=>{
    if (state.loading) return
    state.loading = true
    try {
        await promiseTimeout(1800)
        state.loading = false
        await promiseTimeout(800)
        state.data = mockStore.fetchData()
    } catch{
        state.data.length = 0
    } finally {
        state.loading = false
    }
}

const logout = ()=>{
    appStore.clearUser()
    router.push('/')
}

const skip2Channel = (user?: any)=>{
    user ? router.push('/app/'+ user.sessionId) : router.push('/app')
}

onMounted(()=>{
    appStore.getUser()
    fetchUsers()
})
</script>

<template lang="pug">
.flex.h-full
    .w-300px.flex.flex-col.gap-y-4.p-6
        .user-card(@click="skip2Channel(null)")
            TheAvatar(:seed="currentUser?.username", :size="64")
            span {{ currentUser?.username || 'Anonymous' }}
        hr
        Transition(name="fade" mode="out-in")
            CatSpin(v-if="state.loading")
            ul.userList(v-else)
                TransitionGroup(name="show" )
                    li.user-card(
                    v-for="(item, i) in state.data"
                    :key="i"
                    :class="[item.sessionId === $route.params?.id && 'item__active']"
                    @click="skip2Channel(item)")
                        TheAvatar(:seed="item.username", :size="52")
                        .grid
                            span {{ item.username }}
                            p {{  item.lastUpdateAt }}
        CatBtn(@click="logout") Logout
    .channelView: Router-view(:key="$route.params?.id || 1")
</template>

<style scoped lang="scss">
.user-card {
    @apply cursor-pointer prose min-h-40px h-max p-4 grid gap-x-4 items-center;
    grid-template-columns: 64px auto;
    border: 1px solid;
    &:hover {
        box-shadow: inset 0px 0px 3px 1px rgba(255,255,255,.3);
    }
    span {
        @apply prose prose-stone;
    }
    p {
        @apply prose prose-slate text-sm;
    }
}
.user-card.item__active {
    @apply border-white;
}
.userList {
    @apply grow overflow-overlay h-10px;
    &::-webkit-scrollbar {
        display: none;
    } 
}
.channelView {
    @apply grow p-6 mb-6;
    border-left: 1px solid #222;
}
</style>