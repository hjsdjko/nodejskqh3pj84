import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op,literal, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import JiudiandingdanModel from '../models/JiudiandingdanModel'
import util from '../lib/util'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import ConfigModel from '../models/ConfigModel'
import https from 'https'
import request from 'request'
import qs from 'querystring'
import path from 'path'
import fs from 'fs'
import config from '../config.json'
const redis = require('redis')




export default ({ config, db }) => {
	let api = Router()


	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let tuifangshijianstart = req.query.tuifangshijianstart;
			let tuifangshijianend = req.query.tuifangshijianend;
			if (tuifangshijianstart && tuifangshijianend) {
				let tuifangshijianbetween = [];
				tuifangshijianbetween.push(tuifangshijianstart);
				tuifangshijianbetween.push(tuifangshijianend);
				where.tuifangshijian = {
					[Op.between]: tuifangshijianbetween
				}
			}
			let jiudianmingcheng = req.query.jiudianmingcheng
			if (jiudianmingcheng) {

				if (jiudianmingcheng.indexOf('%') != -1) {
					where.jiudianmingcheng = {
						[Op.like]: jiudianmingcheng
					}
				} else {
					where.jiudianmingcheng = {
						[Op.eq]: jiudianmingcheng
					}
				}
			}
			let chengshifenlei = req.query.chengshifenlei
			if (chengshifenlei) {

				if (chengshifenlei.indexOf('%') != -1) {
					where.chengshifenlei = {
						[Op.like]: chengshifenlei
					}
				} else {
					where.chengshifenlei = {
						[Op.eq]: chengshifenlei
					}
				}
			}
			let xingji = req.query.xingji
			if (xingji) {

				if (xingji.indexOf('%') != -1) {
					where.xingji = {
						[Op.like]: xingji
					}
				} else {
					where.xingji = {
						[Op.eq]: xingji
					}
				}
			}
			let jiudiantupian = req.query.jiudiantupian
			if (jiudiantupian) {

				if (jiudiantupian.indexOf('%') != -1) {
					where.jiudiantupian = {
						[Op.like]: jiudiantupian
					}
				} else {
					where.jiudiantupian = {
						[Op.eq]: jiudiantupian
					}
				}
			}
			let fangjianleixing = req.query.fangjianleixing
			if (fangjianleixing) {

				if (fangjianleixing.indexOf('%') != -1) {
					where.fangjianleixing = {
						[Op.like]: fangjianleixing
					}
				} else {
					where.fangjianleixing = {
						[Op.eq]: fangjianleixing
					}
				}
			}
			let lianxidianhua = req.query.lianxidianhua
			if (lianxidianhua) {

				if (lianxidianhua.indexOf('%') != -1) {
					where.lianxidianhua = {
						[Op.like]: lianxidianhua
					}
				} else {
					where.lianxidianhua = {
						[Op.eq]: lianxidianhua
					}
				}
			}
			let zhanghao = req.query.zhanghao
			if (zhanghao) {

				if (zhanghao.indexOf('%') != -1) {
					where.zhanghao = {
						[Op.like]: zhanghao
					}
				} else {
					where.zhanghao = {
						[Op.eq]: zhanghao
					}
				}
			}
			let xingming = req.query.xingming
			if (xingming) {

				if (xingming.indexOf('%') != -1) {
					where.xingming = {
						[Op.like]: xingming
					}
				} else {
					where.xingming = {
						[Op.eq]: xingming
					}
				}
			}
			let jiage = req.query.jiage
			if (jiage) {

				if (jiage.indexOf('%') != -1) {
					where.jiage = {
						[Op.like]: jiage
					}
				} else {
					where.jiage = {
						[Op.eq]: jiage
					}
				}
			}
			let yudingtianshu = req.query.yudingtianshu
			if (yudingtianshu) {

				if (yudingtianshu.indexOf('%') != -1) {
					where.yudingtianshu = {
						[Op.like]: yudingtianshu
					}
				} else {
					where.yudingtianshu = {
						[Op.eq]: yudingtianshu
					}
				}
			}
			let jine = req.query.jine
			if (jine) {

				if (jine.indexOf('%') != -1) {
					where.jine = {
						[Op.like]: jine
					}
				} else {
					where.jine = {
						[Op.eq]: jine
					}
				}
			}
			let ruzhushijian = req.query.ruzhushijian
			if (ruzhushijian) {

				if (ruzhushijian.indexOf('%') != -1) {
					where.ruzhushijian = {
						[Op.like]: ruzhushijian
					}
				} else {
					where.ruzhushijian = {
						[Op.eq]: ruzhushijian
					}
				}
			}
			let tuifangshijian = req.query.tuifangshijian
			if (tuifangshijian) {

				if (tuifangshijian.indexOf('%') != -1) {
					where.tuifangshijian = {
						[Op.like]: tuifangshijian
					}
				} else {
					where.tuifangshijian = {
						[Op.eq]: tuifangshijian
					}
				}
			}
			let yudingshijian = req.query.yudingshijian
			if (yudingshijian) {

				if (yudingshijian.indexOf('%') != -1) {
					where.yudingshijian = {
						[Op.like]: yudingshijian
					}
				} else {
					where.yudingshijian = {
						[Op.eq]: yudingshijian
					}
				}
			}
			let ispay = req.query.ispay
			if (ispay) {

				if (ispay.indexOf('%') != -1) {
					where.ispay = {
						[Op.like]: ispay
					}
				} else {
					where.ispay = {
						[Op.eq]: ispay
					}
				}
			}
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'yonghu') {
				where.zhanghao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).zhanghao : req.session.userinfo.zhanghao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}

			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await JiudiandingdanModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			res.status(500).render(err)
			//toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	  // 分页接口（前端）
	api.get('/lists', async (req, res) => {

		try {
			let result = await JiudiandingdanModel.findAll()
			toRes.record(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let tuifangshijianstart = req.query.tuifangshijianstart;
			let tuifangshijianend = req.query.tuifangshijianend;
			if (tuifangshijianstart && tuifangshijianend) {
				let tuifangshijianbetween = [];
				tuifangshijianbetween.push(tuifangshijianstart);
				tuifangshijianbetween.push(tuifangshijianend);
				where.tuifangshijian = {
					[Op.between]: tuifangshijianbetween
				}
			}
			let jiudianmingcheng = req.query.jiudianmingcheng
			if (jiudianmingcheng) {

				if (jiudianmingcheng.indexOf('%') != -1) {
					where.jiudianmingcheng = {
						[Op.like]: jiudianmingcheng
					}
				} else {
					where.jiudianmingcheng = {
						[Op.eq]: jiudianmingcheng
					}
				}
			}
			let chengshifenlei = req.query.chengshifenlei
			if (chengshifenlei) {

				if (chengshifenlei.indexOf('%') != -1) {
					where.chengshifenlei = {
						[Op.like]: chengshifenlei
					}
				} else {
					where.chengshifenlei = {
						[Op.eq]: chengshifenlei
					}
				}
			}
			let xingji = req.query.xingji
			if (xingji) {

				if (xingji.indexOf('%') != -1) {
					where.xingji = {
						[Op.like]: xingji
					}
				} else {
					where.xingji = {
						[Op.eq]: xingji
					}
				}
			}
			let tuifangshijian = req.query.tuifangshijian
			if (tuifangshijian) {

				if (tuifangshijian.indexOf('%') != -1) {
					where.tuifangshijian = {
						[Op.like]: tuifangshijian
					}
				} else {
					where.tuifangshijian = {
						[Op.eq]: tuifangshijian
					}
				}
			}


			let orders =[]
			const sortList = sort.split(",")
			const orderList = order.split(",")
			sortList.forEach((item, index) => {
				orders.push([item,orderList[index]])
			  });
			let result = await JiudiandingdanModel.findAndCountAll({
				order: [orders],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})



			const userinfo = await JiudiandingdanModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})

			if (jwt.decode(req.headers.token) == null) {
				toRes.session(res, 401, '请登录后再操作', '', 401)
			}





			const userinfo = await JiudiandingdanModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {


			await JiudiandingdanModel.update(req.body, {
				where: {
				  id: req.body.id || 0
				}
			})


			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await JiudiandingdanModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await JiudiandingdanModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await JiudiandingdanModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

        let where = ' 1=1 '
		let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
        if(tableName == 'yonghu') {
            where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
        }

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM jiudiandingdan WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})










	// 分组统计接口
	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			// let tableName = "jiudiandingdan"
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'yonghu') {
				where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM jiudiandingdan " + where + " GROUP BY " + columnName 
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(tableName == 'yonghu') {
				where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("jiudiandingdan" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM jiudiandingdan " + where + " GROUP BY " + xColumnName + " DESC"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let tableName = "jiudiandingdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yonghu') {
				where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// (按值统计）时间统计类型(多)
	api.get('/valueMul/:xColumnName/:timeStatType', async (req, res) => {

		try {	
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.query.yColumnNameMul
			let timeStatType = req.params.timeStatType
			let tableName = "jiudiandingdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yonghu') {
				where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}

			const promises = yColumnName.split(',').map(async(item)=>{
				sql = "SELECT " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY " + xColumnName;
				if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            	} else {
            	    if (timeStatType == "日")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
            	    if (timeStatType == "月")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
            	    if (timeStatType == "年")
            	        sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + item + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            	}
				const results = await sequelize.query(sql, {
					plain: false,
					raw: true,
					type: QueryTypes.SELECT
				});
				return results;
			})
            	
			toRes.record(res, 0, await Promise.all(promises))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "jiudiandingdan"
			let where = " WHERE 1 = 1 "
			let userTableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName;
			if(userTableName == 'yonghu') {
				where += " AND zhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("jiudiandingdan" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d')";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


	// 总数接口
	api.get('/count', async (req, res) => {

		try {
			let where = {}
			var jiudianmingcheng = req.query.jiudianmingcheng
			if (jiudianmingcheng) {

				if (jiudianmingcheng.indexOf('%') != -1) {
					where.jiudianmingcheng = {
						[Op.like]: jiudianmingcheng
					}
				} else {
					where.jiudianmingcheng = {
						[Op.eq]: jiudianmingcheng
					}
				}
			}
			var chengshifenlei = req.query.chengshifenlei
			if (chengshifenlei) {

				if (chengshifenlei.indexOf('%') != -1) {
					where.chengshifenlei = {
						[Op.like]: chengshifenlei
					}
				} else {
					where.chengshifenlei = {
						[Op.eq]: chengshifenlei
					}
				}
			}
			var xingji = req.query.xingji
			if (xingji) {

				if (xingji.indexOf('%') != -1) {
					where.xingji = {
						[Op.like]: xingji
					}
				} else {
					where.xingji = {
						[Op.eq]: xingji
					}
				}
			}
			var tuifangshijian = req.query.tuifangshijian
			if (tuifangshijian) {

				if (tuifangshijian.indexOf('%') != -1) {
					where.tuifangshijian = {
						[Op.like]: tuifangshijian
					}
				} else {
					where.tuifangshijian = {
						[Op.eq]: tuifangshijian
					}
				}
			}

			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'yonghu') {
				where.zhanghao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).zhanghao : req.session.userinfo.zhanghao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}
			const count = await JiudiandingdanModel.count({where});

			toRes.record(res, 0, count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})













	return api
}
