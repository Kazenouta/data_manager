from flask import Flask, render_template
from flask_cors import CORS

 
app = Flask(__name__)
CORS(app, resources=r'/*')
 
app.debug = True

import main.views


# 元数据管理
from main.be_metadata import metadata
app.register_blueprint(metadata)

