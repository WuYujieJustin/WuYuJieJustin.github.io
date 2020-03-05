<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <monaco-editor :editorContent="name"></monaco-editor>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            name: 'const foo = 1\nlet a = 1\n//comment \nlet b = 1'
        }
    }
}
</script>
