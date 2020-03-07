from flask import Blueprint
 
metadata = Blueprint("metadata",__name__,static_folder='/static')
 
import main.be_metadata.views