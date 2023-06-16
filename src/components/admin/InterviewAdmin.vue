
<template>
    <div class="one1">
        <Row>
        <Col span="24">

            <div class="layout">

             <Layout class="layout-layout">
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="Sider1">
                    <Menu active-name="1" theme="light" width="auto" :class="menuitemClasses" class="Menu1">
                        
                        <MenuItem name="1" @click.native="AdminHomepage">
                            <Icon type="ios-keypad" color="#3A89EA" />
                            <span>首页</span>
                        </MenuItem>

                        <MenuItem name="2" @click.native="ToolManagement">
                            <Icon type="ios-construct" color="#FC8915" />
                            <span>工具管理</span>
                        </MenuItem>

                        <MenuItem name="3" @click.native="EightManagement">
                            <Icon type="ios-paper"  color="#8BDA5C" />
                            <span>八股管理</span>
                        </MenuItem>

                        <MenuItem name="4" @click.native="SkillManagement">
                            <Icon type="logo-buffer" color="#E60011" />
                            <span>技能管理</span>
                        </MenuItem>

                        <MenuItem name="5" @click.native="LearnManagement">
                            <Icon type="md-school"  color="#FF78B8"/>
                            <span>学习管理</span>
                        </MenuItem>

                        <MenuItem name="6" @click.native="UserManagement">
                            <Icon type="md-contacts" color="#AC72EA" />
                            <span>用户管理</span>
                        </MenuItem>

                        <MenuItem name="7" @click.native="Administrator">
                            <Icon type="md-person" color="#C82F25" />
                            <span>管理员</span>
                        </MenuItem>

                        <MenuItem name="8" @click.native="ThisWebsite">
                            <Icon type="ios-infinite" color="#53D7D0" />
                            <span>本站信息</span>
                        </MenuItem>

                        <MenuItem name="9" @click.native="goNotice">
                            <Icon type="ios-chatbubbles" color="#1ECA49"  />
                            <span>公告</span>
                        </MenuItem>
                        
                    </Menu>
                </Sider>

                <Layout class="Layout2">
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 15px'}" type="md-menu" size="24" color="#1E1E1E"></Icon>
                        <div style="height:50px;width:400px;display: inline-block;">
                          
                        </div>
                    </Header>
                    <Content class="Content1" :style="{margin: '10px', minHeight: '260px',}">
                        <div style="height:100%;width:100%;border-radius:5px;">

                              <router-view></router-view>

                        </div>
                    </Content>
                </Layout>

            </Layout>
        </div>
        </Col>
       
      </Row>
        
    </div>
</template>
<script>
    export default {
        name:"InterviewAdmin",
        data () {
            return {
            
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            //  管理首页
            AdminHomepage(){
                this.$router.push("/interviewadmin/adminhomepage");
            },
            //  工具管理
            ToolManagement(){
                this.$router.push("/interviewadmin/toolmanagement");
            },
            //  八股管理
            EightManagement(){
                this.$router.push("/interviewadmin/eightmanagement");
            },
            //   技能管理
            SkillManagement(){
                this.$router.push("/interviewadmin/skillmanagement");
            },
            //   学习管理
            LearnManagement(){
                this.$router.push("/interviewadmin/learnmanagement");
            },
            //   本站信息
            ThisWebsite(){
                this.$router.push("/interviewadmin/thiswebsite");
            },
             //   用户管理
            UserManagement(){
                this.$router.push("/interviewadmin/usermanagement");
            },
            //   管理员
            Administrator(){
                this.$router.push("/interviewadmin/administrator"); 
            },
            //   公告
            goNotice(){
                this.$router.push("/interviewadmin/notice"); 
            }

        }
    }
</script>
<style scoped>
.one1{
    
    height:100vh;
    width: 100vw;
    background-color: aquamarine;
}
.layout{

 background: #f5f7f9;
 position: relative;
 border-radius: 4px;
 overflow: hidden;
        
 }
 .layout-layout{
    height:100vh;
 }
 .Sider1{
    overflow: auto;
     background-color: #FFFFFF;
 }
.Layout2{
    background-color: #FFFFFF;
}

.Menu1{
    height: 100%;
}
.Content1{

    border-radius:5px;
    background: #FFFFFF;
    background-color: #FFFFFF;
}
.layout-header-bar{
    display: flex;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    align-items: center;
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    
}
.menu-icon{
    transition: all .3s;
}
.rotate-icon{
    transform: rotate(-90deg);
}
.menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}
.menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
}
.collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}
</style>