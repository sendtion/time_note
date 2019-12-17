<template>
    <div class="note-list" align="left">
        <!-- <h2>笔记列表</h2> -->
        <!-- <input type="button" value="添加笔记" @click="addNote"> -->
        <el-button type="primary" round @click="addNote">
            添加笔记
        </el-button>
        
        <div style="margin: 30px 0;"></div>

        <el-table
            :data="notes"
            style="width: 100%;"
            :default-sort = "{prop: 'createdAt', order: 'descending'}"
            @row-click="toNoteDetail">
            <el-table-column
                prop="createdAt"
                sortable
                label="日期"
                width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.createdAt }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="分类"
                width="200">
                <template slot-scope="scope">
                    <span>{{ scope.row.group.groupName }}</span>
                </template>
            </el-table-column>

            <el-table-column
                label="标题">
                <template slot-scope="scope">
                    <!-- <span>{{ scope.row.title }}</span> -->
                    <!-- to不加冒号不能正常跳转 -->
                    <router-link :to="{path:'/note_detail', query:{id:scope.row.objectId}}" target='_blank'>
                        {{scope.row.title}}
                    </router-link>
                </template>
            </el-table-column>

            <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'NoteList',
    data () {
        return {
            reverse: true,
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
            //this.$router.push({path: '/add_note'});
            const {href} = this.$router.resolve({path: '/add_note'})
            window.open(href,'_blank')
        },
        toNoteDetail(row,event,column){
            //console.log(row.objectId, event, column);
            //this.$router.push({path: '/note_detail', query: {id: row.objectId}});
            //const {href} = this.$router.resolve({path: '/note_detail', query: {id: row.objectId}})
            //window.open(href,'_blank')
        }
    }
}
</script>