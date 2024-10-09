<template>
<div :style='{"width":"100%","padding":"20px 10%","margin":"30px auto","position":"relative"}'>
    <el-form
	  :style='{"border":"1px solid #333","width":"100%","padding":"40px","margin":"0 0 40px","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="酒店名称" prop="jiudianmingcheng">
            <el-input v-model="ruleForm.jiudianmingcheng" 
                placeholder="酒店名称" clearable :disabled=" false  ||ro.jiudianmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="城市分类" prop="chengshifenlei">
            <el-input v-model="ruleForm.chengshifenlei" 
                placeholder="城市分类" clearable :disabled=" false  ||ro.chengshifenlei"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="星级" prop="xingji">
            <el-input v-model="ruleForm.xingji" 
                placeholder="星级" clearable :disabled=" false  ||ro.xingji"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="酒店图片" v-if="type!='cross' || (type=='cross' && !ro.jiudiantupian)" prop="jiudiantupian">
            <file-upload
            tip="点击上传酒店图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.jiudiantupian?ruleForm.jiudiantupian:''"
            @change="jiudiantupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' class="upload" v-else label="酒店图片" prop="jiudiantupian">
                <img v-if="ruleForm.jiudiantupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.jiudiantupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.jiudiantupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="房间类型" prop="fangjianleixing">
            <el-input v-model="ruleForm.fangjianleixing" 
                placeholder="房间类型" clearable :disabled=" false  ||ro.fangjianleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="联系电话" prop="lianxidianhua">
            <el-input v-model="ruleForm.lianxidianhua" 
                placeholder="联系电话" clearable :disabled=" false  ||ro.lianxidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="账号" prop="zhanghao">
            <el-input v-model="ruleForm.zhanghao" 
                placeholder="账号" clearable :disabled=" false  ||ro.zhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="价格" prop="jiage">
			<el-input-number v-model="ruleForm.jiage" placeholder="价格" :readonly="ro.jiage"></el-input-number>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="预定天数" prop="yudingtianshu">
            <el-input v-model.number="ruleForm.yudingtianshu" 
                placeholder="预定天数" clearable :disabled=" false  ||ro.yudingtianshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="金额" prop="jine">
              <el-input v-model="jine" placeholder="金额" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="入住时间" prop="ruzhushijian">
              <el-date-picker
				  :disabled=" false  ||ro.ruzhushijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.ruzhushijian" 
                  type="date"
                  placeholder="入住时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="退房时间" prop="tuifangshijian">
              <el-date-picker
				  :disabled=" false  ||ro.tuifangshijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.tuifangshijian" 
                  type="date"
                  placeholder="退房时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","float":"left","display":"inline-block"}' label="预定时间" prop="yudingshijian">
              <el-date-picker
				  :disabled=" false  ||ro.yudingshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.yudingshijian" 
                  type="datetime"
                  placeholder="预定时间">
              </el-date-picker>
          </el-form-item>

      <el-form-item :style='{"width":"100%","clear":"both","padding":"0 10px","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#00AA3A","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0px solid #00AA3A","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#9e9e9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				jiudianmingcheng : false,
				chengshifenlei : false,
				xingji : false,
				jiudiantupian : false,
				fangjianleixing : false,
				lianxidianhua : false,
				zhanghao : false,
				xingming : false,
				jiage : false,
				yudingtianshu : false,
				jine : false,
				ruzhushijian : false,
				tuifangshijian : false,
				yudingshijian : false,
				ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jiudianmingcheng: '',
          chengshifenlei: '',
          xingji: '',
          jiudiantupian: '',
          fangjianleixing: '',
          lianxidianhua: '',
          zhanghao: '',
          xingming: '',
          jiage: '',
          yudingtianshu: '',
          jine: '',
          ruzhushijian: '',
          tuifangshijian: '',
          yudingshijian: '',
          ispay: '',
        },


        rules: {
          jiudianmingcheng: [
            { required: true, message: '酒店名称不能为空', trigger: 'blur' },
          ],
          chengshifenlei: [
            { required: true, message: '城市分类不能为空', trigger: 'blur' },
          ],
          xingji: [
            { required: true, message: '星级不能为空', trigger: 'blur' },
          ],
          jiudiantupian: [
          ],
          fangjianleixing: [
          ],
          lianxidianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          zhanghao: [
          ],
          xingming: [
          ],
          jiage: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          yudingtianshu: [
            { required: true, message: '预定天数不能为空', trigger: 'blur' },
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          jine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          ruzhushijian: [
            { required: true, message: '入住时间不能为空', trigger: 'blur' },
          ],
          tuifangshijian: [
            { required: true, message: '退房时间不能为空', trigger: 'blur' },
          ],
          yudingshijian: [
          ],
          ispay: [
          ],
        },
		centerType: false,
      };
    },
    computed: {


        jine:{
            get: function () {
                return 1*this.ruleForm.jiage*this.ruleForm.yudingtianshu
            }
        },

    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.ruzhushijian = this.getCurDate()
      this.ruleForm.yudingshijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='jiudianmingcheng'){
              this.ruleForm.jiudianmingcheng = obj[o];
              this.ro.jiudianmingcheng = true;
              continue;
            }
            if(o=='chengshifenlei'){
              this.ruleForm.chengshifenlei = obj[o];
              this.ro.chengshifenlei = true;
              continue;
            }
            if(o=='xingji'){
              this.ruleForm.xingji = obj[o];
              this.ro.xingji = true;
              continue;
            }
            if(o=='jiudiantupian'){
              this.ruleForm.jiudiantupian = obj[o].split(",")[0];
              this.ro.jiudiantupian = true;
              continue;
            }
            if(o=='fangjianleixing'){
              this.ruleForm.fangjianleixing = obj[o];
              this.ro.fangjianleixing = true;
              continue;
            }
            if(o=='lianxidianhua'){
              this.ruleForm.lianxidianhua = obj[o];
              this.ro.lianxidianhua = true;
              continue;
            }
            if(o=='zhanghao'){
              this.ruleForm.zhanghao = obj[o];
              this.ro.zhanghao = true;
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              this.ro.xingming = true;
              continue;
            }
            if(o=='jiage'){
              this.ruleForm.jiage = obj[o];
              this.ro.jiage = true;
              continue;
            }
            if(o=='yudingtianshu'){
              this.ruleForm.yudingtianshu = obj[o];
              this.ro.yudingtianshu = true;
              continue;
            }
            if(o=='jine'){
              this.ruleForm.jine = obj[o];
              this.ro.jine = true;
              continue;
            }
            if(o=='ruzhushijian'){
              this.ruleForm.ruzhushijian = obj[o];
              this.ro.ruzhushijian = true;
              continue;
            }
            if(o=='tuifangshijian'){
              this.ruleForm.tuifangshijian = obj[o];
              this.ro.tuifangshijian = true;
              continue;
            }
            if(o=='yudingshijian'){
              this.ruleForm.yudingshijian = obj[o];
              this.ro.yudingshijian = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.zhanghao!=''&&json.zhanghao) || json.zhanghao==0){
                this.ruleForm.zhanghao = json.zhanghao
            }
            if((json.xingming!=''&&json.xingming) || json.xingming==0){
                this.ruleForm.xingming = json.xingming
            }
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`jiudiandingdan/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			this.ruleForm.jine = this.jine
			if(this.ruleForm.ruzhushijian>this.ruleForm.tuifangshijian){
				this.$message.error("入住时间不能超过退房时间");
				return
			}
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('jiudiandingdan/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`jiudiandingdan/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`jiudiandingdan/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      jiudiantupianUploadChange(fileUrls) {
          this.ruleForm.jiudiantupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: auto;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: left;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: auto;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #eee;
	  border-radius: 0px;
	  padding: 0 12px;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #eee;
	  border-radius: 0px;
	  padding: 0 12px;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #eee;
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #eee;
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000000;
	  width: auto;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #eee;
	  cursor: pointer;
	  border-radius: 0px;
	  color: #000000;
	  width: auto;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  min-width: 400px;
	  height: 120px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #eee;
	  cursor: pointer;
	  border-radius: 0px;
	  color: #000000;
	  width: auto;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  min-width: 400px;
	  height: 120px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #eee;
	  cursor: pointer;
	  border-radius: 0px;
	  color: #000000;
	  width: auto;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  min-width: 400px;
	  height: 120px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #eee;
	  border-radius: 0px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  width: auto;
	  font-size: 14px;
	  min-width: 780px;
	  height: 120px;
	}
</style>
