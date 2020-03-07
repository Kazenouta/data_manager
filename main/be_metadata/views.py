from . import metadata
from flask import render_template, jsonify, make_response,request
from .model import *
import json

tables_data = TablesData()

#********* 页面渲染 ***********
# 元数据管理主界面渲染
@metadata.route('/metadata/index')
def metadata_index():
    return render_template('metadata/index.html')
# 元数据管理界面内嵌渲染
@metadata.route('/metadata/details')
def metadata_details():
    return render_template('metadata/details.html')

# 股票日线
@metadata.route('/metadata/bar1day')
def bar1day():
    return render_template('metadata/bar1day.html')


#********* 数据 *********
@metadata.route('/metadata/tables/tables_info')
def tables_info():
    data = tables_data.get_tables_info()
    return jsonify({
        "code": 0,
        "msg": "",
        "count": len(data),
        "data": [data]
    })