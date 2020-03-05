<template>
    <div class="list-item">
        <div>card</div>
        <button @click="createEditor">try</button>
    </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
    name: 'ListCard',
    props: {
        card: {
            type: Object
        }
    },
    data() {
        return {
            editor: null
        }
    },
    methods: {
        createEditor() {
            // create div to avoid needing a HtmlWebpackPlugin template
            const div = document.createElement('div')
            div.id = 'editor'
            div.style = 'width:400px; height:400px; border:1px solid #ccc;'

            document.body.appendChild(div)
            this.editor = monaco.editor.create(
                document.getElementById('editor'),
                {
                    value: `const foo = 0;`,
                    language: 'javascript',
                    theme: 'vs-dark'
                }
            )
            console.log(this.editor.getValue())
        }
    }
}
</script>

<style lang="scss" scoped>
.list-item {
    width: 100px;
    height: 100px;
    #editor {
        width: 500px;
        height: 500px;
    }
}
</style>
