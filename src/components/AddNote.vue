<template>
    <div>
        <h1>添加笔记</h1>
        <label>选择分类</label>
        <select name="group" v-model="group" @change="getGroupInfo">
            <!-- value要使用v-bind -->
            <option :value="item" v-for="item in groups" :key="item.objectId">{{item.groupName}}</option>
        </select>
        <input type="button" value="添加分类" @click="addGroup">
        <p>
            <input type="text" placeholder="输入标题" v-model="title">
        </p>
        <p>
            <textarea id="content" cols="30" rows="10" placeholder="输入内容" v-model="content"></textarea>
        </p>
        <p>
            <input type="button" value="提交" @click="submit">
        </p>
    </div>
</template>

<script>
export default {
    name: 'AddNote',
    data(){
        return {
            group: '',
            title: '',
            content: '',
            groups: []
        }
    },
    mounted(){
        this.loadData();
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        loadData(){
            const query = Bmob.Query("Group");
            query.find().then(res => {
                this.groups = res;
                this.group = this.groups[0];
                console.log(this.group);
            });
        },
        addGroup(){
            this.$router.push({name: 'AddGroup'});
        },
        getGroupInfo(){
            console.log(this.group);
        },
        submit(){
            if (this.title == ''){
                alert('请输入标题');
                return;
            }
            if (this.content == ''){
                alert('请输入内容');
                return;
            }
            let user = Bmob.User.current();
            //console.log(user);
            const pointer1 = Bmob.Pointer('_User');
            const pId = pointer1.set(user.objectId);
            const pointer2 = Bmob.Pointer('Group');
            const gId = pointer2.set(this.group.objectId);
            const query = Bmob.Query('Note');
            query.set("user",pId);
            query.set("group",gId);
            query.set("title",this.title);
            query.set("content",this.content);
            query.save().then(res => {
                this.back();
                //console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>