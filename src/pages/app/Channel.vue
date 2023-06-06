<script setup lang="ts">
import key from 'keymaster'
import { useAppStore } from '@/store/app'
import { useMockStore, NAMELIST } from '@/store/mockData'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const mockData = useMockStore()

const state = reactive<{
    inputVal: string
    chatlogs: any[]
}>({
    inputVal: '',
    chatlogs: []
})

const channelId = computed(()=>route.params?.id)
const userInfo = computed(()=>{
    if(channelId.value){
        if(channelId.value === appStore.user?.sessionId) {
            return appStore.user
        }
        return mockData.findUserById(channelId.value as string)
    }
    return null
})
const userModel = computed(()=>{
    const _n = userInfo.value?.username
    if(userInfo.value?.username) {
        return NAMELIST.find(e=>e[0] === _n)
    }
})

const fetchList = async () => {
    state.chatlogs.length = 0
    state.chatlogs = userInfo.value ? [
        {
            id: 1,
            from: userInfo.value?.sessionId,
            to: appStore.user?.sessionId,
            data: userModel.value?.[2] || `Hello, I'm ${userInfo.value?.username}.`
        },
        {
            id: 2,
            from: appStore.user?.sessionId,
            to: userInfo.value?.sessionId,
            data: `Hello!`
        }
    ] : []
}

const addLog = (data: any, from?:string, to?: string) => {
    state.chatlogs.push({
        id: state.chatlogs.length + 1,
        from, to, data
    })
}

const handleAnswer = () => {
    const _val = state.inputVal
    if (!_val) return
    state.inputVal = ''

    const curSID = appStore.user?.sessionId
    const toSID = userInfo.value?.sessionId

    addLog(_val.trim(), curSID, toSID)

    if (_val === '/time') {
        addLog(new Date().toLocaleString(), toSID, curSID)
        return
    }

    const _case = userModel.value?.[1]
    switch(_case){
        case 'repeat':
            addLog('You said: ' + _val, toSID, curSID)
            break
        case 'reverse':
            addLog(_val.split('').reverse().join(''), toSID, curSID)
            break
        default:
            break
    }
}

watch(
    () => userInfo.value,
    (u: any) => { u && fetchList() },
    { immediate: true }
)

onMounted(() => {
    key('space+r', function(){ 
        const randomItem = mockData.data[Math.floor(Math.random()*mockData.data.length)]
        router.push('/app/' + randomItem.sessionId)
        return false 
    });
})
</script>
<template lang="pug">
.h-full.w-full
    .row-center.h-full.w-full(v-if="!userInfo")
            .text-2xl.font-bad.font-bold.prose.prose-stone Space + R | Chat with Random 
    .h-full.flex.flex-col.gap-y-4(v-else) 
        h4 To: {{ userInfo?.username }}
        ul.grow.overflow-overlay.h-10px: TransitionGroup(name="show" )
            li.chatPop(
                v-for="item in state.chatlogs" 
                :key="item.id"
                :class="[item.from === channelId ? 'justify-start' : 'justify-end']"
            ): section {{ item.data }} 
        TheInput(
            v-model:value="state.inputVal" 
            placeholder="Press enter to submit"
            @on-enter="handleAnswer"
        )
</template>

<style scoped lang="scss">
.chatPop {
    @apply mb-4 flex;
    section {
        @apply rounded-2 w-max py-2 px-4;
        border: 1px solid;
    }
}
</style>