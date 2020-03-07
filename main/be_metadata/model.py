import json, os
from main.config import *
from main.utils.funcs import *

class TablesData:

    def __init__(self):
       self.base_path = os.path.join(PATH_STATIC, 'tables/metadata')
       self.path_tables_info = os.path.join(self.base_path, 'details_tables_info.json')

    def get_tables_info(self):
        data = HandleFile.read_json(self.path_tables_info)
        return data