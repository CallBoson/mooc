<template>
	<div>
		<el-container>
			<el-header>
				<el-row :gutter="10">
					<el-col :span="10">
						<p class="logo-text">阿西吧 | 高校教辅平台</p>
					</el-col>
					<el-col :span="8">
						<el-menu default-active="main" mode="horizontal" router text-color="#9aabb8"
							active-text-color="#347abb">
							<el-menu-item index="main">首页</el-menu-item>
							<el-menu-item index="stu_center">学习中心</el-menu-item>
							<el-menu-item index="3">视频资源</el-menu-item>
							<el-menu-item index="4">公开课</el-menu-item>
							<el-menu-item index="5">问答精灵</el-menu-item>
						</el-menu>
					</el-col>
					<el-col v-if="$store.state.token" :span="6">
						<el-dropdown @command="handleCommand">
							<div class="userInfo-box">
								<el-avatar size="large" :src="$store.state.userInfo.imageUrl"></el-avatar>
								<el-tag style="margin: 0 10px;">{{$store.state.userInfo.nickname}}</el-tag>
								<i class="el-icon-caret-bottom"></i>
							</div>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a">个人中心</el-dropdown-item>
								<el-dropdown-item command="b">修改密码</el-dropdown-item>
								<el-dropdown-item command="c">我的订阅课程</el-dropdown-item>
								<el-dropdown-item command="d" disabled>我的书籍资源</el-dropdown-item>
								<el-dropdown-item command="e" divided>退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
					<el-col v-else :span="6">
						<el-button class="login-btn" type="primary" round size="small" @click='login'>登 录</el-button>
						<el-button round size="small" @click='register'>注 册</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>
				<el-steps class="steps" :active="3" finish-status="success" simple>
					<el-step title="注册登录"></el-step>
					<el-step title="加入学习"></el-step>
					<el-step title="轻松学习"></el-step>
				</el-steps>
				<p>阿西吧 | 高校教辅平台</p>
			</el-footer>
		</el-container>
	</div>
</template>

<style scoped>
	@import url("./Home.css");
</style>

<script>
	import Home from './Home.js';

	export default Home;
</script>
