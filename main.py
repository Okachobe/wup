from flask import Flask, render_template 
app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/add_set')
def addit():
    return render_template('add_set.html')

@app.route('/view_all')
def viewit():
    return render_template('view_all.html')

@app.route('/request_movement')
def reqit():
    return render_template('request_movement.html')

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
