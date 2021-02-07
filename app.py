import os

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request
import json

# Configure application
app = Flask(__name__)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///hoth.db")

@app.route("/home")
def home():
    inventory = db.execute("SELECT * FROM inventory")
    for row in inventory:
        row.pop("user_id")

    return json.dumps(inventory)
    
    #username = db.execute("SELECT username FROM inventory")
    #image = db.execute("SELECT image FROM inventory")
    #label = db.execute ("SELECT label FROM inventory")
    #return render_template("index.html", username=username, image=image, label=label)

@app.route("/search", methods=["GET", "POST"])
def search():
    if (request.method == "POST"):
        keyword = json.loads(request.json)["keyword"] # assumes dict sent will have key "keyword"
        items = db.execute("SELECT * FROM inventory WHERE label=:label", label=keyword)

        for row in items:
            row.pop("user_id")

        return json.dumps(items)
    else:
        items = db.execute("SELECT * FROM inventory WHERE label=:label", label="shirt")
        return json.dumps(items)


@app.route("/profile", methods=["GET", "POST"]) # assumes that request will tell flask what user it needs data for
def profile():
    
    if (request.method == "POST"):

        # should it be json.loads(request.json)[0]["username"] ???

        username = json.loads(request.json)["username"] # assumes dict sent will have key "username"
        
        youritems = db.execute("SELECT * FROM inventory WHERE username=:username", username=username) # find all the items that a user posted
        
        userid = db.execute("SELECT user_id FROM inventory WHERE username=:username", username=username)
        
        history = db.execute("SELECT * FROM history WHERE user_id=:userid", userid=userid[0]["user_id"])

        cart = db.execute("SELECT * FROM history WHERE user_id=:userid", userid=userid[0]["user_id"])

        for row in iyourtems:
            row.pop("user_id")
        
        for row in history:
            row.pop("user_id")
        
        return json.dumps([youritems, history, cart])
    
    else:
         youritems = db.execute("SELECT * FROM inventory WHERE username=:username", username="tanaya")
         history = db.execute("SELECT * FROM history WHERE user_id=:userid", userid=1)
         return json.dumps([youritems, history])

@app.route("/add", methods=["GET", "POST"])
def add():

    if (request.method == "POST"):
        
        username = json.loads(request.json)["username"]

        image = json.loads(request.json)["image"] # frontend will have to first convert the image into a url...not ideal

        label = json.loads(request.json)["label"]

        userid = db.execute("SELECT user_id FROM inventory WHERE username=:username", username=username)

        userid = userid[0]["user_id"]

        db.execute("INSERT INTO inventory (user_id, username, image, label) VALUES (:userid, :username, :image, :label)", userid=userid, username=username, image=image, label=label)





