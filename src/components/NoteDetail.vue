<template>
    <div>
        <h3>[{{group.groupName}}] {{title}}</h3>
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    name: 'NoteDetail',
    data () {
        return {
            title: '',
            content: '',
            group: ''
        }
    },
    mounted () {
        // 此处是route而不是router
        let note_id = this.$route.query.id;
        this.loadData(note_id);
    },
    methods: {
        loadData(note_id){
            const query = Bmob.Query('Note');
            query.include('own', 'group');
            query.get(note_id).then(res => {
                console.log(res);
                this.title = res.title;
                this.content = res.content;
                this.group = res.group;
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>