from flask import Flask, render_template


app = Flask(__name__)
# app.debug = True

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/mvv1')
def mvv1():
	return render_template('mvv1.html')

@app.route('/mvv2')
def mvv2():
	return render_template('mvv2.html')

@app.route('/mvv3')
def mvv3():
	return render_template('mvv3.html')

if __name__ == '__main__':
	app.run()
