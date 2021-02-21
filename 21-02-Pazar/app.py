# from flask import Flask, render_template

# app = Flask(__name__)


# @app.route('/home')
# def home():
#     # return render_template("./index.html")
#     return 'Hello World!'


# if __name__ == '__main__':
#     app.run(host='0.0.0.0')


# @app.route("./about")
# def about():
#     return render_template("./about.html")


# @app.route("./contact")
# def contact():
#     return render_template("./contact.html")


# helloTest.py
# at the end point / call method hello which returns "hello world"
# from flask import Flask, render_template

# app = Flask(__name__)


# @app.route("./home")
# def home():
#     return render_template("./home.html")
#     # return 'Hello World!'


# if __name__ == '__main__':
#     app.run(host='0.0.0.0')


# from flask import Flask, render_template
# from flask.helpers import url_for

# app = Flask(__name__)


# @app.route("/")
# def mainRoute():
#     return """
#       <h1>Basic Flask App</h1><br/>
#       <a href="/home">Home</a><br/>
#       <a href="/about">About</a><br/>
#       <a href="/contact">Contact</a><br/>
#     """
#     return render_template("./home.html")


# @app.route("/contact")
# def contact(n):
#     return """
#       <h1>BAsic Flask App</h1><br/>
#       <a href="/home">Home</a><br/>
#       <a href="/about">About</a><br/>
#       <a href="/contact">Contact</a><br/>
#       <h1>İletişim</h1>
#     """


# @app.route("/about")
# def about(n):
#     return """
#       <a href="/home">Home</a><br/>
#       <a href="/about">About</a><br/>
#       <a href="/contact">Contact</a><br/>
#       <h1>Hakkımızda</h1>
#     """


# @app.route("/home")
# def home(n):
#     return """
#       <a href="/home">Home</a><br/>
#       <a href="/about">About</a><br/>
#       <a href="/contact">Contact</a><br/>
#       <h1>Anasafya</h1>
#     """


# if __name__ == "__main__":
#     app.run(debug=True)


from flask import Flask, render_template

app = Flask(__name__, template_folder="templates")


@app.route("/")
def main_route():
    return render_template("home.html")


@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)


# from flask import Flask, render_template

# app = Flask(__name__)


# @app.route("/")
# def home():
#     return render_template("home.html")


# @app.route("/John")
# def John():
#     return "Hello John."


# if __name__ == "__main__":
#     app.run(debug=True)
