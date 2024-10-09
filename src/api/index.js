import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import RemenjingdianController from './Remenjingdian'
import ChengshifenleiController from './Chengshifenlei'
import MenpiaodingdanController from './Menpiaodingdan'
import JiudianxinxiController from './Jiudianxinxi'
import JiudiandingdanController from './Jiudiandingdan'
import LvyouxianluController from './Lvyouxianlu'
import NewstypeController from './Newstype'
import NewsController from './News'
import StoreupController from './Storeup'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import DiscussremenjingdianController from './Discussremenjingdian'
import DiscussjiudianxinxiController from './Discussjiudianxinxi'
import DiscusslvyouxianluController from './Discusslvyouxianlu'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/remenjingdian', RemenjingdianController({ config, db }))

	api.use('/chengshifenlei', ChengshifenleiController({ config, db }))

	api.use('/menpiaodingdan', MenpiaodingdanController({ config, db }))

	api.use('/jiudianxinxi', JiudianxinxiController({ config, db }))

	api.use('/jiudiandingdan', JiudiandingdanController({ config, db }))

	api.use('/lvyouxianlu', LvyouxianluController({ config, db }))

	api.use('/newstype', NewstypeController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/discussremenjingdian', DiscussremenjingdianController({ config, db }))

	api.use('/discussjiudianxinxi', DiscussjiudianxinxiController({ config, db }))

	api.use('/discusslvyouxianlu', DiscusslvyouxianluController({ config, db }))

	return api
}
