<script setup lang="ts">
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()

const [isLogin, switchAct] = useToggle(true)
const [isLoading, switchLoading] = useToggle(false)

const handleSwitch = ()=>{ switchAct() }

const title = computed(()=> isLogin.value ? 'Login': 'Register')

const { formData, formErr, clearErr } = useFormData({ username: '' })

const validateForm = ()=>{
    const { username } = formData
    if (!username) {
        return !(formErr.username = 'Please enter username')
    }
    return { username }
}

const handleSumbit = async ()=>{
    if(isLoading.value) return
    switchLoading(true)
    try{
        clearErr()
        
        const param = validateForm()

        if (param) {
            /** 
             * code for api.login
            */
            appStore.setUser({
                username: param.username,
                sessionId: 'SK28NP0'
            })

            router.push('/app')
        }
    } catch(err:any) {
        formErr.username = err?.message || 'Error'
    } finally {
        switchLoading(false)
    }
}
</script>

<template lang="pug">
.loginWrapper
    h2.text-3xl {{ title }}
    TheInput(
    v-model:value="formData.username"
    v-model:errMsg="formErr.username"
    placeholder="Enter your name"
    :max="40")
    .text-center
        CatBtn.mb-4(@click="handleSumbit") {{ !isLoading ? 'Start' : 'Loading' }}
        Transition(name="fade",mode="out-in")
            .hint(v-if="isLogin") No account yet? 
                a(@click="handleSwitch") Register 
                | one~
            .hint(v-else) Already have a account,
                a(@click="handleSwitch") Login 
                | now!
</template>

<style lang="scss" scoped>
.loginWrapper {
    @apply h-full col-center grid gap-y-10;
    .hint {
        @apply text-sm prose prose-slate;
        a {
            @apply font-bold prose-stone hover:underline;
        }
    }
}
</style>