import sqlite3
from flask import Flask, request, render_template
import os
import json

app = Flask(__name__, template_folder='templates')

@app.route('/data', methods=['POST', 'GET'])
def post_data():
    if request.method == 'POST':
        date = request.form.get('date')
        lift_name = request.form.get('lift_name')
        return f'Date: {date} Lift: {lift_name}'

@app.route('/')
def main_handler():
    return render_template('form.html')

if __name__ == '__main__':
    fh = open('db.json', 'w+')
    app.run(debug=True, port=5000)
