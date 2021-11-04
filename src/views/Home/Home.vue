<template>
	<div>
		<el-container>
			<el-header>
				<el-row :gutter="10">
					<el-col :span="10">
						<p class="logo-text">阿西吧 | 高校教辅平台</p>
					</el-col>
					<el-col :span="8">
						<el-menu default-active="main" mode="horizontal" router @select="handleSelect" text-color="#9aabb8" active-text-color="#347abb">
							<el-menu-item index="main">首页</el-menu-item>
							<el-menu-item index="stu_center">学习中心</el-menu-item>
							<el-menu-item index="3">视频资源</el-menu-item>
							<el-menu-item index="4">公开课</el-menu-item>
							<el-menu-item index="5">问答精灵</el-menu-item>
						</el-menu>
					</el-col>
					<el-col :span="6">
						<el-button class="login-btn" type="primary" round size="small" @click='login'>登 录</el-button>
						<el-button round size="small">注 册</el-button>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
			<el-footer>
				<el-steps class="steps" :active="3" finish-status="success" simple>
					<el-step title="注册登录" ></el-step>
					<el-step title="加入学习" ></el-step>
					<el-step title="轻松学习" ></el-step>
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
