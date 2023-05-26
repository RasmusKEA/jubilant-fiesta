from flask import Flask, jsonify
import pandas as pd
import xml.etree.ElementTree as ET
import os

app = Flask(__name__)

@app.route('/xml', methods=['GET'])
def read_xml():
    file_path = os.path.join('..', 'files', 'data.xml')
    tree = ET.parse(file_path)
    root = tree.getroot()
    data = {
        'elements': []
    }

    for element in root.findall('.//element'):
        element_data = {
            'attribute': element.find('sub-element').get('attribute'),
            'text': element.find('sub-element').text
        }
        data['elements'].append(element_data)

    return jsonify(data)

@app.route('/csv', methods=['GET'])
def read_csv():
    file_path = os.path.join('..', 'files', 'data.csv')
    data = pd.read_csv(file_path)
    return jsonify(data.to_dict())

if __name__ == '__main__':
    app.run(debug=True)
