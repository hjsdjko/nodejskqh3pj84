<template>
<div class="center-preview" :style='{"width":"80%","margin":"30px auto","position":"relative"}'>
	<div class="title" :style='{"border":"1px solid #333","margin":"20px 0","color":"#333","textAlign":"center","display":"block","width":"100%","fontSize":"20px","lineHeight":"54px"}'>{{ title }}</div>
	
	<div class="info" :style='{"border":"1px solid","padding":"20px","grid-area":"1/1/2/2","display":"none","height":"auto"}'>
		<div :style='{"width":"100%","lineHeight":"44px","fontSize":"18px","color":"#0F672D","height":"44px","text-align":"center"}'>个人信息</div>
		<div :style='{"width":"100%","borderColor":"#efefef","fontSize":0,"borderStyle":"solid","borderWidth":"0 0 1px 0","height":"auto"}' v-if="userTableName=='yonghu'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"10px","borderWidth":"0 0 1px 0","display":"block","width":"230px","borderStyle":"solid","height":"230px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-zhangjie8" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>账号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.zhanghao}}</div>
		</div>
		<div :style='{"borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-xiaoxi-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-huifu18" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"100%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='yonghu'">
			<span class="icon iconfont icon-xiaoliang11" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>手机号码</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.shoujihaoma}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","margin":"20px 0 0","flexWrap":"wrap","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="80px">
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' v-if="userTableName=='yonghu'" label="账号" prop="zhanghao">
            <el-input v-model="sessionForm.zhanghao" placeholder="账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' v-if="userTableName=='yonghu'" label="姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' v-if="userTableName=='yonghu'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="yonghutouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' v-if="userTableName=='yonghu'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' v-if="userTableName=='yonghu'" label="手机号码" prop="shoujihaoma">
            <el-input v-model="sessionForm.shoujihaoma" placeholder="手机号码" ></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"100%","clear":"both","padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"8px","background":"#00AA3A","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"0px solid #00AA3A","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"8px","background":"#9e9e9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="80px">
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"width":"100%","clear":"both","padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"8px","background":"#00AA3A","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'zhanghao', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihaoma', null);
		}

		if ('yonghu' == this.userTableName&&this.rules['zhanghao']){
			this.rules['zhanghao'].push({ required: true, message: '请输入账号', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['zhanghao']) {
			this.$set(this.rules, 'zhanghao', [{ required: true, message: '请输入账号', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName&&this.rules['xingming']){
			this.rules['xingming'].push({ required: true, message: '请输入姓名', trigger: 'blur' })
		}else if('yonghu' == this.userTableName&&!this.rules['xingming']) {
			this.$set(this.rules, 'xingming', [{ required: true, message: '请输入姓名', trigger: 'blur' }]);
		}
		if ('yonghu' == this.userTableName) {
			this.$set(this.rules, 'shoujihaoma', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('yonghu' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      onSubmit(formName) {
		if(`yonghu` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      yonghutouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.userTableName == 'yonghu') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	border: 1px solid #333;
	padding: 10px 10px 0;
	margin: 0 0 20px;
	width: 100%;
	position: relative;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	border: 0px solid #666;
  	padding: 0 10px;
  	margin: 0 0 10px;
  	color: #000;
  	background: none;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 40px;
  	float: left;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #00AA3A;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 40px;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	border: 0px solid #00AA3A;
  	padding: 0 10px;
  	margin: 0;
  	color: #00AA3A;
  	font-weight: 500;
  	font-size: 16px;
  	line-height: 40px;
  	position: relative;
  	float: left;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	border: 1px solid;
  	padding: 40px 20px 40px;
  	width: 100%;
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 80px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: right;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 80px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	border: 1px solid #eee;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000000;
  	background: none;
  	width: auto;
  	font-size: 14px;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	border: 1px solid #eee;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000000;
  	background: none;
  	width: auto;
  	font-size: 14px;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	border: 1px solid #eee;
  	border-radius: 0px;
  	padding: 0 10px 0 30px;
  	color: #000000;
  	background: none;
  	width: auto;
  	font-size: 14px;
  	min-width: 400px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	border: 1px solid #eee;
  	cursor: pointer;
  	border-radius: 0px;
  	color: #999;
  	width: 60px;
  	font-size: 32px;
  	line-height: 60px;
  	text-align: center;
  	min-width: 60px;
  	height: 60px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border: 1px solid #eee;
  	border-radius: 0px;
  	padding: 0 12px;
  	outline: none;
  	color: #000000;
  	background: none;
  	display: inline-block;
  	width: 310px;
  	font-size: 14px;
  	height: 40px;
  }
</style>
