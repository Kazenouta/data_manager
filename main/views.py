from . import app
from flask import render_template, request
from loguru import logger

# logger.add("./logger.log", 
#            format="{time:YYYY-MM-DD at HH:mm:ss} | {level} | {message}", 
#            filter="", level="INFO") # 每天 00:00 创建新文件

@app.route('/index')
def index():
    ip = request.remote_addr
    logger.info(ip)
    return render_template('index.html')