<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName =
                toDepth < fromDepth ? 'slide-right' : 'slide-right'
            console.log(toDepth < fromDepth)
            console.log(this.transitionName)
        }
    }
}
</script>

<style scoped lang="scss">
.slide-right-enter-active,
.slide-left-enter-active {
    will-change: transform;
    transition: all 500ms;
}
.slide-left-leave-active,
.slide-right-leave-active {
    will-change: transform;
    transition: all 1ms;
}
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
