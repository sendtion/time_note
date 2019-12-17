<template>
    <div class="note-list">
        <h1>笔记列表</h1>
        <input type="button" value="添加笔记" @click="addNote">
        <ul v-for="item in notes" :key="item.objectId">
            <li>
                <!-- to不加冒号不能正常跳转 -->
                <router-link :to="{path:'/note_detail', query:{id:item.objectId}}" target='_blank'>
                    [{{item.group.groupName}}] {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NoteList',
    data () {
        return {
            notes: []
        }
    },
    mounted(){
        this.loadData();
    },
    methods: {
        loadData(){
            const query = Bmob.Query("Note");
            query.include('own', 'group');
            query.find().then(res => {
                this.notes = res;
                console.log(res)
            });
        },
        addNote(){
            this.$router.push({name: 'AddNote'});
        }
    }
}
</script>